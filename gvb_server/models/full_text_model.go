package models

import (
	"context"
	"gvb_server/gvb_server/global"

	"github.com/sirupsen/logrus"
)

type FullTextModel struct {
	ID    string `json:"id" structs:"id"`     //es的ID
	Key   string `json:"key" structs:"key"`   //文章关联的ID
	Title string `json:"title"`               //文章标题
	Slug  string `json:"slug" structs:"slug"` //文章slug
	Body  string `json:"body" structs:"body"` //文章内容
}

func (FullTextModel) Index() string {
	return "full_text_index"
}
func (FullTextModel) Mapping() string {
	return `
  {
	"settings": {
	  "index":{
		"max_result_window": "100000"
	  }
	}, 
	"mappings": {
	  "properties": {
		"title": { 
		  "type": "text"
		},
		"body": { 
		  "type": "text"
		},
		"key": { 
		  "type": "keyword"
		},
		"slug": { 
		  "type": "keyword"
		}
	  }
	}
  }
  `
}

// IndexExists 索引是否存在
func (a FullTextModel) IndexExists() bool {
	exists, err := global.ESClient.
		IndexExists(a.Index()).
		Do(context.Background())
	if err != nil {
		logrus.Error(err.Error())
		return exists
	}
	return exists
}

// CreateIndex 创建索引
func (a FullTextModel) CreateIndex() error {
	if a.IndexExists() {
		// 有索引
		a.RemoveIndex()
	}
	// 没有索引
	// 创建索引
	createIndex, err := global.ESClient.
		CreateIndex(a.Index()).
		BodyString(a.Mapping()).
		Do(context.Background())
	if err != nil {
		logrus.Error("创建索引失败")
		logrus.Error(err.Error())
		return err
	}
	if !createIndex.Acknowledged {
		logrus.Error("创建失败")
		return err
	}
	logrus.Infof("索引 %s 创建成功", a.Index())
	return nil
}

// RemoveIndex 删除索引
func (a FullTextModel) RemoveIndex() error {
	logrus.Info("索引存在，删除索引")
	// 删除索引
	indexDelete, err := global.ESClient.DeleteIndex(a.Index()).Do(context.Background())
	if err != nil {
		logrus.Error("删除索引失败")
		logrus.Error(err.Error())
		return err
	}
	if !indexDelete.Acknowledged {
		logrus.Error("删除索引失败")
		return err
	}
	logrus.Info("索引删除成功")
	return nil
}
