import{b as j,u as R,r as A,h as b,o as _,d as m,F as z,q as K,e as t,t as i,s as d,f as u,w as D,l as x,z as H,B as G,i as T,g as r,c as M,v as O,k as L,A as W,n as N}from"./index-Csyz-WVi.js";import{_ as J}from"./gvb_nav-D7Oc60RV.js";import{_ as Q}from"./gvb_banner-GyZux1B7.js";import{G as X}from"./gvb_footer-UItwfFNX.js";import{a as Y,b as Z,c as tt}from"./article_api-V3HofU-P.js";import{a as B}from"./data-DE6nU9bg.js";import{M as et,a as ot}from"./index-BjktdlfW.js";/* empty css              */import{g as st,c as P,a as nt}from"./comment_api-Cm0tKtln.js";import"./gvb_user_info-Bxh_xYGC.js";import"./logout-B7t-cSRp.js";import"./user_api-DLmzQZL-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ct={class:"gvb_article_comment_list"},it={class:"avatar"},at=["src"],lt={class:"comment"},rt={class:"name"},_t={class:"comment_content"},dt={class:"info"},ut={class:"date"},mt=["onClick"],pt={key:0,class:"delete"},ft={class:"sub_comment_list"},ht={class:"sub_avatar"},vt=["src"],gt={class:"sub_comment"},yt={class:"line"},bt={class:"name"},kt={class:"content"},wt={class:"info"},Ct={class:"date"},$t=["onClick"],xt={key:1,class:"sub_comment_apply"},Tt=["src"],At={__name:"gvb_article_comment_list",setup(U,{expose:I}){const v=j(),k=R().params.id,h=A({list:[{article_id:"",comment_count:0,comment_model:"",content:"",digg_count:0,parent_comment_id:0,sub_comments:[],model:{id:"",created_at:""},user:{addr:"",avatar:"",created_at:"",email:"",id:0,integral:0,ip:"",link:"",nick_name:"",role:1,sign:"",sign_status:1,tel:"",token:"",user_name:""},user_id:0}]}),l=A({article_id:k,content:"",parent_comment_id:null,nick_name:""}),p=v.userInfo.role,w=v.userInfo.user_id;async function e(){let a=await st(k);h.list=S(a.data),console.log(h.list)}function S(a){return a.map(n=>(n.created_at=B(n.created_at),n.sub_comments&&n.sub_comments.length>0&&(n.sub_comments=S(n.sub_comments)),n))}function q(a,n){if(v.userInfo.role===0){r.warn("请先登录");return}console.log("Called showApply with parentID:",a,"and nickName:",n),a||console.error("parentID is undefined"),l.content="",l.parent_comment_id=a,l.nick_name=n}async function V(){if(l.content.trim()===""){r.warn("评论内容不可为空");return}let a=await P(l);if(a.code){r.error(a.msg);return}r.success(a.msg),l.content="",e()}async function C(a){let n=await nt(a);if(n.code){r.error(n.msg);return}r.success(n.msg),e()}return I({getData:e}),e(),console.log(h.list),(a,n)=>{const $=b("a-popconfirm"),o=b("a-input"),f=b("a-button");return _(),m("div",ct,[(_(!0),m(z,null,K(h.list,s=>(_(),m("div",{class:"gvb_comment_item",key:s.model.id},[t("div",it,[t("img",{src:s.user.avatar,alt:""},null,8,at)]),t("div",lt,[t("div",rt,i(s.user.nick_name),1),t("div",_t,i(s.content),1),t("div",dt,[t("span",ut,i(d(B)(s.model.created_at)),1),t("span",{class:"apply",onClick:c=>q(s.model.id,s.user.nick_name)},"回复 ("+i(s.comment_count)+")",9,mt),u($,{title:"确定删除这条评论吗","ok-text":"删除","cancel-text":"取消",onConfirm:c=>C(s.model.id)},{default:D(()=>[d(p)===1||d(w)===s.user_id?(_(),m("span",pt,"删除")):x("",!0)]),_:2},1032,["onConfirm"])]),t("div",ft,[s.sub_comments.length?(_(!0),m(z,{key:0},K(s.sub_comments,c=>(_(),m("div",{class:"sub_comment_item",key:c.model.id},[t("div",ht,[t("img",{src:c.user.avatar,alt:""},null,8,vt)]),t("div",gt,[t("div",yt,[t("span",bt,i(c.user.nick_name),1),t("span",kt,i(c.content),1)]),t("div",wt,[t("span",Ct,i(d(B)(c.model.created_at)),1),u($,{title:"确定删除这条评论吗","ok-text":"删除","cancel-text":"取消",onConfirm:g=>C(c.model.id)},{default:D(()=>[d(p)===1||d(w)===c.user_id?(_(),m("span",{key:0,class:"delete",onClick:g=>C(c.model.id)},"删除",8,$t)):x("",!0)]),_:2},1032,["onConfirm"])])])]))),128)):x("",!0),l.parent_comment_id===s.model.id?(_(),m("div",xt,[t("img",{src:d(v).userInfo.avatar,alt:"",class:"user_avatar"},null,8,Tt),u(o,{class:"comment_ipt",onKeydown:H(G(V,["ctrl"]),["enter"]),value:l.content,"onUpdate:value":n[0]||(n[0]=c=>l.content=c),placeholder:"回复 @ "+l.nick_name},null,8,["onKeydown","value","placeholder"]),u(f,{type:"primary",onClick:V},{default:D(()=>[T("回复")]),_:1})])):x("",!0)])])]))),128))])}}},Dt={class:"base_view article_view"},It={style:{height:"600px"}},Et={class:"gvb_base_container"},St={class:"gvb_inner_container"},Vt=t("div",{class:"go_top_box",style:{position:"absolute",top:"540px"}},null,-1),Bt={class:"article_head"},qt={class:"info"},Mt={class:"date"},zt={class:"tag"},Kt=t("i",{title:"文章标签",class:"fa fa-tags"},null,-1),Lt={class:"article_content"},Nt=t("div",{class:"article_on_the"},[t("div",{class:"article_on_the_inner"},[t("a",{href:"#"},"上一篇"),t("a",{href:"#"},"下一篇")])],-1),Ft={class:"article_comment_to"},Rt=t("div",{class:"title"},"你觉得文章怎么样",-1),Ht={class:"body"},Gt={class:"comment_footer"},Pt={class:"article_user_info"},Ut={class:"user_info_avatar"},jt=["src"],Ot={class:"user_info_info"},Wt={class:"user_name"},Jt=t("div",{class:"user_abstract"}," 一个疯狂的coder ",-1),Qt=t("div",{class:"user_link"},[t("a",{href:"#"},[t("i",{class:"fa fa-github-square"})])],-1),Xt={class:"article_data"},Yt={class:"item"},Zt=t("span",null,"浏览",-1),te={class:"item"},ee=t("span",null,"收藏",-1),oe={class:"item"},se=t("span",null,"点赞",-1),ne={class:"item"},ce=t("span",null,"评论",-1),ie={class:"article_directory"},ae=t("div",{class:"title"}," 文章目录 ",-1),le={class:"body"},re={class:"article_action"},_e=t("i",{class:"iconfont icon-dianzan"},null,-1),de=[_e],ue=t("i",{class:"iconfont icon-shoucang"},null,-1),me=[ue],pe=t("i",{class:"iconfont icon-dingbu"},null,-1),fe=[pe],he=t("i",{class:"iconfont icon-dibu"},null,-1),ve=[he],F="preview-only-po",Se={__name:"article",setup(U){const I=M(null),v=document.documentElement,E=M(null),k=R(),h=M(),l=A({position:"inherit",width:"auto",top:"60px"}),p=A({article_id:k.params.id,content:"",parent_comment_id:null});async function w(){if(p.content.trim()===""){r.warn("评论内容不能为空");return}let o=await P(p);if(o.code){r.error(o.msg);return}r.success(o.msg),p.content="",I.value.getData()}const e=A({abstract:"",banner_id:0,banner_url:"",category:"",collects_count:0,comment_count:0,content:"",created_at:"",digg_count:0,id:"",keyword:"",link:"",look_count:0,source:"",tags:[],title:"",updated_at:"",user_avatar:"",user_id:0,user_nick_name:"",is_collect:!1,is_digg:!1});async function S(){let o=await Y(k.params.id);if(o.code){r.error(o.msg);return}Object.assign(e,o.data)}function q(){(document.scrollingElement.scrollTop||document.body.scrollTop)>=h.value?l.position="fixed":l.position="inherit"}async function V(){let o=await Z(e.id);if(o.code){r.error(o.msg);return}r.success(o.msg),e.is_digg=!0,e.digg_count++,setTimeout(()=>{e.is_digg=!1},1e3)}async function C(){console.log(e.id);let o=await tt(e.id);if(o.code){r.error(o.msg);return}r.success(o.msg),e.is_collect=!e.is_collect}O(()=>{h.value=E.value.offsetTop-38,l.width=E.value.scrollWidth+"px";let o=document.querySelector(".md-editor-catalog ");window.addEventListener("scroll",q),setTimeout(()=>{o.scrollHeight;let s=document.documentElement.offsetHeight-470;document.querySelector(".article_directory .body").style.maxHeight=s+"px"},100)});function a(){$(".article_comment_ipt"),setTimeout(()=>{document.querySelector(".article_comment_ipt").focus()},800)}function n(){$(".go_top_box")}function $(o){const f=document.querySelector(o),s=f.offsetTop;if(typeof window.getComputedStyle(document.body).scrollBehavior>"u"){let c=document.documentElement.scrollTop||document.body.scrollTop;const g=function(){let y=s-c;c=c+y/5,Math.abs(y)<1?window.scrollTo(0,s):(window.scrollTo(0,c),setTimeout(g,20))};g()}else f.scrollIntoView({behavior:"smooth",inline:"nearest"})}return S(),(o,f)=>{const s=b("a-tag"),c=b("a-textarea"),g=b("a-button");return _(),m("div",Dt,[u(J),t("div",It,[e.title!==""?(_(),L(Q,{key:0,url:e.banner_url,slogan:e.title,abstract:e.abstract,"is-article":""},null,8,["url","slogan","abstract"])):x("",!0)]),t("div",Et,[t("div",St,[Vt,t("article",null,[t("div",Bt,[t("h2",null,i(e.title),1),t("div",qt,[t("span",Mt,"发布时间："+i(d(B)(e.created_at)),1),t("span",null,"作者："+i(e.user_nick_name),1)]),t("div",zt,[Kt,(_(!0),m(z,null,K(e.tags,y=>(_(),L(s,{color:"red"},{default:D(()=>[T(i(y),1)]),_:2},1024))),256))])]),t("div",Lt,[u(d(et),{editorId:F,modelValue:e.content},null,8,["modelValue"])]),Nt,t("div",Ft,[Rt,t("div",Ht,[u(c,{class:"article_comment_ipt",value:p.content,"onUpdate:value":f[0]||(f[0]=y=>p.content=y),"auto-size":{minRows:6,maxRows:6},placeholder:"请输入文章评论",onKeydown:H(G(w,["ctrl"]),["enter"])},null,8,["value","onKeydown"]),u(g,{class:"add_comment_btn",onClick:w,type:"primary"},{default:D(()=>[T("发布")]),_:1})]),t("div",Gt,[t("span",null,i(e.look_count),1),T(" 人参与， "),t("span",null,i(e.comment_count),1),T(" 条评论 ")])]),u(At,{ref_key:"gvbArticleCommentList",ref:I},null,512)]),t("aside",null,[t("div",Pt,[t("div",Ut,[t("img",{src:e.user_avatar,alt:""},null,8,jt)]),t("div",Ot,[t("div",Wt,i(e.user_nick_name),1),Jt]),Qt,t("div",Xt,[t("div",Yt,[t("span",null,i(e.look_count),1),Zt]),t("div",te,[t("span",null,i(e.collects_count),1),ee]),t("div",oe,[t("span",null,i(e.digg_count),1),se]),t("div",ne,[t("span",null,i(e.comment_count),1),ce])])]),t("div",{class:"article_directory_action",ref_key:"article_directory",ref:E,style:W(l)},[t("div",ie,[ae,t("div",le,[u(d(ot),{ref:"articleCatalog",editorId:F,"scroll-element":d(v),"scroll-element-offset-top":80,offsetTop:100},null,8,["scroll-element"])])]),t("div",re,[t("div",{class:N({item:!0,active:e.is_digg}),onClick:V},de,2),t("div",{class:N({item:!0,active:e.is_collect}),onClick:C},me,2),t("div",{class:"item",onClick:n},fe),t("div",{class:"item",onClick:a},ve)])],4)])])]),u(X)])}}};export{Se as default};
