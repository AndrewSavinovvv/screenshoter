import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import FeaturesView  from '@/views/FeaturesView.vue';
import BenefitsView  from '@/views/BenefitsView.vue';
import HowToUseView  from '@/views/HowToUseView.vue';
import FAQView  from '@/views/FAQView.vue';

const routes = [
    { path: '/', name: 'HomeView ', component: HomeView },
    { path: '/features', name: 'FeaturesView ', component: FeaturesView },
    { path: '/benefits', name: 'BenefitsView ', component: BenefitsView },
    { path: '/how-to-use', name: 'HowToUseView ', component: HowToUseView },
    { path: '/faq', name: 'FAQView ', component: FAQView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;