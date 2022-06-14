<template>
    <Transition>
        <div v-if="shown" class="flex fixed left-0 top-0 w-full z-30 overlay-green-color h-screen cursor-auto">
            <div class="m-auto text-white">
                <h3 class="text-white text-2xl mb-2">{{ getTitle }} note</h3>
                <form @submit.prevent="sendForm">
                    <div class="relative flex flex-col mb-2">
                        <label for="note_title" class="text-sm">Note title</label>
                        <input
                            id="note_title"
                            name="note_title"
                            type="text"
                            v-model="title"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white w-80 rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Title"
                            @blur="$v.title.$touch()"
                        />
                        <span class="text-xs text-gray-500 absolute right-1 bottom-0">{{ title.length }}/20</span>
                        <span v-if="$v.title.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-6 opacity-75">input error</span>
                    </div>
                    <div class="relative flex flex-col mb-2">
                        <label for="note_text" class="text-sm">Note text</label>
                        <textarea
                            id="note_text"
                            name="note_text"
                            v-model="text"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white w-80 h-32 rounded text-sm shadow focus:outline-none focus:ring w-full"
                            @blur="$v.text.$touch()"
                        ></textarea>
                        <span class="text-xs text-gray-500 absolute right-1 bottom-0">{{ text.length }}/140</span>
                        <span v-if="$v.text.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-6 opacity-75">input error</span>
                    </div>
                    <label>
                        <input v-model="complete" class="focus:outline-none focus:ring mr-1" type="checkbox"> Note completed
                    </label>
                    <div class="flex gap-2">
                        <button
                            class="bg-red-600 text-white w-1/2 p-3 mt-3 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none"
                            type="button"
                            @click="closeForm"
                        >Cancel</button>

                        <button
                            class="bg-violet-600 text-white w-1/2 p-3 mt-3 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none"
                            type="submit"
                            :disabled="$v.$invalid"
                        >Save</button>
                    </div>


                </form>
            </div>

        </div>
    </Transition>
</template>

<script>
import { mapGetters } from 'vuex';
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    props: ['shown', 'item'],
    data() {
        return {
            id: 0,
            title: '',
            text: '',
            complete: false,
        }
    },
    methods: {
        sendForm(){
            if (this.item) {
                this.$store.dispatch('UPDATE_NOTE', this.note_payload)
                    .then((response) => {
                        this.closeForm()
                    }).catch(error => {
                    alert('Error! Please try again later')
                    console.log(error);
                });
            } else {
                this.$store.dispatch('CREATE_NOTE', this.note_payload)
                    .then((response) => {
                        this.closeForm()
                    }).catch(error => {
                    alert('Error! Please try again later')
                    console.log(error);
                });
            }
        },
        closeForm(){
            this.id = 0
            this.title = ''
            this.text = ''
            this.complete = false
            this.$v.$reset();
            this.$emit('closeForm');
        }
    },
    computed: {
        ...mapGetters(['user_state']),
        note_payload() {
            return{
                id: this.id,
                title: this.title,
                text: this.text,
                complete: this.complete,
                user_id: this.user_state.id,
            }
        },
        getTitle() {
            return (this.id > 0) ? 'Edit' : 'Create new'
        }
    },
    validations: {
        title: {
            required,
            maxLength: maxLength(20)
        },
        text: {
            required,
            maxLength: maxLength(140)
        },
    },
    watch: {
        item(newValue, oldValue){
            if (this.item) {
                this.id = this.item.id
                this.title = this.item.title
                this.text = this.item.text
                this.complete = this.item.complete
            }
        }
    }
}
</script>
