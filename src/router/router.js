import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage.vue'
import DeveloperCenter from '../components/DeveloperCenter.vue'

import Admin from '../components/admin/Admin'
import AdminOverview from '../components/admin/AdminOverview'
import AdminBookEntry from '../components/admin/AdminBookEntry'
import AdminBorrowConfirmation from '../components/admin/AdminBorrowConfirmation'
import AdminReturnConfirmation from '../components/admin/AdminReturnConfirmation'
import AdminBookList from '../components/admin/AdminBookList'
import AdminBookUpdate from '../components/admin/AdminBookUpdate'
import AdminStudentList from '../components/admin/AdminStudentList'
import AdminAdminConfirmation from '../components/admin/AdminAdminConfirmation'

import StudentAccount from '../components/student/account/StudentAccount'
import StudentLogin from '../components/student/account/StudentLogin'
import StudentRegister from '../components/student/account/StudentRegister'
import StudentForgotPassword from '../components/student/account/StudentForgotPassword'
import StudentResetPassword from '../components/student/account/StudentResetPassword'

import AdminAccount from '../components/admin/account/AdminAccount'
import AdminLogin from '../components/admin/account/AdminLogin'
import AdminRegister from '../components/admin/account/AdminRegister'
import AdminForgotPassword from '../components/admin/account/AdminForgotPassword'
import AdminResetPassword from '../components/admin/account/AdminResetPassword'

import Student from '../components/student/Student'
import StudentHome from '../components/student/StudentHome'
import StudentReadAgain from '../components/student/StudentReadAgain'
import StudentCategories from '../components/student/StudentCategories'
import StudentCategory from '../components/student/StudentCategory'
import StudentMyList from '../components/student/StudentMyList'
import StudentProfile from '../components/student/StudentProfile'
import StudentPenalty from '../components/student/StudentPenalty'
import StudentBook from '../components/student/StudentBook'
import StudentSearch from '../components/student/StudentSearch'

import LegalNotices from '../components/helpCenter/LegalNotices'
import Privacy from '../components/helpCenter/Privacy'
import TermsOfService from '../components/helpCenter/TermsOfService'
import HelpCenter from '../components/helpCenter/HelpCenter'
import ContactUs from '../components/helpCenter/ContactUs.vue'
import FAQs from '../components/helpCenter/FAQs.vue'

import axios from 'axios'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/admin/account',
            name: 'adminAccount',
            component: AdminAccount,
            children: [
                {
                    path: 'login',
                    name: 'adminLogin',
                    component: AdminLogin
                },
                {
                    path: 'register',
                    name: 'adminRegister',
                    component: AdminRegister
                },
                {
                    path: 'forgot-password/:status?',
                    name: 'adminForgotPassword',
                    component: AdminForgotPassword
                },
                {
                    path: 'reset-password/token/:status',
                    name: 'adminResetPassword',
                    component: AdminResetPassword
                },
            ]
        },
        {
            path: '/developer-center',
            name: 'developerCenter',
            component: DeveloperCenter
        },
        {
            path: '/admin/',
            name: 'admin',
            component: Admin,
            meta: {
                adminAuth: true
            },
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
                    path: 'book-list',
                    name: 'adminBookList',
                    component: AdminBookList,
                },
                {
                    path: 'book-update/:isbn',
                    name: 'adminBookUpdate',
                    component: AdminBookUpdate,
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
            ],
        },
        {
            path: '/student/account',
            name: 'studentAccount',
            component: StudentAccount,
            children: [
                {
                    path: 'login',
                    name: 'studentLogin',
                    component: StudentLogin
                },
                {
                    path: 'register',
                    name: 'studentRegister',
                    component: StudentRegister
                },
                {
                    path: 'forgot-password/:status?',
                    name: 'studentForgotPassword',
                    component: StudentForgotPassword
                },
                {
                    path: 'reset-password/token/:status',
                    name: 'studentResetPassword',
                    component: StudentResetPassword
                },
            ]
        },
        {
            path: '/student',
            name: 'student',
            component: Student,
            meta: {
                studentAuth: true
            },
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
                    path: 'category/:name',
                    name: 'studentCategory',
                    component: StudentCategory
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
                {
                    path: 'penalty',
                    name: 'studentPenalty',
                    component: StudentPenalty,
                },
                {
                    path: 'book/:isbn',
                    name: 'studentBook',
                    component: StudentBook
                },
                {
                    path: 'search',
                    name: 'studentSearch',
                    component: StudentSearch
                }
            ]
        },
        {
            path: '/help-center',
            name: 'helpCenter',
            component: HelpCenter,
            children: [
                {
                    path: 'legal-notices',
                    name: 'legalNotices',
                    component: LegalNotices
                },
                {
                    path: 'privacy',
                    name: 'privacy',
                    component: Privacy
                },
                {
                    path: 'TermsOfService',
                    name: 'TermsOfService',
                    component: TermsOfService
                },
                {
                    path: 'contact-us',
                    name: 'contactUs',
                    component: ContactUs
                },
                {
                    path: 'FAQs',
                    name: 'FAQs',
                    component: FAQs
                },
            ]
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const token = JSON.parse(localStorage.getItem("token"))

    if (to.matched.some(record => record.meta.studentAuth)) {
        if (token) {
            console.log('test')
            try {
                const authorized = await axios.post(
                    'student/authorize',
                    {
                        token: token
                    },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        }
                    }
                )

                if (authorized.data) {
                    next()
                }
            } catch (err) {
                console.log(err)
                next({ name: 'adminOverview' })
            }
        } else {
            next({ name: 'studentLogin' })
        }
    } else if (to.matched.some(record => record.meta.adminAuth)) {
        if (token) {
            try {
                const authorized = await axios.post('admin/authorize', { token: token }, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    }
                })

                if (authorized.data) {
                    next()
                }
            } catch (err) {
                console.log(err)
                next({ name: 'studentHome' })
            }
        } else {
            next({ name: 'adminLogin' })
        }
    } else {
        if (token) {
            try {
                const isAdmin = await axios.post('admin/authorize', { token: token }, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })

                if (isAdmin.data) {
                    next({ name: 'adminOverview' })
                }
            } catch (err) {
                console.log(err)
                next({ name: 'studentHome' })
            }
        }

        next()
    }
})

export default router;