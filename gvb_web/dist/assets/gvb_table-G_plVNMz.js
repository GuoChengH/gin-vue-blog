import{a as G}from"./data-DE6nU9bg.js";import{S as K,r as C,o as c,d as h,e as r,f as d,m as p,w as l,P as k,Q as w,g as y,h as u,k as R,i as v,l as m,F as B,t as O,s as Q}from"./index-Csyz-WVi.js";function q(f,g){return K.get(f,{params:g,headers:{Gvb_referer:"admin"}})}function D(f,g){return K.delete(f,{data:{id_list:g}})}const H={class:"gvb_container"},I={class:"gvb_search"},J={class:"gvb_refresh"},M=r("i",{class:"fa fa-refresh"},null,-1),W=r("div",{class:"gvb_divider"},null,-1),X={class:"gvb_actions"},Y={class:"gvb_tables"},Z={class:"gvb_pages"},ae={__name:"gvb_table",props:{columns:{type:Array},baseURL:{type:String},isAdd:{type:Boolean,default:!0},isEdit:{type:Boolean,default:!0},isDelete:{type:Boolean,default:!0},isSelect:{type:Boolean,default:!0},filters:{type:Array},pageSize:{type:Number,default:7},likeTitle:{type:String,default:"模糊搜索"},defaultDelete:{type:Boolean,default:!1}},emits:["delete","edit"],setup(f,{expose:g,emit:L}){const S=L,o=f,t=C({page:1,limit:o.pageSize,key:""}),s=C({list:[],selectedRowKeys:[],count:0,spinning:!0});function U(e){s.selectedRowKeys=e}async function $(){if(o.defaultDelete){let e=await D(o.baseURL,s.selectedRowKeys);if(e.code){y.error(e.msg);return}y.success(e.msg),i(t);return}S("delete",s.selectedRowKeys),s.selectedRowKeys=[]}function z(e,a){t.page=e,t.limit=a,i(t)}async function A(e){if(o.defaultDelete){let a=await D(o.baseURL,[e]);if(a.code){y.error(a.msg);return}y.success(a.msg),i(t);return}S("delete",[e])}async function i(e){if(o.baseURL===""){s.spinning=!1,s.list=o.list;return}s.spinning=!0;let a=await q(o.baseURL,e);if(s.spinning=!1,a.data.list===void 0){s.list=a.data,s.count=a.data.length;return}s.list=a.data.list,s.count=a.data.count,s.spinning=!1}function N(){t.key=t.key.trim(),t.page=1,i(t)}function E(){i(t),y.success("刷新成功")}function V(e){e||(e={}),t.page=1,Object.assign(t,e),i(t)}return g({ExportList:V}),i(t),(e,a)=>{const x=u("a-input-search"),b=u("a-button"),F=u("a-popconfirm"),P=u("a-table"),T=u("a-spin"),j=u("a-pagination");return c(),h("div",H,[r("div",I,[d(x,{placeholder:o.likeTitle,value:t.key,"onUpdate:value":a[0]||(a[0]=n=>t.key=n),style:{width:"200px"},onSearch:N},null,8,["placeholder","value"]),p(e.$slots,"filters"),r("div",J,[d(b,{title:"刷新",onClick:E},{default:l(()=>[M]),_:1})])]),W,r("div",X,[p(e.$slots,"add"),p(e.$slots,"batchRemove",{},()=>[o.isDelete&&s.selectedRowKeys.length?(c(),R(b,{key:0,type:"primary",danger:"",onClick:$},{default:l(()=>[v("批量删除")]),_:1})):m("",!0)])]),r("div",Y,[d(T,{spinning:s.spinning,tip:"Loading...",delay:500},{default:l(()=>[d(P,{columns:o.columns,"data-source":s.list,"row-key":n=>n.id,pagination:!1,"row-selection":o.isSelect?{selectedRowKeys:s.selectedRowKeys,onChange:U}:void 0},{bodyCell:l(({column:n,record:_})=>[p(e.$slots,"cell",k(w({column:n,record:_})),()=>[n.key==="created_at"?(c(),h(B,{key:0},[v(O(Q(G)(_.created_at)),1)],64)):m("",!0),n.key==="action"?(c(),h(B,{key:1},[p(e.$slots,"edit",k(w({column:n,record:_})),()=>[o.isEdit?(c(),R(b,{key:0,type:"primary"},{default:l(()=>[v("编辑")]),_:1})):m("",!0)]),p(e.$slots,"delete",k(w({column:n,record:_})),()=>[o.isDelete?(c(),R(F,{key:0,title:"是否确定删除?","ok-text":"确认","cancel-text":"取消",onConfirm:ee=>A(_.id)},{default:l(()=>[d(b,{class:"gvb_table_action delete",type:"primary",danger:""},{default:l(()=>[v("删除")]),_:1})]),_:2},1032,["onConfirm"])):m("",!0)])],64)):m("",!0)])]),_:3},8,["columns","data-source","row-key","row-selection"])]),_:3},8,["spinning"])]),r("div",Z,[d(j,{"show-less-items":"",current:t.page,"onUpdate:current":a[1]||(a[1]=n=>t.page=n),onChange:z,"page-size":t.limit,"onUpdate:pageSize":a[2]||(a[2]=n=>t.limit=n),total:s.count,"show-total":n=>`  ${n} `},null,8,["current","page-size","total","show-total"])])])}}};export{ae as _,D as b};
