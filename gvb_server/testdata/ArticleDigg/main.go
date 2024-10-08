package main

import (
	"context"
	"encoding/json"
	"gvb_server/gvb_server/core"
	"gvb_server/gvb_server/global"
	"gvb_server/gvb_server/models"
	"gvb_server/gvb_server/service/redis_ser"

	"github.com/olivere/elastic/v7"
	"github.com/sirupsen/logrus"
)

func main() {
	// 读取配置文件
	core.InitConf()
	// 初始化日志
	global.Log = core.InitLogger()

	global.Redis = core.ConnectRedis()
	global.ESClient = core.EsConnect()

	result, err := global.ESClient.
		Search(models.ArticleModel{}.Index()).
		Query(elastic.NewMatchAllQuery()).
		Size(10000).
		Do(context.Background())
	if err != nil {
		logrus.Error(err)
		return
	}

	diggInfo := redis_ser.GetDiggInfo()
	lookInfo := redis_ser.GetLookInfo()
	for _, hit := range result.Hits.Hits {
		var article models.ArticleModel
		json.Unmarshal(hit.Source, &article)

		digg := diggInfo[hit.Id]
		look := lookInfo[hit.Id]

		newDigg := article.DiggCount + digg
		newLook := article.LookCount + look

		if article.DiggCount == newDigg && article.LookCount == newLook {
			logrus.Info(article.Title, "点赞数 和 浏览数无变化")
			continue
		}
		_, err := global.ESClient.
			Update().
			Index(models.ArticleModel{}.Index()).
			Id(hit.Id).
			Doc(map[string]int{
				"digg_count": newDigg,
				"look_count": newLook,
			}).
			Do(context.Background())
		if err != nil {
			logrus.Error(err.Error())
			continue
		}
		logrus.Info(article.Title, "点赞数据同步成功,点赞数: ", newDigg, " 浏览数: ", newLook)
	}
	redis_ser.DiggClear()
	redis_ser.LookClear()

}
