<template>
    <div>
        <span class="flex flex-nowrap">Hi, {{user_state.name}}!
            <span class="cursor-pointer ml-2" title="Logout"
                  @click="logout"
                v-if="user_state.id > 0">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd">
                    <path d="M8 9v-4l8 7-8 7v-4h-8v-6h8zm6-7c-1.787 0-3.46.474-4.911 1.295l.228.2 1.395 1.221c1.004-.456 2.115-.716 3.288-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.284-.26-3.288-.715l-1.395 1.221-.228.2c1.451.82 3.124 1.294 4.911 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/>
                </svg>
            </span>
        </span>
        <Transition>
            <div v-if="user_state.id === 0" class="flex fixed left-0 top-0 w-full z-30 overlay-blue-color h-screen cursor-auto">
                <div class="m-auto min-w-sm text-white">
                    <div class="w-full flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="w-2/3" fill="currentColor" viewBox="0 0 488 488">
                        <path d="M414.549 317c-46.8-38.5-97.3-64-107.6-69-1.2-.6-1.9-1.7-1.9-3v-73c9.2-6.1 15.2-16.5 15.2-28.4V68.1c0-37.6-30.5-68.1-68.1-68.1h-16.2c-37.6 0-68.1 30.5-68.1 68.1v75.6c0 11.8 6.1 22.3 15.2 28.4V245c0 1.3-.7 2.5-1.9 3-10.3 5-60.8 30.5-107.6 69-8.5 7-13.3 17.4-13.3 28.3v51.8h69.4v-5.8c0-15.1 10.7-27.7 24.9-30.6.1-.3.3-.6.4-.9-3.4-5.1-5.2-11-5.2-17.2 0-8.3 3.2-16.2 9.1-22.1l8.4-8.4c5.9-5.9 13.7-9.2 22.1-9.2 6.3 0 12.3 1.8 17.4 5.3.2-.1.5-.2.7-.3 2.8-14.3 15.5-25.2 30.6-25.2h11.9c15.2 0 27.9 10.9 30.6 25.3.2.1.4.1.5.2 5.1-3.5 11.2-5.4 17.5-5.4 8.3 0 16.2 3.2 22 9.1l8.4 8.4c10.8 10.7 12 27.4 3.8 39.6.1.2.2.4.2.5 14.4 2.7 25.3 15.4 25.4 30.6v6h69.4v-51.8c.1-10.9-4.8-21.3-13.2-28.2z"/>
                            <path class="animate-pulse" d="M327.249 383.4h-11.7c-1.8-9.6-5.6-18.9-11.4-27.3l8.3-8.3c3-3 3-7.9 0-10.9l-8.4-8.4c-3-3-7.9-3-10.9 0l-8.3 8.3c-8.4-5.7-17.7-9.5-27.3-11.3v-11.7c0-4.2-3.4-7.7-7.7-7.7h-11.9c-4.2 0-7.7 3.4-7.7 7.7v11.6c-9.7 1.8-19 5.6-27.4 11.3l-8.2-8.2c-3-3-7.9-3-10.9 0l-8.4 8.4c-3 3-3 7.9 0 10.9l8.1 8.1c-5.8 8.4-9.6 17.8-11.5 27.5h-11.4c-4.2 0-7.7 3.4-7.7 7.7V403c0 4.2 3.4 7.7 7.7 7.7h11.3c1.8 9.7 5.6 19.2 11.4 27.6l-7.9 8c-3 3-3 7.9 0 10.9l8.4 8.4c3 3 7.9 3 10.9 0l7.9-8c8.5 5.8 17.9 9.6 27.7 11.4v11.3c0 4.2 3.4 7.7 7.7 7.7h11.9c4.2 0 7.7-3.4 7.7-7.7v-11.4c9.7-1.9 19.1-5.7 27.5-11.5l8.1 8.1c3 3 7.9 3 10.9 0l8.4-8.4c3-3 3-7.9 0-10.9l-8.2-8.2c5.7-8.4 9.5-17.8 11.2-27.5h11.6c4.2 0 7.7-3.4 7.7-7.7v-11.9c.2-4.1-3.3-7.5-7.5-7.5zm-55.2 41.7c-15.4 15.5-40.5 15.5-56 .1s-15.5-40.5-.1-56 40.5-15.5 56-.1 15.6 40.5.1 56z"/>
                </svg>
                    </div>
                    <h3 class="text-white text-lg mb-2">Login/Register form
                        <span class="font-bold cursor-pointer text-sm"
                              @click="register = !register"
                        >(toggle to {{ register ? 'login' : 'register' }})</span>
                    </h3>
                    <div v-if="register" class="relative mb-2">
                        <input
                            type="text" name="name"
                            v-model="name"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Your name"
                            @blur="$v.name.$touch()"
                        />
                        <span v-if="$v.name.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-1 opacity-75">min 4 characters</span>
                    </div>
                    <div class="relative mb-2">
                        <input
                            type="email" name="email"
                            v-model="email"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Your email"
                            @blur="$v.email.$touch()"
                        />
                        <span v-if="$v.email.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-1 opacity-75">error</span>
                    </div>
                    <div class="relative mb-2">
                        <input
                            type="password" name="password"
                            v-model="password"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            @blur="$v.password.$touch()"
                        />
                        <span v-if="$v.password.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-1 opacity-75">min 6 characters</span>
                    </div>
                    <div v-if="register" class="relative">
                        <input
                            type="password" name="password_confirmation"
                            v-model="password_confirmation"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password confirmation"
                            @blur="$v.password_confirmation.$touch()"
                        />
                        <span v-if="$v.password_confirmation.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-1 opacity-75">error</span>
                    </div>
                    <div v-if="info" class="mt-2">
                        <p>{{ info }}</p>
                    </div>

                    <button
                        class="bg-green-400 text-white w-full p-3 mt-3 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none"
                        type="button"
                        @click="sendForm"
                    >
                        <template v-if="register">
                            Register
                        </template>
                        <template v-else>
                            Login
                        </template>
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { required, minLength } from "vuelidate/lib/validators";

export default {
    name: "UserComponent",
    data(){
        return{
            register: false,
            info: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        sendForm(){
            if (this.register) {
                this.$store.dispatch('REGISTER_USER',{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then((response) => {
                    this.info = response
                })
            } else {
                this.$store.dispatch('LOGIN_USER', {
                    email: this.email,
                    password: this.password,
                }).then((response) => {
                    this.info = response
                })
            }
        },
        logout(){
            this.$store.dispatch('LOGOUT_USER')
        }
    },
    created() {
        this.$store.dispatch('GET_USER')
    },
    computed: {
        ...mapGetters(['user_state'])
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
        },
        password: {
            required,
            minLength: minLength(6)
        },
        password_confirmation: {
            required,
        },
    },
}
</script>
