import { createRouter, createWebHistory } from 'vue-router';
function lazyLoad(view){
    return() => import(`@/components/${view}.vue`)
}

const routes = [
    {
        path: '/haha',
        component: lazyLoad('HomePage')
    },
    {
        path: '/hah',
        component: lazyLoad('HelloWorld')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;