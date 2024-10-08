import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'
import { getMenuNameListApi } from '@/api/menu_api'
import { getSiteInfoApi } from '@/api/system_api'

const data =   {
  token: '', 
  username: '', 
  nickname: '', 
  role: 0, 
  user_id: 0, 
  avatar: '',
  exp: 1721443277.336446
}

export const useStore = defineStore('gvb', {
  state:()=>{
    return {
      theme: true,
      userInfo: {
        token: '', 
        username: '', 
        nickname: 'xiaohei', 
        role: 0, 
        user_id: 0, 
        avatar: '',
        exp: 1721443277.336446
      },
      siteInfo:{
        create_at: "",
        bei_an: "",
        title: "",
        qq_image: "",
        version: "",
        email: "",
        wechat_image: "",
        name: "",
        job: "",
        addr: "",
        slogan: "",
        slogan_en: "",
        web: "",
        bilibili_url: "",
        gitee_url: "",
        github_url: ""
      },
      tabList:[
        {
          title:"首页",
          name:"home"
        }
      ],
      navList:[],
      tag:"",
    }
  },
  actions:{
    // 切换主题
    setTheme(){
      this.theme = !this.theme
    },
    // 加载主题
    loadTheme(){

    },
    addTab(tab){
      if(this.tabList.some(item=>item.name === tab.name)){
        return
      }
      this.tabList.push({
        name: tab.name,
        title: tab.title
      })
      this.saveTabs()
    },
    saveTabs(){
      localStorage.setItem('tabs', JSON.stringify(this.tabList))
    },
    loadTabs(){
      let tabs = localStorage.getItem('tabs')
      if (tabs === null){
        this.tabList = [{name: 'home', title: '首页'}]
        return
      }
      this.tabList = JSON.parse(tabs)
    },
    removeTab(tab){
      let index = this.tabList.findIndex(item=>item.name === tab.name)
      this.tabList.splice(index, 1)
      return index
    },
    removeTabAll(){
      this.tabList = [{name: 'home', title: '首页'}]
    },
    clear(){
      localStorage.clear()
      this.userInfo = data
      this.tabList = []
      
    },
    // 修改userInfo
    setUserInfo(info){
      this.$patch({
        userInfo: info
      })
      // 持久化
      localStorage.setItem('userInfo', JSON.stringify(info))

    },
    loadUserInfo(){
      let info = localStorage.getItem('userInfo')
      if (info === null){
        return
      }
      let userinfo =  JSON.parse(info)
      // 判断时间是否失效
      let exp = userinfo.exp
      let now = new Date().getTime()
      if (exp*1000 < now){
        // 失效
        message.warn("当前登录已失效")
        return
      }
      this.setUserInfo(userinfo)
    },
    // 加载顶部导航栏
    async loadNavList(){
      let value = sessionStorage.getItem("navList")
      if (value !== null){
        this.navList = JSON.parse(value)
        return 
      }
      let res = await getMenuNameListApi()
      this.navList = res.data
      sessionStorage.setItem("navList", JSON.stringify(res.data))
    },
    setSizeInfo(){

    },
    async loadSiteInfo(){
      let info = sessionStorage.getItem('sizeInfo')
      if (info === null){
        let res = await getSiteInfoApi()
        console.log(res.data)
        sessionStorage.setItem('sizeInfo', JSON.stringify(res.data))
        info = JSON.stringify(res.data); 
      }
  
      const siteInfo = JSON.parse(info)
      this.$patch({
        siteInfo: siteInfo
      })
    },
    setTag(tagName){
      if (tagName === this.tag){
        // 取消
        this.tag = ""
        return
      }
      this.tag = tagName
    }
  }
})
