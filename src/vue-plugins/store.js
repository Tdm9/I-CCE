import Vuex from "vuex";
import {chunk,groupBy} from "lodash";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        rawRecipes: [],
        recipes: [],
        recipesOrderedByType: {},
    },
    mutations: {
        rawSet(state,recipes){
            state.rawRecipes=recipes;
        },
        set(state,recipes){
            state.recipes=recipes;
        },
        orderAndSet(state,recipes){
            let data={};
            Object.keys(recipes).map(key=> {
                data[key]=chunk(recipes[key],50);
            });
            state.recipesOrderedByType=data//groupBy(recipes,'type');
        },
    },
    actions: {
        fetchRecipes: ({ commit }) => fetch(`https://icce-server.herokuapp.com/api`)
            .then(response => response.json())
            .then(result => {
                commit('rawSet', result);
                commit('set', chunk(result,500));
                return result
            })
            .then(result =>{
                commit('orderAndSet', groupBy(result,'type'));
            })
            .catch(error => console.log('error', error)),
    }
});

export default store
