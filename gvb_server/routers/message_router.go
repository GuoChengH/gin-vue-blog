package routers

import (
	"gvb_server/gvb_server/api"
	"gvb_server/gvb_server/middleware"
)

func (router RouterGroup) MessageRouter() {
	app := api.ApiGroupApp.MessageApi
	router.POST("messages", middleware.JwtAuth(), app.MessageCreateView)
	router.GET("messages", middleware.JwtAuth(), app.MessageListView)
	router.GET("messages_all", app.MessageListAllView)
	router.POST("messages_record", middleware.JwtAuth(), app.MessageRecordView)

}
