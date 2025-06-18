<template>
    <nav class="w-[71%] m-auto pb-16">
        <div>
            <h1 class="font-bold text-[42px] pt-16">Booking now...</h1>
            <p class="pt-4 text-xl">List of all rooms are in here, choose your favourite...</p>
            <div class="standard-room pt-12">
                <h1 class="font-bold text-[30px]">Standard room</h1>
                <ol class="flex items-center gap-4 pt-4">
                    <li v-for="room in rooms" :key="room" class="flex flex-col gap-2">
                        <img class="border-none rounded-xl w-400" :src="room.url" alt="">
                        <button class="border-none rounded-md bg-blue-600 w-25 p-2 font-bold text-white">Book now</button>
                    </li>
                </ol>
            </div>
            <div class="standard-room pt-12">
                <h1 class="font-bold text-[30px]">Deluxe room</h1>
                <ol class="flex items-center gap-4 pt-4">
                    <li v-for="room in rooms" :key="room" class="flex flex-col gap-2">
                        <img class="border-none rounded-xl w-500" :src="room.url" alt="">
                        <button class="border-none rounded-md bg-blue-600 w-25 p-2 font-bold text-white">Book now</button>
                    </li>
                </ol>
            </div>
            <div class="standard-room pt-12">
                <h1 class="font-bold text-[30px]">Deluxe room</h1>
                <ol class="flex items-center gap-4 pt-4">
                    <li v-for="room in rooms" :key="room" class="flex flex-col gap-2">
                        <img class="border-none rounded-xl w-400" :src="room.url" alt="">
                        <button class="border-none rounded-md bg-blue-600 w-25 p-2 font-bold text-white">Book now</button>
                    </li>
                </ol>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const rooms = [
        { url: "https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg"},
        { url: "https://media-cdn.tripadvisor.com/media/photo-s/2b/38/e5/42/caption.jpg"},
        { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515205172.jpg?k=1f228b0606a2cfa0bb5f6816086e3d1e8342cf3271434bdb4bc851c1d80a4afc&o=&hp=1"},
        { url: "https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png"},
    ]
</script>

