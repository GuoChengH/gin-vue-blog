import{c as s,r as m,d as k,f as r,w as t,o as d,k as b,i as g,t as x,l as y,h as i}from"./index-Csyz-WVi.js";import{_ as I}from"./gvb_table-G_plVNMz.js";import"./data-DE6nU9bg.js";const T={__name:"log_list",setup(w){const c={debug:"green",info:"blue",warn:"orange",error:"red"},u=[{label:"debug",value:1},{label:"info",value:2},{label:"warn",value:3},{label:"error",value:4}],e=s(void 0),a=s(null);function v(){a.value.ExportList({level:e.value})}const p=m({columns:[{title:"id",dataIndex:"id",key:"id"},{title:"ip",dataIndex:"ip",key:"ip"},{title:"地址",dataIndex:"addr",key:"addr"},{title:"等级",dataIndex:"level",key:"level"},{title:"内容",dataIndex:"content",key:"content"},{title:"日志时间",dataIndex:"created_at",key:"created_at"},{title:"操作",dataIndex:"action",key:"action"}]});return(C,o)=>{const _=i("a-tag"),f=i("a-select");return d(),k("div",null,[r(I,{columns:p.columns,baseURL:"/api/logs","like-title":"搜索日志名称",ref_key:"gvbTable",ref:a,"is-add":!1,"is-edit":!1,"default-delete":""},{cell:t(({column:l,record:n})=>[l.key==="level"?(d(),b(_,{key:0,color:c[n.level]},{default:t(()=>[g(x(n.level),1)]),_:2},1032,["color"])):y("",!0)]),filters:t(()=>[r(f,{class:"gvb_select",value:e.value,"onUpdate:value":o[0]||(o[0]=l=>e.value=l),style:{width:"200px"},allowClear:"",onChange:v,options:u,placeholder:"筛选日志等级"},null,8,["value"])]),_:1},8,["columns"])])}}};export{T as default};
