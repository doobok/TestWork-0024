<template>
    <div>
        <div class="flex w-60 h-48 bg-gray-200 text-gray-600 rounded-md p-2 gap-2 cursor-pointer transition-colors duration-300 hover:bg-gray-300 hover:text-gray-900"
             @click="switchForm()"
        >
            <div class="m-auto">
                <div class="flex justify-center">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
                    </svg>
                </div>
                <span class="text-sm">Add new NOTE</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoteAdd",
    methods: {
        switchForm(){
            this.$emit('switchForm', false);
        }
    }
}
</script>
