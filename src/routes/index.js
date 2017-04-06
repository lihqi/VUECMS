
const map = resolve => {
    require.ensure(['../containers/map.vue'], () => {
        resolve(require('../containers/map.vue'));
    }, 'map');
};
//38活动节商家查询页面
const businessMain = resolve => {
    require.ensure(['../containers/womenDay/businessMain.vue'], () => {
        resolve(require('../containers/womenDay/businessMain.vue'));
    }, 'businessMain');
};
//38活动节主页面
const womenDay = resolve => {
    require.ensure(['../containers/womenDay/womenDay.vue'], () => {
        resolve(require('../containers/womenDay/womenDay.vue'));
    }, 'womenDay');
};
//38活动节获奖页面
const winSuc = resolve => {
    require.ensure(['../containers/womenDay/suc.vue'], () => {
        resolve(require('../containers/womenDay/suc.vue'));
    }, 'winSuc');
};
//组件相关
const radio = resolve => {
    require.ensure(['../containers/ui/radio.vue'], () => {
        resolve(require('../containers/ui/radio.vue'));
    }, 'radio');
};
const mytest = resolve => {
    require.ensure(['../containers/ui/my.vue'], () => {
        resolve(require('../containers/ui/my.vue'));
    }, 'mytest');
};
//vuex Demo
const vuex = resolve => {
    require.ensure(['../containers/ui/vuex.vue'], () => {
        resolve(require('../containers/ui/vuex.vue'));
    }, 'vuex');
};
const test = resolve => {
    require.ensure(['../containers/website/index.vue'], () => {
        resolve(require('../containers/website/index.vue'));
    }, 'test');
};
const service = resolve => {
    require.ensure(['../containers/website/service.vue'], () => {
        resolve(require('../containers/website/service.vue'));
    }, 'service');
};
const coopration = resolve => {
    require.ensure(['../containers/website/coopration.vue'], () => {
        resolve(require('../containers/website/coopration.vue'));
    }, 'coopration');
};
const news = resolve => {
    require.ensure(['../containers/website/news.vue'], () => {
        resolve(require('../containers/website/news.vue'));
    }, 'news');
};
const about = resolve => {
    require.ensure(['../containers/website/about.vue'], () => {
        resolve(require('../containers/website/about.vue'));
    }, 'about');
};
const connect = resolve => {
    require.ensure(['../containers/website/connect.vue'], () => {
        resolve(require('../containers/website/connect.vue'));
    }, 'connect');
};
const join = resolve => {
    require.ensure(['../containers/website/join.vue'], () => {
        resolve(require('../containers/website/join.vue'));
    }, 'join');
};
const view = resolve => {
    require.ensure(['../containers/website/view.vue'], () => {
        resolve(require('../containers/website/view.vue'));
    }, 'view');
};

export default [
    //嵌套路由
    {
        path: '/map',
        component: map,
        name: '组件模块',
        
    },{
        path: '/businessMain',
        component: businessMain,
        name: 'businessMain',
        
    },, {
        path: '/radio',
        name: 'radio',
        component: radio
    }, {
        path: '/mytest',
        name: 'mytest',
        component: mytest
    }, {
        path: '/womenDay',
        name: 'womenDay',
        component: womenDay
    }, {
        path: '/businessMain/:womensDayId/shopId/:shopId',
        name: 'businessMain',
        component: businessMain
    }, {
        path: '/winSuc',
        name: 'winSuc',
        component: winSuc
    }, {
        path: '/vuex',
        name: 'vuex',
        component: vuex
    },{
        path: '/test',
        name: 'test',
        component: test
    },{
        path: '/service',
        name: 'service',
        component: service
    },{
        path: '/coopration',
        name: 'coopration',
        component: coopration
    },{
        path: '/news',
        name: 'news',
        component: news
    },{
        path: '/about',
        name: 'about',
        component: about
    },{
        path: '/connect',
        name: 'connect',
        component: connect
    },{
        path: '/join',
        name: 'join',
        component: join
    },{
        path: '/view/id/:id',
        name: 'view',
        component: view
    }
    /*, {
        path: '*',
        component: map
    }*/
]