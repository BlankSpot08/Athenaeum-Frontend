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

Vue.use(Router)
export default new Router ({
    routes: [
        {
            path: '',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/admin/login',
            name: 'adminLogin',
            component: AdminLogin
        },
        {
            path: '/admin/register',
            name: 'adminRegister',
            component: AdminRegister
        },
        {
            path: '/admin/',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: 'overview',
                    name: 'adminOverview',
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
                    path: 'book-update',
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
        },
        {
            path: '/student/login',
            name: 'studentLogin',
            component: StudentLogin
        },
        {
            path: '/student/register',
            name: 'studentRegister',
            component: StudentRegister
        },
        {
            path: '/student',
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
                    name: 'studentReadAgain',
                    component: StudentReadAgain,
                },
                {
                    path: 'categories',
                    name: 'studentCategories',
                    component: StudentCategories,
                },
                {
                    path: 'my-list',
                    name: 'studentMyList',
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
})