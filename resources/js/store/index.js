import Vue from 'vue';
import Vuex from 'vuex';

import user from './user'
import notes from './notes'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        notes
    }
})
