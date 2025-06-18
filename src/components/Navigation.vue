<template>
    <nav class="p-6 bg-blue-900">
        <div class="w-[73%] m-auto">
            <h1 class="text-white text-[18px] font-bold">Booking Room.com</h1>
            <div class="flex items-center gap-12 text-white mt-8 justify-sart">
                <NavigationItem
                v-for="item in navItems" 
                :key="item.label" 
                :item="item"
                :to="item.path"
                >
                </NavigationItem>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import NavigationItem from './NavigationItem.vue';
    import { ref } from 'vue';

    const navItems = ref([
        { label: "Home", path: "/", icon: "home" },
        { label: "Booking", path: "/booking", icon: "menu_book" },
        { label: "Contact", path: "/contact", icon: "garden_cart"},
    ]);
</script>

