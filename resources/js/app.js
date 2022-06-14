import './bootstrap';

// Vue
window.Vue = require('vue').default;
// store
import store from './store/index';
// валидатор форм
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('user-component', require('./components/UserComponent.vue').default);
Vue.component('notes-component', require('./components/NotesComponent.vue').default);
Vue.component('note-add', require('./components/NoteAddCpomponent.vue').default);
Vue.component('note-item', require('./components/NoteItemComponent.vue').default);
Vue.component('note-form', require('./components/NotesFormComponent.vue').default);
Vue.component('note-fullscreen', require('./components/NoteFullScreenComponent.vue').default);


const app = new Vue({
    el: '#app',
    store
});
