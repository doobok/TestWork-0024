import Axios from 'axios';

export default {
    state: {
        comments: [],
    },
    getters: {
        comments: state => {
            return state.comments;
        },
    },
    mutations: {
        SET_COMMENTS: (state, payload) => {
            state.comments = payload;
        },
        PUSH_COMMENT: (state, payload) => {
            state.comments.push(payload);
        },
        REMOVE_COMMENT: (state, payload) => {
            let index = state.comments.findIndex(comment => comment.id === payload);
            state.comments.splice(index, 1);
        },
    },
    actions: {
        GET_COMMENTS: async (context, payload) => {
            return Axios.get('/api/v1/comments', { params: {id: payload }})
                .then((response) => {
                    context.commit('SET_COMMENTS', response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        CREATE_COMMENT: async (context, payload) => {
            console.log(payload)
            return Axios.post('/api/v1/comment', payload )
                .then((response) => {
                    context.commit('PUSH_COMMENT', response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        DEL_COMMENT: async (context, payload) => {
            return Axios.delete('/api/v1/comment/' + payload)
                .then((response) => {
                    if (response.status === 204){
                        context.commit('REMOVE_COMMENT', payload)
                    } else {
                        alert('Error! Please try again later')
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
}
