import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Allrecipe from '../views/Allrecipe.vue';
import Eachrecipe from '../views/Eachrecipe.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/all',
		name: 'Allrecipe',
		component: Allrecipe,
	},
	{
		path: '/recipe/:id',
		name: 'Eachrecipe',
		component: Eachrecipe,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
