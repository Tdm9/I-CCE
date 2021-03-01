import Vuex from "vuex";
import {chunk,groupBy} from "lodash";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recipes: [],
        recipesOrderedByType: {},
    },
    mutations: {
        set(state,recipes){
            state.recipes=recipes;
        },
        orderAndSet(state,recipes){
            state.recipesOrderedByType=groupBy(recipes,'type');
            console.log(state.recipesOrderedByType)
        },
    },
    actions: {
        fetchRecipes: ({ commit }) => fetch(`https://icce-server.herokuapp.com/api`)
            .then(response => response.json())
            .then(result => {
                commit('set', chunk(result,500));
                commit('orderAndSet', result);
            })
            .catch(error => console.log('error', error)),
    }
});

export default store
