<template>
    <div class="app">
        <Navbar></Navbar>
        <div class="container w-full mx-auto pt-32 sm:pt-20">
            <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

                <router-view></router-view>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

export default {
    name: "app",
    components: {
        Navbar: () => import('./Components/Navbar.vue'),
        Footer: () => import('./Components/Footer.vue')
    }
}
</script>
