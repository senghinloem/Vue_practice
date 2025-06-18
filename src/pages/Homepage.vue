<template>
    <nav class="bg-blue-900">
        <div class="pl-8 pt-24 pb-16 w-[75%] m-auto">
            <h1 class="font-semibold text-white text-[54px]">Find your next stay</h1>
            <h1 class="font-semibold text-white text-[25px]">You can find the rooms...</h1>
        </div>
    </nav>
    <nav class="w-[70%] m-auto pt-16 pb-16">
        <p class="font-bold text-[25px]">you want are in here "in our Booking Room App"...</p>
        <div class="mt-12">
            <h1 class="font-bold text-xl">Offers</h1>
            <p class="text-gray-500 pt-2">Promotions, deals and special offers for you</p>
            <div id="promotion-card" class="flex itmes-center justify-between border border-gray-300 rounded-xl p-4 mt-4">
                <div id="promotion-text" class="flex flex-col justify-between">
                    <h1 class="font-bold text-xl">Enjoy your quality time</h1>
                    <p>Save up to 30% with our Getway</p>
                    <button class="border-none border-rounded rounded-lg p-2 bg-blue-700 text-white w-[60%]">Go to booking</button>
                </div>
                <img class="border border-none rounded-xl w-30" src="https://r-xx.bstatic.com/xdata/images/xphoto/248x248/468828542.jpeg?k=b51cb74f05db0ebc1a1cbcca384fa2ee8c4d6c0b5fd089a15b1fd14a107ccab4&o=" alt="promotion image">
            </div>
        </div>
        <div id="type" class="mt-12">
            <h1 class="font-bold text-xl">Browse by property type</h1>
            <p class="text-gray-500">Most popular choices</p>
            <div id="room" class="flex items-center pt-4">
                <div class="oneCard">
                    <ol class="flex items-center gap-4">
                        <li v-for="room in rooms" :key="room">
                            <img class="border-none rounded-xl" :src="room.url" alt="">
                            <h1 class="font-bold pt-2">{{ room.title }}</h1>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const rooms = [
        {url: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=", title: "Hotel"},
        {url: "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=", title: "Apartments"},
        {url: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=", title: "Resorts"},
        {url: "https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=", title: "Villas"},
    ]
</script>
