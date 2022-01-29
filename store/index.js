import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    home: [],
    work: []
}); 

export const getters = {
    getHomeTodos(){
        return state.work;
    },
    getWorkTodos(){
        return state.work;
    },
};

export const mutations = {
    ADD_HOME_TODO (state, payload) {
        state.home.push(payload)
    },
    ADD_WORK_TODO (state, payload) {
        state.work.push(payload)
    }
};