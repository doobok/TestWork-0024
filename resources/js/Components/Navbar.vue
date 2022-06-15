<template xmlns="http://www.w3.org/1999/html">
    <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">

        <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

            <div class="w-1/2 pl-2 md:pl-0">
                <router-link :to="{ name: 'home' }" class="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold flex flex-nowrap items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 mx-2">
                        <path d="M18.009 13.388c-1.771 2.408-4.399 4.783-7.359 4.396-.801 1.119-1.695 2.682-2.688 4.496l-2.296.72c1.943-3.79 4.537-7.981 7.32-11.166-1.205.785-3.185 2.473-4.908 4.253-1.554-3.246.085-6.253 2.458-8.548-.067 1.081.413 2.068.772 2.575-.062-.904.044-2.52.704-3.92 1.323-1.116 2.492-1.92 3.829-2.622-.217.791-.033 1.739.222 2.331.116-.82.603-2.368 1.167-3.01 1.667-1.075 4.135-1.936 6.77-1.892-.291 1.623-1.143 4.258-2.294 5.893-.929.597-2.157.946-3.137 1.115.811.228 1.719.293 2.509.235-.575 1.207-1.157 2.311-2.039 3.666-1.216.679-2.77.978-3.832 1.035.743.389 2.097.617 2.802.443zm-14.009 8.612h-4v1h4v-1z"/>
                    </svg>
                    Day Note
                </router-link>
            </div>
            <div class="w-1/2 pr-0">
                <div class="flex relative inline-block float-right">

                    <div class="relative text-sm">
                        <div class="flex items-center focus:outline-none mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8 mr-4 text-gray-600" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/>
                            </svg>
                            <span class="flex flex-nowrap">

                            <UserComponent></UserComponent>

                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex-grow flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white z-20" id="nav-content">
                <ul class="list-reset flex flex-1 items-center px-4 md:px-0">
                    <li class="mr-6 my-2 md:my-0">
                        <router-link :to="{ name: 'home' }" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-orange-600 flex flex-nowrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 mr-2 text-orange-600">
                                <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
                            </svg>
                            <span class="pb-1 md:pb-0 text-sm">Home</span>
                        </router-link>
                    </li>
                    <li class="mr-6 my-2 md:my-0">
                        <router-link :to="{ name: 'notes' }" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500 flex flex-nowrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 mr-2 text-pink-500">
                                <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/>
                            </svg>
                            <span class="pb-1 md:pb-0 text-sm">My Notes</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    components: {
        UserComponent: () => import('./UserComponent')
    }
}
</script>
