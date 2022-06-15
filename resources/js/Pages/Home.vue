<template>
    <div class="container flex flex-wrap items-center">
        <div class="w-full md:w-1/2 my-12">
            <img src="/screen.svg" alt="image">
        </div>
        <div class="w-full md:w-1/2 space-y-8">
            <h1 class="text-4xl font-bold">Create your first note!</h1>
            <p class="text-lg italic">Create and save you notes on "Day Note"!</p>

            <statistic-component></statistic-component>

            <router-link :to="{ name: 'notes' }" class="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                Go to NOTES
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
        StatisticComponent: () => import('../Components/StatisticComponent')
    }
}
</script>
