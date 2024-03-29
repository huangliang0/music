//引用关系
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import ListCate from "@/pages/listcate"
import Search from "@/pages/search"
import Ucenter from "@/pages/ucenter"
import HotList from "@/pages/musiclist/hot_list"
import KingList from "@/pages/musiclist/king_list"
import NewsList from "@/pages/musiclist/news_list"
import MoreList from "@/pages/morelist"
import MusicPlay from "@/pages/musicplay"
import ArtistsDetails from "@/pages/artistsDetails/artistsDetails"
import LicateDetails from "@/pages/licateDetails/licateDetails"

//引用路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/musicplay",
      name:"MusicPlay",
      component:MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      //重定向至主界面
      redirect:"/home",
      component: Index,
      children:[
        {
          path:"home",
          component:Home,
          redirect:"/home/hot",
          children:[
            {
              path:"hot",
              component:HotList
            },
            {
              path:"king",
              component:KingList
            },
            {
              path:"news",
              component:NewsList
            }
          ]
        },
        {
          path:"artists",
          component:Artists
        },
        {
          path:"listcate",
          component:ListCate
        },
        {
          path:"search",
          component:Search
        },
        {
          path:"ucenter",
          component:Ucenter
        },

        {
          path:"more",
          name:"MoreList",
          component:MoreList
        },
        {
          path:"artistsdetails",
          name:"ArtistsDetails",
          component:ArtistsDetails
        },
        {
          path:"licatedetails",
          name:"LicateDetails",
          component:LicateDetails
        }
      ]
    }
  ]
})
