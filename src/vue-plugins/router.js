import VueRouter from 'vue-router';
import Home from "@/components/pages/Home";
import Favourites from "@/components/pages/Favourites";
import Popular from "@/components/pages/Popular";
import Search from "@/components/pages/Search";
import Vue from "vue";
import Meat from "@/components/pages/RecipeTypeViewer";

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: '', component: Home },
        { path: '/favourites', component: Favourites },
        { path: '/popular', component: Popular },
        { path: '/search', component: Search },
        { path: '/typeSearch/:type', component: Meat },
        { path: '*', redirect: '/' },
    ]});
Vue.use(VueRouter);

export default router
