import VueRouter from 'vue-router';
import Home from "@/components/pages/Home";
import Favourites from "@/components/pages/Favourites";
import Popular from "@/components/pages/Popular";
import Search from "@/components/pages/Search";
import Vue from "vue";
import Meat from "@/components/pages/RecipeTypeViewer";
import {publicPath} from '../../vue.config'
const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: `${publicPath}`, component: Home },
        { path: `${publicPath}/favourites`, component: Favourites },
        { path: `${publicPath}/popular`, component: Popular },
        { path: `${publicPath}/search`, component: Search },
        { path: `${publicPath}/typeSearch/:type`, component: Meat },
        { path: '*', redirect: `${publicPath}` },
    ]});
Vue.use(VueRouter);

export default router
