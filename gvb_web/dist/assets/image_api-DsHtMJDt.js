import{S as i}from"./index-Csyz-WVi.js";function p(a){return i.put("/api/images",a)}function o(){return i.get("/api/image_names")}function s(a){return new Promise((n,m)=>{const t=new FormData;t.append("images",a),i.post("/api/images",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>n(e)).catch(e=>m(e))})}export{p as a,o as i,s as u};
