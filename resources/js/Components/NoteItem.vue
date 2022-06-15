<template>
    <div class="relative">
        <div class="relative flex w-60 h-48 bg-gray-200 text-gray-600 rounded-md p-2 gap-2 cursor-pointer transition-colors duration-300 hover:bg-yellow-100 hover:text-gray-900"
             :class="getColor()"
             @click="switchFullscreen()"
        >
            <div class="m-4">
                <h2 class="text-lg font-bold">{{note.title}}</h2>
                <p class="text-xs">{{note.text}}</p>
                <span class="text-xs absolute right-1 top-1">{{ getDate(note.created_at) }}</span>
            </div>
            <span class="absolute left-2 bottom-2" title="Complete">
                <svg class="h-36 w-36 text-gray-500 opacity-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"
                     v-if="note.complete"
                >
                    <path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"/>
                </svg>
            </span>
        </div>
        <span class="absolute right-12 bottom-2 cursor-pointer" title="Edit Note">
            <svg class="h-7 w-7 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"
                 @click="switchForm()"
            >
                <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/>
            </svg>
        </span>
        <span class="absolute right-2 bottom-2 cursor-pointer" title="Delete Note">
            <svg class="h-7 w-7 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"
                 @click="deleteItem(note.id)"
            >
                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/>
            </svg>
        </span>

    </div>
</template>

<script>
export default {
    name: "NoteItem",
    data() {
        return {
            colors: [
                'bg-sky-200',
                'bg-emerald-200',
                'bg-green-200',
                'bg-pink-200',
                'bg-orange-200',
                'bg-indigo-200',
            ]
        }
    },
    props: ['note'],
    methods: {
        switchForm(){
            this.$emit('switchForm', this.note);
        },
        switchFullscreen(){
            this.$emit('switchFullscreen', this.note);
        },
        deleteItem(id){
            if (confirm('You really want to delete the note')){
                this.$store.dispatch('DEL_NOTE', id)
            }
        },
        getDate(dateTimeString)
        {
            let date = new Date(dateTimeString)
            return date.toLocaleDateString( date );
        },
        getColor(){
            let rand = Math.floor(Math.random()*this.colors.length);
            return this.colors[rand];
        }
    }
}
</script>
