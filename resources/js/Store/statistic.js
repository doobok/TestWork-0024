import Axios from 'axios';

export default {
    state: {
        statistic: {
            notes: '',
            users: '',
        },
    },
    getters: {
        statistic_counts: state => {
            return state.statistic;
        },
    },
    mutations: {
        SET_STAT: (state, payload, dispatch) => {
            state.statistic = payload;
        },
    },
    actions: {
        GET_STAT: (context) => {
            return Axios.get('/api/v1/statistic')
                .then((response) => {
                    context.commit('SET_STAT', response.data)
                })
                .catch(error => {
                    console.log(error)
                });

        },
    }
}
