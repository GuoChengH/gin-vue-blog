/* empty css              */import{i as S}from"./image_api-BKp4trXH.js";import{d as R}from"./article_api-Cui2-luC.js";import{a as E}from"./tag_api-CTr4fgXS.js";import{c as N,r as _,o as c,d as v,f as l,w as o,e as m,F as j,q as A,k as q,t as F,h as r}from"./index-CQKID6YZ.js";const M=["src"],V=["src"],Q={__name:"gvb_article_model",props:{visible:{type:Boolean,default:!0},state:{type:Object,default:{title:"",abstract:"",banner_id:null,category:"",tags:[],link:"",source:""}},isEdit:{type:Boolean,default:!1},initDataState:{type:Object,default:{tagOptions:[],categoryOptions:[],bannerOptions:[]}}},emits:["update:visible","ok"],setup(y,{emit:L}){const g=N(null),e=_({title:"",abstract:"",banner_id:null,category:"",tags:[],link:"",source:""}),s=_({tagList:[],categoryList:[],bannerList:[]}),i=y,f=L,k=()=>{f("update:visible",!1)};function w(){try{g.value.validate()}catch{return}f("ok",e)}function x(u){return u[0].props.src}async function O(){if(!i.isEdit){let u=await E();s.tagList=u.data;let a=await R();s.categoryList=a.data;const n=(await S()).data;s.bannerList=n;const d=n[Math.floor(Math.random()*n.length)];e.banner_id=d.id}i.isEdit&&(s.tagList=i.initDataState.tagOptions,s.categoryList=i.initDataState.categoryOptions,s.bannerList=i.initDataState.bannerOptions,Object.assign(e,i.state))}return O(),(u,a)=>{const p=r("a-input"),n=r("a-form-item"),d=r("a-textarea"),h=r("a-auto-complete"),b=r("a-select"),U=r("a-select-option"),D=r("a-form"),B=r("a-modal");return c(),v("div",null,[l(B,{title:"完善文章信息",onCancel:k,open:i.visible,"onUpdate:open":a[7]||(a[7]=t=>i.visible=t),onOk:w},{default:o(()=>[l(D,{model:e,name:"basic",ref_key:"formRef",ref:g,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off"},{default:o(()=>[l(n,{label:"文章标题",name:"title","has-feedback":"",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:o(()=>[l(p,{value:e.title,"onUpdate:value":a[0]||(a[0]=t=>e.title=t),placeholder:"文章标题"},null,8,["value"])]),_:1}),l(n,{label:"文章简介"},{default:o(()=>[l(d,{value:e.abstract,"onUpdate:value":a[1]||(a[1]=t=>e.abstract=t),"auto-size":{minRows:2,maxRows:5},placeholder:"文章简介"},null,8,["value"])]),_:1}),l(n,{label:"文章分类"},{default:o(()=>[l(h,{value:e.category,"onUpdate:value":a[2]||(a[2]=t=>e.category=t),options:s.categoryList,placeholder:"文章分类"},null,8,["value","options"])]),_:1}),l(n,{label:"文章标签"},{default:o(()=>[l(b,{class:"gvb_select",value:e.tags,"onUpdate:value":a[3]||(a[3]=t=>e.tags=t),allowClear:"",mode:"tags",options:s.tagList,placeholder:"文章标签"},null,8,["value","options"])]),_:1}),l(n,{label:"文章封面"},{default:o(()=>[l(b,{ref:"select",value:e.banner_id,"onUpdate:value":a[4]||(a[4]=t=>e.banner_id=t),placeholder:"选择banner"},{tagRender:o(({value:t,label:C,closable:z,onClose:H,option:T})=>[m("img",{src:x(C),height:"30",style:{"border-radius":"5px","margin-right":"5px"}},null,8,V)]),default:o(()=>[(c(!0),v(j,null,A(s.bannerList,t=>(c(),q(U,{value:t.id,key:t.id},{default:o(()=>[m("img",{src:t.path,alt:"",height:"30",style:{"border-radius":"5px","margin-right":"10px"}},null,8,M),m("span",null,F(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(n,{label:"原文地址"},{default:o(()=>[l(p,{value:e.link,"onUpdate:value":a[5]||(a[5]=t=>e.link=t),placeholder:"原文地址"},null,8,["value"])]),_:1}),l(n,{label:"文章来源"},{default:o(()=>[l(p,{value:e.source,"onUpdate:value":a[6]||(a[6]=t=>e.source=t),placeholder:"文章来源"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])])}}};export{Q as _};