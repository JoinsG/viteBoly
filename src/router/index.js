import {
    createRouter,
    createWebHashHistory,
    isNavigationFailure
} from "vue-router";
import Store from '@/store';
import Home from "@/views/Home.vue";
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: 'option1',
                name: 'option1',
                component: () => import('@/views/input/option1.vue')
            },
            {
                path: 'option2',
                name: 'option2',
                component: () => import('@/views/input/option2.vue')
            },
            {
                path: 'canvas-rule',
                name: 'canvas-rule',
                component: () => import('@/views/canvas/canvas-rule.vue')
            },
            {
                path: 'test-item',
                name: 'test-item',
                component: () => import('@/views/testExplam/index.vue')
            }
        ]
    },
    {
        path:'/babylon',
        name: 'babylon',
        component: () => import('@/views/Babylon/Babylon.vue')
    },
    {
        path:'/house',
        name: 'house',
        component: () => import('@/views/Babylon/House/House.vue')
    },
    {
        path:'/Cooc',
        name: 'Cooc',
        component: () => import('@/views/Babylon/Cooc/Cooc.vue')
    },
     {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login.vue')
    },
    {
        path: '/dragResize',
        name: 'dragResize',
        component: () => import('@/views/dragResize/dragResize.vue')
    },
    {
        path: '/vuedraggable',
        name: 'vuedraggable',
        component: () => import('@/views/VueDraggable/VueDraggable.vue')
    }
]
})

Router.beforeEach((to, from, next) => {
    console.log(next);
    console.log(Store);
    Store.dispatch('user/logout')
    next();
})
Router.afterEach((to, from, next) => {
    if (isNavigationFailure(next)) {
        console.log('failed navigation', next)
    }
})

export default Router