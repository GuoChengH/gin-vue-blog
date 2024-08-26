import { Service } from "@/services/service";

export function getCategoryListApi(){
    return Service.get("/api/categorys")
}

export function createArticleApi(data){
    return Service.post("/api/articles",data)
}

export function updateArticleApi(id,data){
    data.id = id
    return Service.put("/api/articles",data)
}

export function getArticleContentApi(id){
    return Service.get("/api/article/content/"+id)
}

export function getArticleIDTitle(){
    return Service.get("/api/article_id_title")
}

export function getArticleCalendarApi(){
    return Service.get("/api/article/calendar")
}

export function getArticleListApi(params){
    return Service.get("/api/articles",{params})
}

export function getArticleDetailApi(id){
    return Service.get("/api/article/" + id)
}

export function articleDiggApi(params){
    return Service.post("/api/digg/article",{params})
}

export function articleCollectApi(params){
    return Service.post("/api/articles/collects",{params})
}