package routers

import "gvb_server/gvb_server/api"

func (router RouterGroup) TagRouter() {
	app := api.ApiGroupApp.TagApi
	router.POST("tags", app.TagCreateView)
	router.GET("tags", app.TagListView)
	router.GET("tag_names", app.TagNameList)
	router.PUT("tags/:id", app.TagUpdateView)
	router.DELETE("tags", app.TagRemoveView)
}
