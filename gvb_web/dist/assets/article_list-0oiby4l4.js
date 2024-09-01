import{_ as F}from"./gvb_table-DwXhQnu9.js";import{a as H}from"./tag_api-DDYv3k3r.js";import{d as R,u as S}from"./article_api-BZl38PjZ.js";import{a as q,b as j,c as b,r as O,d as l,k as V,l as d,f as p,w as o,g as A,o as n,i as r,t as u,e as c,F as z,q as G,h as k}from"./index-Sy54AUqK.js";import{_ as J}from"./gvb_article_model-CYamKHcH.js";import{i as K}from"./image_api-CdPAa1or.js";import"./data-DE6nU9bg.js";/* empty css              */const P={key:0},Q=["innerHTML"],W=["src"],X={key:3,class:"gvb_article_data"},Y=c("i",{class:"fa fa-eye"},null,-1),Z=c("i",{class:"fa fa-thumbs-o-up"},null,-1),tt=c("i",{class:"fa fa-comment-o"},null,-1),et=c("i",{class:"fa fa-star-o"},null,-1),at={key:4,class:"gvb_article_abstract"},st={key:5,class:"gvb_article_tags"},pt={__name:"article_list",setup(it){const f=q(),v=j(),y=b(null),m=b(null),h=b(null),e=O({list:[{abstract:"",banner_id:3,banner_url:"",category:"p1",collects_count:0,comment_count:0,created_at:"",digg_count:0,id:"",look_count:0,tags:[],title:"",updated_at:"",user_avatar:"",user_id:1,user_nick_name:""}],columns:[{title:"id",dataIndex:"id",key:"id"},{title:"文章标题",dataIndex:"title",key:"title"},{title:"文章分类",dataIndex:"category",key:"category"},{title:"文章简介",dataIndex:"abstract",key:"abstract"},{title:"作者",dataIndex:"user_nick_name",key:"user_nick_name"},{title:"封面",dataIndex:"banner_url",key:"banner_url"},{title:"文章数据",dataIndex:"data",key:"data"},{title:"标签",dataIndex:"tags",key:"tags"},{title:"发布时间",dataIndex:"created_at",key:"created_at"},{title:"操作",dataIndex:"action",key:"action"}],editVisible:!1,state:{title:"",abstract:"",banner_id:0,category:"",tags:[],link:"",source:""},editID:""}),_=O({tagOptions:[],categoryOptions:[],bannerOptions:[]}),L=["red","blue","green","purple","cyan","orange","pink"];function T(t){return L[t]}function x(){h.value.ExportList({tag:y.value,key:m.value})}async function C(){let t=await H();_.tagOptions=t.data;let s=await R();_.categoryOptions=s.data;let g=await K();_.bannerOptions=g.data}async function D(){await f.push({name:"add_article"}),v.addTab({name:"add_article",title:"添加文章"})}function N(t){e.state.title=t.title,e.state.abstract=t.abstract,e.state.banner_id=t.banner_id,e.state.category=t.category,e.state.tags=t.tags,e.state.link=t.link,e.state.source=t.source,e.editID=t.id,e.editVisible=!0}function B(t){f.push({name:"edit_article",params:{id:t.id}}),v.addTab({name:"edit_article",title:"编辑文章"})}async function E(t){let s=await S(e.editID,t);if(s.code){A.error(s.msg);return}A.success(s.msg),e.editVisible=!1,C()}return C(),(t,s)=>{const g=k("a-button"),M=k("a-tag"),w=k("a-select");return n(),l("div",null,[e.editVisible?(n(),V(J,{key:0,visible:e.editVisible,"onUpdate:visible":s[0]||(s[0]=a=>e.editVisible=a),onOk:E,state:e.state,"is-edit":"","init-data-state":_},null,8,["visible","state","init-data-state"])):d("",!0),p(F,{columns:e.columns,baseURL:"/api/articles","like-title":"搜索文章标题",ref_key:"gvbTable",ref:h,"default-delete":""},{add:o(()=>[p(g,{type:"primary",onClick:D},{default:o(()=>[r("添加")]),_:1})]),edit:o(({record:a})=>[p(g,{type:"primary",onClick:i=>N(a)},{default:o(()=>[r("编辑")]),_:2},1032,["onClick"]),p(g,{type:"primary",onClick:i=>B(a)},{default:o(()=>[r("正文编辑")]),_:2},1032,["onClick"])]),cell:o(({column:a,record:i,index:U})=>[a.key==="index"?(n(),l("span",P,u(U+1),1)):d("",!0),a.key==="title"?(n(),l("span",{key:1,class:"gvb_article_title",innerHTML:i.title},null,8,Q)):d("",!0),a.key==="banner_url"?(n(),l("img",{key:2,src:i.banner_url,alt:"",height:"60",style:{"border-radius":"5px"}},null,8,W)):d("",!0),a.key==="data"?(n(),l("div",X,[c("span",null,[Y,r(u(i.look_count),1)]),c("span",null,[Z,r(u(i.digg_count),1)]),c("span",null,[tt,r(u(i.comment_count),1)]),c("span",null,[et,r(u(i.collects_count),1)])])):d("",!0),a.key==="abstract"?(n(),l("span",at,u(i.abstract),1)):d("",!0),a.key==="tags"?(n(),l("div",st,[(n(!0),l(z,null,G(i.tags,($,I)=>(n(),V(M,{color:T(I),key:I},{default:o(()=>[r(u($),1)]),_:2},1032,["color"]))),128))])):d("",!0)]),filters:o(()=>[p(w,{class:"gvb_select",value:y.value,"onUpdate:value":s[1]||(s[1]=a=>y.value=a),style:{width:"200px"},allowClear:"",onChange:x,options:_.tagOptions,placeholder:"筛选文章标签"},null,8,["value","options"]),p(w,{class:"gvb_select",value:m.value,"onUpdate:value":s[2]||(s[2]=a=>m.value=a),style:{width:"200px"},allowClear:"",onChange:x,options:_.categoryOptions,placeholder:"筛选文章分类"},null,8,["value","options"])]),_:1},8,["columns"])])}}};export{pt as default};
