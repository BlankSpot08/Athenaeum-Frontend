import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage.vue'
import AdminLogin from '../components/admin/AdminLogin'

Vue.use(Router)
export default new Router ({
    routes: [ 
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/Admin/Login',
            name: 'AdminLogin',
            component: AdminLogin
        }
    ]
})