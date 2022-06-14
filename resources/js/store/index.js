import Vue from 'vue';
import Vuex from 'vuex';

import user from './user'
import notes from './notes'
import comments from './comments'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        notes,
        comments
    }
})
