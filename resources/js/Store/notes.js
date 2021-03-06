import Axios from 'axios';

export default {
    state: {
        notes: [],
    },
    getters: {
        my_notes: state => {
            return state.notes;
        },
    },
    mutations: {
        SET_NOTES: (state, payload) => {
            state.notes = payload;
        },
        UNSHIFT_NOTE: (state, payload) => {
            state.notes.unshift(payload);
        },
        REMOVE_NOTE: (state, payload) => {
            let index = state.notes.findIndex(note => note.id === payload);
            state.notes.splice(index, 1);
        },
    },
    actions: {
        GET_NOTES_FROM_DB: async (context) => {
            return Axios.get('/api/v1/notes', { params: {id: context.rootGetters.user_state.id}})
                .then((response) => {
                    context.commit('SET_NOTES', response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        CREATE_UPDATE_NOTE: async (context, payload) => {
            if (payload.id > 0) {
                return Axios.put('/api/v1/note/' + payload.id, payload)
                    .then((response) => {
                        if (response.status === 200){
                            context.commit('REMOVE_NOTE', payload.id)
                            context.commit('UNSHIFT_NOTE', response.data)
                        } else {
                            alert('Error! Please try again later')
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                return Axios.post('/api/v1/note', payload )
                    .then((response) => {
                        context.commit('UNSHIFT_NOTE', response.data)
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        DEL_NOTE: async (context, payload) => {
            return Axios.delete('/api/v1/note/' + payload)
                .then((response) => {
                    if (response.status === 204){
                        context.commit('REMOVE_NOTE', payload)
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

