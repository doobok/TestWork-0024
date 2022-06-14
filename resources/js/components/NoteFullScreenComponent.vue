<template>
    <Transition>
        <div v-if="fullscreen" class="flex fixed left-0 top-0 w-full z-30 overlay-dark-color h-screen cursor-auto px-2">
            <div class="relative m-auto text-white max-w-md">
                <h2 class="text-3xl">{{item.title}}</h2>
                <p class="my-2">{{item.text}}</p>
                <button
                    class="absolute -top-4 right-0 bg-red-600 text-white p-3 font-bold uppercase rounded shadow hover:bg-red-500 hover:shadow-lg outline-none focus:outline-none"
                    type="button"
                    @click="closePage"
                >
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" class="h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
                    </svg>
                </button>
                <hr>
                <p class="mt-4 mb-2 w-full">Write a comment</p>
                <form @submit.prevent="sendComment">
                    <div class="relative flex flex-col mb-2">
                        <textarea
                            id="comment"
                            name="comment"
                            v-model="comment"
                            class="border-0 p-3 placeholder-gray-400 text-gray-700 bg-white w-full h-16 rounded text-sm shadow focus:outline-none focus:ring w-full"
                            @blur="$v.comment.$touch()"
                        ></textarea>
                        <span class="text-xs text-gray-500 absolute right-1 bottom-0">{{ comment.length }}/140</span>
                        <span v-if="$v.comment.$error" class="text-xs bg-red-500 text-white px-1 rounded-sm absolute right-1 top-1 opacity-75">input error</span>
                    </div>
                    <button
                        class="bg-violet-600 text-white w-full p-3 mt-3 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none"
                        type="submit"
                        :disabled="$v.$invalid"
                    >Save</button>
                </form>
                <div class="h-auto mt-2 overflow-y-auto max-h-56">
                    <div v-for="comment in comments"
                         class="relative p-2 my-1 bg-gray-800 rounded-lg text-sm flex flex-nowrap items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-2 h-4 w-4" viewBox="0 0 24 24">
                            <path d="M20 9.352c0-4.852-4.751-8.352-10-8.352-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 7.697 1.877 13.307-2.842 13.307-7.892zm-14.5 1.38c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm8.383 8.789c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-3.365.818-6.114-.29-7.573-2.1 4.557-.66 8.241-3.557 9.489-7.342 1.48.979 2.465 2.491 2.465 4.274 0 1.12-.403 2.221-1.117 3.074z"/>
                        </svg>
                        {{ comment.text }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="absolute top-2 right-2 text-red-600 w-5 cursor-pointer" viewBox="0 0 24 24"
                             @click="deleteComment(comment.id)"
                        >
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </Transition>

</template>

<script>
import { mapGetters } from 'vuex';
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            comment: ''
        }
    },
    props: ['item', 'fullscreen'],
    methods: {
        closePage() {
            this.$emit('closeFullscreen');
        },
        sendComment() {
            this.$store.dispatch('CREATE_COMMENT', {
                text: this.comment,
                note_id: this.item.id,
            })
                .then((response) => {
                    this.$v.$reset();
                    this.comment = ''
                }).catch(error => {
                alert('Error! Please try again later')
                console.log(error);
            });
        },
        deleteComment(id) {
            if (confirm('You really want to delete this Comment')){
                this.$store.dispatch('DEL_COMMENT', id)
            }
        }
    },
    computed: {
        ...mapGetters(['comments'])
    },
    validations: {
        comment: {
            required,
            maxLength: maxLength(140)
        },
    },
    watch: {
        item(newValue, oldValue) {
            if (newValue) {
                this.$store.dispatch('GET_COMMENTS', this.item.id)
            }
        }
    }
}
</script>
