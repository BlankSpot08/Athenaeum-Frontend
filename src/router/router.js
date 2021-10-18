import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage.vue'

import AdminLogin from '../components/admin/AdminLogin'
import AdminRegister from '../components/admin/AdminRegister'
import Admin from '../components/admin/Admin'
import AdminOverview from '../components/admin/AdminOverview'
import AdminBookEntry from '../components/admin/AdminBookEntry'
import AdminBorrowConfirmation from '../components/admin/AdminBorrowConfirmation'
import AdminReturnConfirmation from '../components/admin/AdminReturnConfirmation'
import AdminBookUpdate from '../components/admin/AdminBookUpdate'
import AdminBookSearch from '../components/admin/AdminBookSearch'
import AdminStudentList from '../components/admin/AdminStudentList'
import AdminAdminConfirmation from '../components/admin/AdminAdminConfirmation'
import AdminProfile from '../components/admin/AdminProfile'

import StudentLogin from '../components/student/StudentLogin'
import StudentRegister from '../components/student/StudentRegister'
import Student from '../components/student/Student'
import StudentHome from '../components/student/StudentHome'
import StudentReadAgain from '../components/student/StudentReadAgain'
import StudentCategories from '../components/student/StudentCategories'
import StudentMyList from '../components/student/StudentMyList'
import StudentProfile from '../components/student/StudentProfile'


const baseRoutes = [
    {
        basePath: '/',
        routes: [
            {
                path: '',
                name: 'homepage',
                component: Homepage
            }
        ]
    },
    {
        basePath: '/admin',
        routes: [
            {
                path: '/login',
                name: 'adminLogin',
                component: AdminLogin
            },
            {
                path: '/register',
                name: 'adminRegister',
                component: AdminRegister
            },
            {
                path: '/',
                name: 'admin',
                component: Admin,
                children: [
                    {
                        path: 'overview',
                        name: 'Adminoverview',
                        component: AdminOverview,
                    },
                    {
                        path: 'book-entry',
                        name: 'adminBookEntry',
                        component: AdminBookEntry,
                    },
                    {
                        path: 'borrow-confirmation',
                        name: 'adminBorrowConfirmation',
                        component: AdminBorrowConfirmation,
                    },
                    {
                        path: 'return-confirmation',
                        name: 'adminReturnConfirmation',
                        component: AdminReturnConfirmation,
                    },
                    {
                        path: 'book-entry',
                        name: 'adminBookUpdate',
                        component: AdminBookUpdate,
                    },
                    {
                        path: 'book-search',
                        name: 'adminBookSearch',
                        component: AdminBookSearch,
                    },
                    {
                        path: 'student-list',
                        name: 'adminStudentList',
                        component: AdminStudentList,
                    },
                    {
                        path: 'admin-confirmation',
                        name: 'adminAdminConfirmation',
                        component: AdminAdminConfirmation,
                    },
                    {
                        path: 'profile',
                        name: 'adminProfile',
                        component: AdminProfile,
                    },
                ]
            }
        ]
    },
    {
        basePath: '/student',
        routes: [
            {
                path: '/login',
                name: 'login',
                component: StudentLogin
            },
            {
                path: '/register',
                name: 'register',
                component: StudentRegister
            },
            {
                path: '/',
                name: 'student',
                component: Student,
                children: [
                    {
                        path: 'home',
                        name: 'studentHome',
                        component: StudentHome,
                    },
                    {
                        path: 'read-again',
                        name: 'readAgain',
                        component: StudentReadAgain,
                    },
                    {
                        path: 'categories',
                        name: 'studentCategories',
                        component: StudentCategories,
                    },
                    {
                        path: 'my-list',
                        name: 'myList',
                        component: StudentMyList,
                    },
                    {
                        path: 'profile',
                        name: 'studentProfile',
                        component: StudentProfile,
                    },
                ]
            }
        ]
    }
]

let routes = [];
baseRoutes.forEach(baseRoute => {
    let route = {};
    baseRoute.routes.forEach(innerRoute => {
        route = {
            path: `${baseRoute.basePath}${innerRoute.path}`,
            name: innerRoute.name,
            component: innerRoute.component
        };

        routes.push(route);
    })
});

Vue.use(Router)
export default new Router ({
    routes: routes
})