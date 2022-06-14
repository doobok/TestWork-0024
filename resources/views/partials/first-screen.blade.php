<div class="container flex flex-wrap items-center">
    <div class="w-full md:w-1/2 my-12">
        <img src="/screen.svg" alt="image">
    </div>
    <div class="w-full md:w-1/2 space-y-8">
        <h1 class="text-4xl font-bold">Create your first note!</h1>
        <p class="text-lg italic">Create and save you notes on "Day Note"!</p>
        <div class="w-full flex flex-wrap space-x-4">
            <div class="bg-gradient-to-b from-orange-200 to-orange-100 border-b-4 border-orange-500 rounded-lg shadow-xl p-4">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1 text-right md:text-center">
                        <h5 class="font-bold uppercase text-gray-600">Total Users</h5>
                        <h3 class="font-bold text-3xl">{{ $users }}</h3>
                    </div>
                </div>
            </div>
            <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-500 rounded-lg shadow-xl p-4">
                <div class="flex flex-row items-center">
                    <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1 text-right md:text-center">
                        <h5 class="font-bold uppercase text-gray-600">Total Notes</h5>
                        <h3 class="font-bold text-3xl">{{ $notes }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <a href="{{ route('notes') }}" class="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
            Go to NOTES
        </a>

    </div>
</div>
