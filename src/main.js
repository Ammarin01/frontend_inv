import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//impost tailwind css มาใช้งาน
import '@/styles/tailwind.css' 

// impost VueSweetakert2  มาใช้
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
//สร้างตัวแปร constant ของ vue
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')


