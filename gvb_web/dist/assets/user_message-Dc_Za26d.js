import{a as I,c as S}from"./user_center_api-D559RJNm.js";import{_ as B}from"./gvb_table-DwXhQnu9.js";import{c as v,r as w,b as U,d as n,f as d,w as c,h as y,o as i,e as t,F as k,q as z,n as A,t as o,i as C,l as V,g as M}from"./index-Sy54AUqK.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./data-DE6nU9bg.js";const F={class:"chat-body"},O={key:0,class:"message-wrap message-right"},R={class:"message-content"},$={class:"message-text"},q={class:"message-time"},G={class:"avatar"},H=["src"],J={key:1,class:"message-wrap message-left"},K={class:"avatar"},P=["src"],Q={class:"message-content"},W={class:"message-text"},X={class:"message-time"},Y={class:"message-input"},Z=["src"],ee={style:{"margin-left":"15px"}},se=["src"],te={style:{"margin-left":"15px"}},ae={__name:"user_message",setup(ne){const x=v(null),r=w({send_user_id:0,rev_user_id:0,content:""}),u=v(""),m=U(),_=w({list:[{id:2,created_at:"2024-08-16T10:07:26.533+08:00",send_user_id:1,send_user_nick_name:"xiaohei",send_user_avater:"/uploads/avatar/default.jpg",rev_user_id:2,rev_user_nick_name:"xiaobai",rev_user_avatar:"/uploads/avatar/default.jpg",is_read:!1,content:"你好1",is_me:!1}],columns:[{title:"发送人",dataIndex:"send_user",key:"send_user"},{title:"接收人",dataIndex:"rev_user",key:"rev_user"},{title:"消息内容",dataIndex:"content",key:"content"},{title:"消息时间",dataIndex:"created_at",key:"created_at"},{title:"操作",dataIndex:"action",key:"action"}]}),p=v(!1),f=v("");async function T(s){p.value=!0;let a=null;s.send_user_id===m.userInfo.user_id&&(f.value="与"+s.rev_user_nick_name+"聊天",a=s.rev_user_id),s.rev_user_id===m.userInfo.user_id&&(f.value="与"+s.send_user_nick_name+"聊天",a=s.send_user_id),r.send_user_id=m.userInfo.user_id,r.rev_user_id=a,r.content=u.value;let h=await I(a);Object.assign(_,h),console.log(_)}async function D(s){let a=await I(s);Object.assign(_,a)}function L(s){r.content=s.target.value}function g(s){return m.userInfo.user_id===s.send_user_id}async function j(){let s=await S(r);if(s.code){M.error(s.msg);return}M.success(s.msg),u.value="",D(r.send_user_id),x.value.ExportList()}return(s,a)=>{const h=y("a-input"),b=y("a-button"),N=y("a-modal");return i(),n("div",null,[d(N,{title:f.value,open:p.value,"onUpdate:open":a[1]||(a[1]=e=>p.value=e),class:"chat-modal",width:"600px"},{default:c(()=>[t("div",F,[(i(!0),n(k,null,z(_.data,e=>(i(),n("div",{key:e.id,class:A({"message-right":g(e),"message-left":!g(e)})},[g(e)?(i(),n("div",O,[t("div",R,[t("div",$,o(e.content),1),t("div",q,o(new Date(e.created_at).toLocaleTimeString()),1)]),t("div",G,[t("img",{src:e.send_user_avatar,alt:"user avatar"},null,8,H)])])):(i(),n("div",J,[t("div",K,[t("img",{src:e.rev_user_avatar,alt:"user avatar"},null,8,P)]),t("div",Q,[t("div",W,o(e.content),1),t("div",X,o(new Date(e.created_at).toLocaleTimeString()),1)])]))],2))),128))]),t("div",Y,[d(h,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),onInput:L,placeholder:"输入消息..."},null,8,["modelValue"]),d(b,{type:"primary",onClick:j},{default:c(()=>[C("发送")]),_:1})])]),_:1},8,["title","open"]),d(B,{columns:_.columns,baseURL:"/api/messages_all",ref_key:"gvbTable",ref:x,"page-size":7,"like-title":"搜索消息列表","is-add":!1,"is-delete":!1,"is-select":!1,"default-delete":""},{cell:c(({column:e,record:l})=>[e.key==="send_user"?(i(),n(k,{key:0},[t("img",{src:l.send_user_avatar,height:"40",style:{"border-radius":"50%"},alt:""},null,8,Z),t("span",ee,o(l.send_user_nick_name),1)],64)):V("",!0),e.key==="rev_user"?(i(),n(k,{key:1},[t("img",{src:l.rev_user_avatar,height:"40",style:{"border-radius":"50%"},alt:""},null,8,se),t("span",te,o(l.rev_user_nick_name),1)],64)):V("",!0)]),edit:c(({record:e})=>[d(b,{type:"primary",onClick:l=>T(e)},{default:c(()=>[C("回复")]),_:2},1032,["onClick"])]),_:1},8,["columns"])])}}},de=E(ae,[["__scopeId","data-v-6b9f1403"]]);export{de as default};
