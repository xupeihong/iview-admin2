import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里(已登录就显示的页面)
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    redirect:'/home',
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/task/task.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/task',
        icon: 'ios-paper',
        title: '我的任务',
        name: 'task',
        access: [0,1],
        component: Main,
        children: [
            { path: 'index', title: '我的任务', name: 'task_index', component: resolve => { require(['@/views/task/task.vue'], resolve); } }
        ]
    },
    {
        path: '/group',
        icon: 'ios-folder',
        name: 'group',
        access: [0,1],
        title: '客户管理',
        component: Main,
        children: [
            {
                path: 'channel',
                icon: 'ios-paper-outline',
                name: 'channel',
                title: '渠道管理',
                component: resolve => { require(['@/views/group/channel/channel.vue'], resolve); }
            },
            {
                path: 'custome',
                icon: 'ios-list-outline',
                name: 'cmanage',
                title: '客户管理',
                component: resolve => { require(['@/views/group/custome/cmanage.vue'], resolve); }
            },
            {
                path: 'creditcus',
                icon: 'ios-list-outline',
                name: 'creditcus',
                title: '授信客户',
                component: resolve => { require(['@/views/group/creditcus/CreditCus.vue'], resolve); }
            }
        ]
    },
    {
        path:'/business',
        icon:'ios-paper',
        title:'业务管理',
        name:'business',
        access: [0,1],
        component:Main,
        children:[
             {
                path: 'loanmanage',
                icon: 'ios-paper-outline',
                name: 'loanmanage',
                title: '借款申请管理',
                component: resolve => { require(['@/views/business/loanmanage/loanmanage.vue'], resolve); }
            },
            {
                path: 'daihoumanage',
                icon: 'ios-paper-outline',
                name: 'daihoumanage',
                title: '贷后管理',
                component: resolve => { require(['@/views/business/daihoumanage/daihoumanage.vue'], resolve); }
            },
            {
                path: 'payMentManage',
                icon: 'ios-paper-outline',
                name: 'payMentManage',
                title: '还款管理',
                component: resolve => { require(['@/views/business/payMentManage/payMentManage.vue'], resolve); }
            } 
        ]
    },
    {
        path:'/StaticAnaly',
        icon:'ios-paper',
        title:'统计分析',
        access:0,
        name:'StaticAnaly',
        component:Main,
        children:[
             {
                path: 'cusTotal',
                icon: 'ios-paper-outline',
                name: 'cusTotal',
                title: '客户台账总账',
                access: 0,
                component: resolve => { require(['@/views/StaticAnaly/cusTotal/cusTotal.vue'], resolve); }
            },
            {
                path: 'cusDetail',
                icon: 'ios-paper-outline',
                name: 'cusDetail',
                title: '客户台账明细',
                access: 0,
                component: resolve => { require(['@/views/StaticAnaly/cusDetail/cusDetail.vue'], resolve); }
            }
        ]
    },

    {
        path: '/page',
        icon: 'ios-paper',
        title: '合同管理',
        access: [0,1],
        name: 'page',
        component: Main,
        children: [
            { path: 'index', title: '合同管理', name: 'contract_index', component: resolve => { require(['@/views/page/contract.vue'], resolve); } }
        ]
    },
    {
        path:'/OperationAnaly',
        icon:'ios-paper',
        title:'运营分析',
        name:'OperationAnaly',
        access: [0,1],
        component:Main,
        children:[
             {
                path: 'carAnaly',
                icon: 'ios-paper-outline',
                name: 'carAnaly',
                title: '车队运单分析',
                component: resolve => { require(['@/views/OperationAnaly/carAnaly/carAnaly.vue'], resolve); }
            },
            {
                path: 'basAnaly',
                icon: 'ios-paper-outline',
                name: 'basAnaly',
                title: '基础三项分析',
                component: resolve => { require(['@/views/OperationAnaly/basAnaly/basAnaly.vue'], resolve); }
            },
            {
                path: 'cusAnaly',
                icon: 'ios-paper-outline',
                name: 'cusAnaly',
                title: '客户集中度分析',
                component: resolve => { require(['@/views/OperationAnaly/cusAnaly/cusAnaly.vue'], resolve); }
            }
        ]
    },
    {
        path:'/Sysmanage',
        icon:'ios-paper',
        title:'系统管理',
        access: 0,
        name:'Sysmanage',
        component:Main,
        children:[
             {
                path: 'manager',
                icon: 'ios-paper-outline',
                name: 'manager',
                title: '管理员',
                component: resolve => { require(['@/views/Sysmanage/manager/manager.vue'], resolve); }
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
