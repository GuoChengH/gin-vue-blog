import{a as R,b as h}from"./user_api-DLmzQZL-.js";import{_ as O,b as T}from"./gvb_table-G_plVNMz.js";import{c as f,r as g,d as I,f as l,w as o,g as m,h as d,o as E,s as $,i as q,l as j}from"./index-Csyz-WVi.js";import"./data-DE6nU9bg.js";const B=["src"],H={__name:"user_list",setup(F){const p=f(null),c=f(void 0),u=f(null),_=[{label:"管理员",value:1},{label:"用户",value:2},{label:"游客",value:3}],n=g({modalVidible:!1,modalUpdateVidible:!1,columns:[{title:"id",key:"id",dataIndex:"id"},{title:"昵称",key:"nick_name",dataIndex:"nick_name"},{title:"头像",key:"avatar",dataIndex:"avatar"},{title:"邮箱",key:"email",dataIndex:"email"},{title:"地址",key:"addr",dataIndex:"addr"},{title:"ip",key:"ip",dataIndex:"ip"},{title:"角色",key:"role",dataIndex:"role"},{title:"注册来源",key:"sign_status",dataIndex:"sign_status"},{title:"创建时间",key:"created_at",dataIndex:"created_at"},{title:"操作",key:"action",dataIndex:"action"}]}),r=g({nick_name:"",role:void 0,user_id:0}),s=g({nick_name:"",user_name:"",password:"",re_password:"",role:1});function L(){console.log(c.value),u.value.ExportList({role:c.value})}async function D(t){let e=await T("/api/users",t);if(e.code){m.error(e.msg);return}m.success(e.msg),u.value.ExportList()}function y(t){n.modalUpdateVidible=!0,r.user_id=t.id,r.nick_name=t.nick_name,r.role=t.role,v()}async function N(){try{await p.value.validate(),console.log(s);let t=await R(s);if(t.code){m.error(t.msg);return}m.success(t.msg),n.modalVidible=!1,p.value.resetFields(),u.value.ExportList(),v()}catch(t){console.error("Validation or API call failed:",t)}}let P=async(t,e)=>e===""?Promise.reject("密码不能为空"):e!==s.password?Promise.reject("两次密码输入不一致"):Promise.resolve();async function A(){console.log(r);let t=await h(r);if(t.code){m.error(t.msg);return}m.success(t.msg),n.modalUpdateVidible=!1,u.value.ExportList(),v()}async function v(){f(null).value.getData(),u.value.ExportList()}return(t,e)=>{const b=d("a-input"),i=d("a-form-item"),w=d("a-input-password"),k=d("a-select"),x=d("a-form"),U=d("a-modal"),V=d("a-button");return E(),I("div",null,[l(U,{visible:n.modalVidible,"onUpdate:visible":e[5]||(e[5]=a=>n.modalVidible=a),title:"添加用户",onOk:N},{default:o(()=>[l(x,{model:s,name:"basic","label-col":{span:4},"wrapper-col":{span:16},ref_key:"formRef",ref:p,autocomplete:"off"},{default:o(()=>[l(i,{label:"昵称","has-feedback":"",name:"nick_name",rules:[{required:!0,message:"请输入昵称",trigger:"blur"}]},{default:o(()=>[l(b,{value:s.nick_name,"onUpdate:value":e[0]||(e[0]=a=>s.nick_name=a),placeholder:"昵称"},null,8,["value"])]),_:1}),l(i,{label:"用户名","has-feedback":"",name:"user_name",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{default:o(()=>[l(b,{value:s.user_name,"onUpdate:value":e[1]||(e[1]=a=>s.user_name=a),placeholder:"用户名"},null,8,["value"])]),_:1}),l(i,{label:"密码","has-feedback":"",name:"password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{default:o(()=>[l(w,{value:s.password,"onUpdate:value":e[2]||(e[2]=a=>s.password=a),placeholder:"密码"},null,8,["value"])]),_:1}),l(i,{label:"确认密码","has-feedback":"",name:"re_password",rules:[{validator:$(P),trigger:"blur"}]},{default:o(()=>[l(w,{value:s.re_password,"onUpdate:value":e[3]||(e[3]=a=>s.re_password=a),placeholder:"确认密码"},null,8,["value"])]),_:1},8,["rules"]),l(i,{label:"权限","has-feedback":"",name:"role",rules:[{required:!0,message:"请选择权限"}]},{default:o(()=>[l(k,{value:s.role,"onUpdate:value":e[4]||(e[4]=a=>s.role=a),style:{width:"200px"},options:_,placeholder:"请选择权限"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),l(U,{visible:n.modalUpdateVidible,"onUpdate:visible":e[8]||(e[8]=a=>n.modalUpdateVidible=a),title:"编辑用户",onOk:A},{default:o(()=>[l(x,{model:r,name:"basic","label-col":{span:4},"wrapper-col":{span:16},ref_key:"formRef",ref:p,autocomplete:"off"},{default:o(()=>[l(i,{label:"昵称","has-feedback":"",name:"nick_name",rules:[{required:!0,message:"请输入昵称",trigger:"blur"}]},{default:o(()=>[l(b,{value:r.nick_name,"onUpdate:value":e[6]||(e[6]=a=>r.nick_name=a),placeholder:"昵称"},null,8,["value"])]),_:1}),l(i,{label:"权限","has-feedback":"",name:"role",rules:[{required:!0,message:"请选择权限"}]},{default:o(()=>[l(k,{value:r.role,"onUpdate:value":e[7]||(e[7]=a=>r.role=a),style:{width:"200px"},options:_,placeholder:"请选择权限"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),l(O,{onDelete:D,onEdit:y,columns:n.columns,baseURL:"/api/users",ref_key:"gvbTable",ref:u,"page-size":7,"like-title":"搜索用户昵称"},{add:o(()=>[l(V,{type:"primary",onClick:e[9]||(e[9]=a=>n.modalVidible=!0)},{default:o(()=>[q("添加")]),_:1})]),edit:o(({record:a})=>[l(V,{class:"gvb_table_action update",type:"primary",onClick:C=>y(a)},{default:o(()=>[q("编辑")]),_:2},1032,["onClick"])]),cell:o(({column:a,record:C})=>[a.key==="avatar"?(E(),I("img",{key:0,class:"gvb_table_avatar",src:C.avatar,alt:""},null,8,B)):j("",!0)]),filters:o(()=>[l(k,{class:"gvb_select",allowClear:"",value:c.value,"onUpdate:value":e[10]||(e[10]=a=>c.value=a),onChange:L,style:{width:"200px"},options:_,placeholder:"选择权限"},null,8,["value"])]),_:1},8,["columns"])])}}};export{H as default};
