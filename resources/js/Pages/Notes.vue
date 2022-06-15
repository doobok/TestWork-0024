<template>
    <div>

        <notes-component></notes-component>

    </div>
</template>

<script>
export default {
    name: "Notes",
    components: {
        NotesComponent: () => import('../Components/NotesComponent')
    }

}
</script>
