import{u as G}from"./user_api-C9RnzkIX.js";import{g as L,u as M,s as H,b as J}from"./user_center_api-BKYpOwjQ.js";import{l as K}from"./logout-DE3wPEOl.js";import{a as Q,c as w,r as x,d as N,f as a,w as l,e as d,s as $,G as X,g as _,h as u,o as m,k as v,i as g,l as b,F as ee,q as ae,t as k}from"./index-CQKID6YZ.js";const le="/assets/day_login-D7rMZ05R.png",te="/assets/day_blog-Y77VOWF8.png",se="/assets/day_comment-Dxo9jczr.png",ne="/assets/day_chat_group-DVuYqjSv.png",oe={class:"gvb_user_info_bg"},re=d("span",null,"绑定成功",-1),ie={class:"gvb_user_info_view"},de=d("div",{class:"user_head"}," 个人信息 ",-1),ue={class:"body user_info_view"},pe=X('<div class="user_head"> 每日奖励 </div><div class="body daily_reward"><div><img src="'+le+'" alt=""> 每日登陆 +2 </div><div><img src="'+te+'" alt=""> 发文 +3 </div><div><img src="'+se+'" alt=""> 发评论 +1 </div><div><img src="'+ne+'" alt=""> 群聊 +0.5 </div></div><div class="user_head"> 成就勋章 </div><ul class="body medal"><li><img src="https://i0.hdslb.com/bfs/face/21fdd1bcd9ad1b52d5725026d71c185a68681644.png" alt=""><div class="name">初来乍到</div></li><li><img src="https://i0.hdslb.com/bfs/face/51ca16136e570938450bca360f28761ceb609f33.png" alt=""><div class="name">有爱萌新</div></li><li><img src="https://i0.hdslb.com/bfs/face/89491e6cee3b1c88292b618a58703ab614665f66.png" alt=""><div class="name">老司机</div></li></ul><div class="user_head"> 操作 </div>',5),ce={class:"body actions"},be={__name:"user_info",setup(me){const F=Q(),I=w(null),S=w(null),n=x({addr:"",email:"",integral:0,nick_name:"",link:"",role:"",sign:"",sign_status:""}),r=x({email:"",password:"",code:""}),y=x({nick_name:"",link:"",sign:""}),Z=[{title:"绑定邮箱",content:"First-content"},{title:"发送验证码",content:"Second-content"}],i=w(0),U=w(!1),C=w(!1),p=x({old_pwd:"",pwd:"",re_pwd:""});async function j(){let s=await L();Object.assign(n,s.data),y.sign=n.sign,y.link=n.link,y.nick_name=n.nick_name}async function A(s){const e=n[s];if(y[s]===e)return;const V={};V[s]=e;let c=await M(V);if(c.code){_.error(c.msg);return}_.success(c.msg)}async function h(){let s=await H(r.email);if(s.code){_.error(s.msg);return}_.success(s.msg),i.value=1}async function q(){console.log(r);let s=await J(r);if(s.code){_.error(s.msg);return}_.success(s.msg),z(),j()}function z(){i.value=0,U.value=!1,r.email="",r.code="",r.password=""}async function O(){try{await S.value.validate()}catch{return}let s=await G(p);if(s.code){_.error(s.msg);return}_.success(s.msg),C.value=!1,setTimeout(()=>{F.push({name:"login"})},500)}let T=async(s,e)=>/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)?Promise.resolve():Promise.reject("请输入正确的邮箱地址"),W=async(s,e)=>e!==p.pwd?Promise.reject("两次输入的密码不一致"):Promise.resolve();return j(),(s,e)=>{const E=u("a-step"),V=u("a-steps"),c=u("a-input"),o=u("a-form-item"),P=u("templete"),R=u("a-form"),f=u("a-button"),D=u("a-modal"),B=u("a-input-password"),Y=u("a-textarea");return m(),N("div",oe,[a(D,{title:"绑定邮箱",open:U.value,"onUpdate:open":e[4]||(e[4]=t=>U.value=t)},{footer:l(()=>[i.value===1?(m(),v(f,{key:0,onClick:z},{default:l(()=>[g("取消")]),_:1})):b("",!0),i.value===0?(m(),v(f,{key:1,type:"primary",onClick:h},{default:l(()=>[g("下一步")]),_:1})):b("",!0),i.value===1?(m(),v(f,{key:2,type:"primary",onClick:e[3]||(e[3]=t=>i.value--)},{default:l(()=>[g("上一步")]),_:1})):b("",!0),i.value===1?(m(),v(f,{key:3,onClick:q},{default:l(()=>[g("确认")]),_:1})):b("",!0)]),default:l(()=>[d("div",null,[a(V,{current:i.value},{default:l(()=>[(m(),N(ee,null,ae(Z,t=>a(E,{key:t.title,title:t.title,description:t.description},null,8,["title","description"])),64))]),_:1},8,["current"]),a(R,{model:r,name:"basic",ref_key:"formRef",ref:I,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off"},{default:l(()=>[i.value===0?(m(),v(P,{key:0},{default:l(()=>[a(o,{label:"邮箱地址",name:"email","has-feedback":"",rules:[{required:!0,message:"请输入邮箱地址"},{validator:$(T),message:"非法邮箱",trigger:"blur"}]},{default:l(()=>[a(c,{value:r.email,"onUpdate:value":e[0]||(e[0]=t=>r.email=t),placeholder:"请输入邮箱"},null,8,["value"])]),_:1},8,["rules"])]),_:1})):b("",!0),i.value===1?(m(),v(P,{key:1},{default:l(()=>[a(o,{label:"密码"},{default:l(()=>[a(c,{value:r.password,"onUpdate:value":e[1]||(e[1]=t=>r.password=t),placeholder:"请输入密码"},null,8,["value"])]),_:1}),a(o,{label:"验证码"},{default:l(()=>[a(c,{value:r.code,"onUpdate:value":e[2]||(e[2]=t=>r.code=t),placeholder:"请输入验证码"},null,8,["value"])]),_:1})]),_:1})):b("",!0),i.value===2?(m(),v(P,{key:2},{default:l(()=>[a(o,{label:"绑定成功"},{default:l(()=>[re]),_:1})]),_:1})):b("",!0)]),_:1},8,["model"])])]),_:1},8,["open"]),a(D,{title:"修改密码",open:C.value,"onUpdate:open":e[8]||(e[8]=t=>C.value=t),onOk:O},{default:l(()=>[a(R,{model:p,name:"basic",ref_key:"pwdformRef",ref:S,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off"},{default:l(()=>[a(o,{label:"旧密码",name:"old_pwd","has-feedback":""},{default:l(()=>[a(B,{value:p.old_pwd,"onUpdate:value":e[5]||(e[5]=t=>p.old_pwd=t),placeholder:"请输入旧密码"},null,8,["value"])]),_:1}),a(o,{label:"新密码",name:"new_pwd","has-feedback":""},{default:l(()=>[a(B,{value:p.pwd,"onUpdate:value":e[6]||(e[6]=t=>p.pwd=t),placeholder:"请输入新密码"},null,8,["value"])]),_:1}),a(o,{label:"确认密码",name:"re_pwd","has-feedback":"",rules:[{validator:$(W),message:"两次密码不一致",trigger:"blur"}]},{default:l(()=>[a(B,{value:p.re_pwd,"onUpdate:value":e[7]||(e[7]=t=>p.re_pwd=t),placeholder:"确认密码"},null,8,["value"])]),_:1},8,["rules"])]),_:1},8,["model"])]),_:1},8,["open"]),d("div",ie,[de,d("div",ue,[a(R,{"label-col":{span:2},"wrapper-col":{span:22}},{default:l(()=>[a(o,{label:"昵称"},{default:l(()=>[a(c,{onBlur:e[9]||(e[9]=t=>A("nick_name")),placeholder:"昵称",value:n.nick_name,"onUpdate:value":e[10]||(e[10]=t=>n.nick_name=t),class:"user_ipt"},null,8,["value"])]),_:1}),a(o,{label:"我的签名"},{default:l(()=>[a(Y,{onBlur:e[11]||(e[11]=t=>A("sign")),placeholder:"我的签名",value:n.sign,"onUpdate:value":e[12]||(e[12]=t=>n.sign=t),class:"user_ipt","auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1}),a(o,{label:"我的博客"},{default:l(()=>[a(c,{onBlur:e[13]||(e[13]=t=>A("link")),placeholder:"我的博客",value:n.link,"onUpdate:value":e[14]||(e[14]=t=>n.link=t),class:"user_ipt"},null,8,["value"])]),_:1}),a(o,{label:"邮箱"},{default:l(()=>[d("span",null,k(n.email),1)]),_:1}),a(o,{label:"现地址"},{default:l(()=>[d("span",null,k(n.addr),1)]),_:1}),a(o,{label:"当前角色"},{default:l(()=>[d("span",null,k(n.role),1)]),_:1}),a(o,{label:"sign_status"},{default:l(()=>[d("span",null,k(n.sign_status),1)]),_:1}),a(o,{label:"我的积分"},{default:l(()=>[d("span",null,k(n.integral),1)]),_:1})]),_:1})]),pe,d("div",ce,[a(f,{type:"primary",onClick:e[15]||(e[15]=t=>U.value=!0)},{default:l(()=>[g("绑定邮箱")]),_:1}),a(f,{type:"primary",onClick:e[16]||(e[16]=t=>C.value=!0)},{default:l(()=>[g("修改密码")]),_:1}),a(f,{type:"primary",danger:"",onClick:$(K)},{default:l(()=>[g("注销退出")]),_:1},8,["onClick"])])])])}}};export{be as default};