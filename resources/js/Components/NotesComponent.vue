<template>
    <div>
        <div class="w-full flex justify-center my-10">
            <div class="relative pull-right pl-4 pr-4 md:pr-0">
                <input type="search" v-model="searchStr" placeholder="Search" class="w-full bg-white text-lg text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal">
                <div class="absolute left-7 top-3">
                    <svg class="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-2">
            <note-add @switchForm="switchForm"></note-add>
            <note-item v-for="note in filteredNotes" :note="note" @switchForm="switchForm" @switchFullscreen="switchFullscreen" :key="note.id"></note-item>
        </div>

        <note-form :item="editedNote" :shown="showForm" @closeForm="switchForm"></note-form>
        <note-fullscreen :item="editedNote" :fullscreen="showFullscreen" @closeFullscreen="switchFullscreen"></note-fullscreen>

    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "NotesComponent",
    components: {
        NoteAdd: () => import('./NoteAdd'),
        NoteItem: () => import('./NoteItem'),
        NoteForm: () => import('./NoteForm'),
        NoteFullscreen: () => import('./NoteFullscreen')
    },
    data() {
        return {
            searchStr: '',
            editedNote: false,
            showForm: false,
            showFullscreen: false,
        }
    },
    methods: {
        switchForm(item)
        {
            this.editedNote = item;
            this.showForm = !this.showForm
        },
        switchFullscreen(item)
        {
            this.editedNote = item;
            this.showFullscreen = !this.showFullscreen
        }
    },
    computed: {
        ...mapGetters(['my_notes']),

        filteredNotes() {
            if (this.searchStr) {
                return this.my_notes.filter(item => {
                    return item.title.includes(this.searchStr);
                });
            }
            this.my_notes.sort(function(a, b) {
                return - ( a.id - b.id );
            });
            return this.my_notes
        }
    },
    mounted() {
        this.$store.dispatch('GET_NOTES_FROM_DB')
    }
}
</script>
