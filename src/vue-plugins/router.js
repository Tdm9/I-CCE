import VueRouter from 'vue-router';
import Home from '@/components/pages/Home';
import Favourites from '@/components/pages/Favourites';
import Popular from '@/components/pages/Popular';
import Search from '@/components/pages/Search';
import Vue from 'vue';
import Meat from '@/components/pages/RecipeTypeViewer';
import Details from "@/components/pages/Details";
import {homePath,favPath,popularPath,searchPath,typePathWithParam,detailsPath} from '@/utils/links';
const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        { path: homePath, component: Home },
        { path: favPath, component: Favourites },
        { path: popularPath, component: Popular },
        { path: searchPath, component: Search },
        { path: typePathWithParam, component: Meat },
        { path: '*', redirect: homePath },
        { path: detailsPath, name: 'details', component: Details, props: (route) => ({...route.params})},
    ]});
Vue.use(VueRouter);

export default router;
