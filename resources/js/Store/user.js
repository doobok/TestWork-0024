import Axios from 'axios';

export default {
    state: {
        user: {
            name: '',
            id: '',
        },
    },
    getters: {
        user_state: state => {
            return state.user;
        }
    },
    mutations: {
        SET_USER: (state, payload) => {
            state.user = payload;
        },
    },
    actions: {
        GET_USER: (context) => {
            let user_id = checkLocalUser()
            if (user_id > 0) {
                return Axios.get('/api/v1/user', { params: {id: user_id}})
                    .then((response) => {
                        context.commit('SET_USER', response.data)
                    })
                    .catch(error => {
                        context.commit('SET_USER', { id: 0})
                        console.log(error)
                    });
            }
            else {
                context.commit('SET_USER', {
                    name: 'Incognito',
                    id: 0,
                })
            }
        },
        LOGIN_USER: (context, payload) => {
            return Axios.post('/login', payload)
                .then((response) => {
                    if (response.status === 200) {
                        Axios.get('/api/v1/user', { params: {email: payload.email}})
                            .then((response) => {
                                context.commit('SET_USER', response.data)
                                saveLocalUser(response.data.id)
                            })
                    }
                })
                .catch(error => {
                    console.log(error);
                    return 'Login error!'
                });
        },
        REGISTER_USER: (context, payload) => {
            return Axios.post('/register', payload)
                .then((response) => {
                    if (response.status === 201) {
                        Axios.get('/api/v1/user', { params: {email: payload.email}})
                            .then((response) => {
                                context.commit('SET_USER', response.data)
                                saveLocalUser(response.data.id)
                            })
                    }
                })
                .catch(error => {
                    console.log(error);
                    return 'Error! Check the form!'
                });
        },
        LOGOUT_USER: (context) => {
            return Axios.post('/logout')
                .then((response) => {
                    context.commit('SET_USER', {
                        name: 'Incognito',
                        id: 0,
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        },
    }
}

function checkLocalUser() {
    let user_id = 0;
    if (localStorage.getItem('local_user')) {
        try {
            user_id = JSON.parse(localStorage.getItem('local_user'));
        } catch(e) {
            localStorage.removeItem('local_user');
        }
    }
    return user_id;
}
function saveLocalUser(id) {
        const parsed = JSON.stringify(id);
        localStorage.setItem('local_user', parsed);
}
