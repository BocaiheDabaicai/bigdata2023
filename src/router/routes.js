export default [
    {
        name: 'root',
        path: '/',
        component: () => import('../views/Start.vue')
    },
    {
        name:'salebigdata',
        path:'/Salebigdata',
        component:()=>import('../views/Salebigdata.vue')
    }
]