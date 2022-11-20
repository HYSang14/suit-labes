import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/home.vue';
import CreatePage from '@/views/createPage.vue'
import SignIn from '@/views/signIn.vue';
import Details from '@/views/details.vue'
const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/createPage', name: 'CreatePage', component: CreatePage},
    { path: '/signIn', name: 'SignIn', component: SignIn},
    { path: '/details', name: 'Details', component: Details}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
