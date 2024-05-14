package es_ser

import (
	"context"
	"encoding/json"
	"errors"
	"gvb_server/gvb_server/global"
	"gvb_server/gvb_server/models"
	"gvb_server/gvb_server/service/redis_ser"
	"strings"

	"github.com/olivere/elastic/v7"
	"github.com/sirupsen/logrus"
)

func CommList(option Option) (list []models.ArticleModel, count int, err error) {
	boolSearch := elastic.NewBoolQuery()
	if option.Key != "" {
		boolSearch.Must(
			elastic.NewMultiMatchQuery(option.Key, option.Fields...),
		)
	}
	if option.Tag != "" {
		boolSearch.Must(
			elastic.NewMultiMatchQuery(option.Tag, "tags"),
		)
	}
	type SortField struct {
		Field     string
		Ascending bool
	}
	sortField := SortField{
		Field:     "created_at",
		Ascending: false, //从大到小排序
	}
	if option.Sort != "" {
		_list := strings.Split(option.Sort, " ")
		if len(_list) == 2 {
			sortField.Field = _list[0]
			if _list[1] == "desc" {
				sortField.Ascending = false
			} else {
				sortField.Ascending = true
			}
		}
	}
	res, err := global.ESClient.
		Search(models.ArticleModel{}.Index()).
		Query(boolSearch).
		Highlight(elastic.NewHighlight().Field("title")).
		From(option.GetFrom()).
		Sort(sortField.Field, sortField.Ascending).
		Size(option.Limit).
		Do(context.Background())
	if err != nil {
		return
	}

	count = int(res.Hits.TotalHits.Value)
	demoList := []models.ArticleModel{}
	diggInfo := redis_ser.NewDigg().GetInfo()
	lookInfo := redis_ser.NewLook().GetInfo()
	commentInfo := redis_ser.NewCommentCount().GetInfo()
	for _, hit := range res.Hits.Hits {
		var model models.ArticleModel
		err = json.Unmarshal(hit.Source, &model)
		if err != nil {
			logrus.Error(err.Error())
			continue
		}
		title, ok := hit.Highlight["title"]
		if ok {
			model.Title = title[0]
		}
		model.ID = hit.Id
		digg := diggInfo[hit.Id]
		look := lookInfo[hit.Id]
		comment := commentInfo[hit.Id]

		model.DiggCount = model.DiggCount + int(digg)
		model.LookCount = model.LookCount + int(look)
		model.CommentCount = model.CommentCount + int(comment)

		demoList = append(demoList, model)
	}
	return demoList, count, nil
}

func CommDetail(id string) (model models.ArticleModel, err error) {
	res, err := global.ESClient.Get().
		Index(models.ArticleModel{}.Index()).
		Id(id).
		Do(context.Background())
	if err != nil {
		return
	}
	err = json.Unmarshal(res.Source, &model)
	if err != nil {
		return
	}
	model.ID = res.Id
	model.LookCount = model.LookCount + redis_ser.NewLook().Get(res.Id)
	return
}
func CommDetailByKeyword(key string) (model models.ArticleModel, err error) {
	res, err := global.ESClient.Search().
		Index(models.ArticleModel{}.Index()).
		Query(elastic.NewTermQuery("keyword", key)).
		Size(1).
		Do(context.Background())
	if err != nil {
		return
	}
	if res.Hits.TotalHits.Value == 0 {
		return model, errors.New("文章不存在")
	}
	hit := res.Hits.Hits[0]

	err = json.Unmarshal(hit.Source, &model)
	if err != nil {
		return
	}
	model.ID = hit.Id

	return
}

func ArticleUpdate(id string, data map[string]any) error {
	_, err := global.ESClient.
		Update().
		Index(models.ArticleModel{}.Index()).
		Id(id).
		Doc(data).
		Do(context.Background())

	return err
}