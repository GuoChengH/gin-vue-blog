import{_ as x}from"./gvb_user_info-Bxh_xYGC.js";import{c as C,r as p,h as v,o as e,d as l,f as _,w as f,e as s,F as b,q as y,t as m,l as L,g as B,b as N,i as k,s as w,k as S,n as T}from"./index-Csyz-WVi.js";import{s as V}from"./article_api-V3HofU-P.js";const E={class:"search_text_head"},M={class:"search_text_body"},q=["onClick"],z={class:"search_title"},A=["innerHTML"],F={key:0,class:"search_text_footer"},H={__name:"gvb_text_search",setup(g){const r=C(!1),t=p({list:[],total:0}),o=p({key:"",limit:10,page:1});function u(){r.value=!0}function h(a){window.open("/article/"+a,"_blank")}async function d(){let a=await V(o);if(a.code){B.error(a.msg);return}t.list=a.data.list,t.total=a.data.count,console.log(t.list)}return(a,i)=>{const c=v("a-input-search"),$=v("a-modal");return e(),l("div",null,[_($,{title:"全文搜索",visible:r.value,"onUpdate:visible":i[1]||(i[1]=n=>r.value=n),class:"search_modal",footer:null,width:"40%"},{default:f(()=>[s("div",E,[_(c,{value:o.key,"onUpdate:value":i[0]||(i[0]=n=>o.key=n),placeholder:"输入搜索内容","enter-button":"",size:"large",onSearch:d},null,8,["value"])]),s("div",M,[(e(!0),l(b,null,y(t.list,n=>(e(),l("div",{class:"item",onClick:J=>h(n.slug),key:n.id},[s("div",z,m(n.title),1),s("div",{class:"search_text",innerHTML:n.body},null,8,A)],8,q))),128))]),t.list.length?(e(),l("div",F," 共搜索到结果 "+m(t.total)+" 条",1)):L("",!0)]),_:1},8,["visible"]),s("i",{class:"fa fa-search",onClick:u})])}}},I={class:"gvb_nav_container"},O=s("div",{class:"logo"},[s("div",null,"LOGO")],-1),U={class:"left"},D={class:"search"},G={class:"right"},j={key:0,class:"login_btn"},R={__name:"gvb_nav",props:{is_show:{type:Boolean,default:!1}},setup(g){const r=N(),t=g,o=p({is_show:!1});async function u(){t.is_show?o.is_show=!0:window.addEventListener("scroll",h)}u();function h(){document.documentElement.scrollTop>=200?o.is_show=!0:o.is_show=!1}return(d,a)=>{const i=v("router-link");return e(),l("div",{class:T({gvb_nav:!0,show:o.is_show})},[s("div",I,[O,s("div",U,[(e(!0),l(b,null,y(w(r).navList,c=>(e(),l("span",{key:c.id},[_(i,{to:c.path},{default:f(()=>[k(m(c.title),1)]),_:2},1032,["to"])]))),128)),s("span",D,[_(H)])]),s("div",G,[w(r).userInfo.role===0?(e(),l("span",j,[_(i,{to:{name:"login",query:{redirect_url:d.$router.path}}},{default:f(()=>[k("登录")]),_:1},8,["to"])])):(e(),S(x,{key:1,class:"gvb_user_info"}))])])],2)}}};export{R as _};
