import { createRouter, createWebHistory } from 'vue-router'
//import views
//import latout
import FrontendLayout from '@/layouts/Frontend.vue';


//import frontend

import HomeView from '@/views/frontend/HomeView.vue'
import AboutView from '@/views/frontend/AboutView.vue'
import ContactView from '@/views/frontend/ContactView.vue'
import ForgotPasswordView from '@/views/frontend/ForgotPasswordView.vue'
import LoginView from '@/views/frontend/LoginView.vue'
import PortfolioView from '@/views/frontend/PortfolioView.vue'
import RegisterView from '@/views/frontend/RegisterView.vue'
import ServiceView from '@/views/frontend/ServiceView.vue'
import NotfoundView from '@/views/frontend/NotfoundView.vue'

//impost Backend


const routes = [
  {
    path: '/service',
    name: 'service',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:ServiceView
      }
    ],
    meta:{
      title:'บริการ',
      description:'บริการอื่นๆ',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:RegisterView
      }
    ],
    meta:{
      title:'สมัครสมาชิก',
      description:'สมัครสมาชิก',
    }
  },
  {
    path: '/port',
    name: 'port',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:PortfolioView
      }
    ],
    meta:{
      title:'ผลงาน',
      description:'ผลงาน',
    }
  },
  {
    path: '/',
    name: 'home',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:HomeView
      }
    ],
    meta:{
      title:'หน้าหลัก',
      description:'หน้าระบบคงคลังสินค้า',
    } 
  },
  {
    path: '/contact',
    name: 'contact',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:ContactView
      }
    ],
    meta:{
      title:'ติดต่อฉัน',
      description:'ติดต่อฉัน',
    } 
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:ForgotPasswordView
      }
    ],
    meta:{
        title:'ลืมรหัสผ่าน',
        description:'ลืมรหัสผ่าน',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:LoginView
      }
    ],
    meta:{
        title:'เข้าสู่ระบบ',
        description:'เข้าสู่ระบบ',
    }
  },
  {
    path: '/about',
    name: 'about',
    component: FrontendLayout,
    children:[
      {
        path:'',
        component:AboutView
      }
    ],
    meta:{
        title:'เกี่ยวกับเรา',
        description:'เกี่ยวกับเรา',
    }
  },
  //Error404
  {
    path:"/:catchAll(.*)",
    component: NotfoundView,
    meta:{
      title:'404 ไม่พบหน้านี้',
      description:'Error 404',
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
