import { createRouter, createWebHistory } from 'vue-router';
import Homepage from "@/pages/Homepage.vue";
import Bookingpage from '@/pages/Bookingpage.vue';
import Contactpage from '@/pages/Contactpage.vue';

const routes = [
    {
        path : "/",
        name : "Home",
        component: Homepage,
    },
    {
        path : "/booking",
        name : "Booking",
        component: Bookingpage,
    },
    {
        path : "/contact",
        name : "Contact",
        component: Contactpage,
    },

]


const router = createRouter({
    'history': createWebHistory(),
    routes
})

export default router;