import{i as x,a as b,g as w,_ as k}from"./data_api-CDRjdbm0.js";import{b as h,v as S,o as c,d as _,c as L,r as v,y as j,k as C,l as D,e as a,F as B,q as A,f as m,g as $,n as N,t as p}from"./index-Sy54AUqK.js";import"./article_api-BZl38PjZ.js";const V={id:"week_dom",style:{height:"200px"}},z={__name:"login_sign_data",props:{data:{type:Object}},setup(d){const i=h(),s=d;function t(){let e=s.data.date_list,o=s.data.login_data,l=s.data.sign_data,n="#f0eeee",r="#555555",g=["#73c0de","#2184fc"];i.theme||(n="#404148",r="#f0eeee",g=["#fac858","#ee6666"]);let y=document.getElementById("week_dom"),f=x(y),u;u={title:{text:"七日用户活跃",textStyle:{color:r},padding:[15,20]},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["登录","注册"],padding:[20,20],textStyle:{color:r}},toolbox:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:e,axisLine:{lineStyle:{}},splitLine:{}},yAxis:{type:"value",axisLine:{},splitLine:{show:!0,lineStyle:{color:n}}},series:[{name:"登录",type:"line",areaStyle:{},smooth:!0,emphasis:{focus:"series"},data:o},{name:"注册",type:"line",smooth:!0,areaStyle:{},emphasis:{focus:"series"},data:l}],color:g},u&&f.setOption(u)}return S(()=>{t()}),(e,o)=>(c(),_("div",V))}},E={__name:"week_chart",setup(d){const i=h(),s=L(!0),t=v({date_list:[],login_data:[],sign_data:[]});j(()=>i.theme,()=>{s.value=!1,setTimeout(()=>{s.value=!0})});async function e(){let o=await b();t.date_list=o.data.date_list,t.login_data=o.data.login_data,t.sign_data=o.data.sign_data}return e(),(o,l)=>s.value&&t.date_list.length?(c(),C(z,{key:0,data:t},null,8,["data"])):D("",!0)}},F={class:"gvb_data_preview"},O={class:"icon"},q={class:"text"},G={class:"data_title"},I={class:"data_sum"},M={class:"gvb_data_charts"},P={class:"left"},T={class:"article_calendar"},W={class:"week_data"},H=a("div",{class:"right"},null,-1),R={__name:"home",setup(d){const i=["icon-yonghutongji","icon-icon_xytjbb","icon-xiaoxitongji","icon-yonghuzhucetongji","icon-denglutongji"];async function s(){let e=await w();if(e.code){$.error(e.msg);return}t.sum_data_list[0].value=e.data.user_count,t.sum_data_list[1].value=e.data.article_count,t.sum_data_list[2].value=e.data.message_count,t.sum_data_list[3].value=e.data.now_sign_count,t.sum_data_list[4].value=e.data.now_login_count}s();const t=v({sum_data_list:[{label:"用户总数",value:11},{label:"文章总数",value:221},{label:"消息总数",value:1},{label:"今日注册",value:2121},{label:"今日登录",value:23321}]});return(e,o)=>(c(),_("div",null,[a("div",F,[(c(!0),_(B,null,A(t.sum_data_list,(l,n)=>(c(),_("div",{class:"preview_item",key:n},[a("div",O,[a("i",{class:N("iconfont "+i[n])},null,2)]),a("div",q,[a("div",G,p(l.label),1),a("div",I,p(l.value),1)])]))),128))]),a("div",M,[a("div",P,[a("div",T,[m(k,{"is-title":!0})]),a("div",W,[m(E)])]),H])]))}};export{R as default};
