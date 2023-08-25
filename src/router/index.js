import { createRouter, createWebHistory } from 'vue-router'
//import views
//import latout
import FrontendLayout from '@/layouts/Frontend.vue';
import BackendendLayout from '@/layouts/Backend.vue';


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
import DashboardView from '@/views/backend/Dashboard.vue'
import ProductsView from '@/views/backend/Products.vue'

const routes = [
  {
    path: '/service',
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Service',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Register',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Port',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Home',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Contact',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Forgot',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'Login',
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
    component: FrontendLayout,
    children:[
      {
        path:'',
        name: 'About',
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
  },

  {
    path: '/backend',
    component: BackendendLayout,
    children:[
      {
        path: '',
        name: 'Dashboard',
        component:DashboardView
      }
    ],
    meta:{
      title:'Dashboard'
    }
  },

  {
    path: '/backend',
    component: BackendendLayout,
    children:[
      {
        path: 'productsView',
        name: 'ProductsView',
        component:ProductsView
      }
    ],
    meta:{
      title:'Products'
    }
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
