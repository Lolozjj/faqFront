import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Admin from '@/pages/Admin'
import Login from '@/pages/Login'
import Console from '@/pages/Console'
import AdminLogin from '@/pages/AdminLogin'
import EmailRegister from '@/pages/EmailRegister'

import adminPanel from '@/components/admin/adminPanel'
import adminAccount from '@/components/admin/adminAccount'
import adminAddAccount from '@/components/admin/adminAddAccount'

import consolePanel from "@/components/console/consolePanel"
import myorg from "@/components/console/myorg"
import createOrg from "@/components/console/createOrg"
import joinOrg from "@/components/console/joinOrg"
import joinOrg2 from "@/components/console/joinOrg2"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    }, {
      path: '/EmailRegister',
      name: 'EmailRegister',
      component: EmailRegister
    }, {
      path: '/Console',
      name: 'Console',
      component: Console,
      children: [{
        path: '/consolePanel',
        name: 'consolePanel',
        component: consolePanel
      },{
        path: '/myorg',
        name: 'myorg',
        component: myorg
      },{
        path: '/createOrg',
        name: 'createOrg',
        component: createOrg
      },{
        path: '/joinOrg',
        name: 'joinOrg',
        component: joinOrg
      },{
        path: '/joinOrg2',
        name: 'joinOrg2',
        component: joinOrg2
      }]
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children: [{
          path: '/adminPanel',
          name: 'adminPanel',
          component: adminPanel
        },
        {
          path: '/adminAccount',
          name: 'adminAccount',
          component: adminAccount
        },
        {
          path: '/adminAddAccount',
          name: 'adminAddAccount',
          component: adminAddAccount
        }
      ]
    }
  ]
})
