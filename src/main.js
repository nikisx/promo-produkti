import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ProductsPage from './components/ProductsPage.vue';
import ContactsPage from './components/ContactsPage.vue';
import MagicPen from './components/Products/MagicPen.vue';
import mitt from 'mitt';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage,
	},
	{
		path: '/products',
		name: 'products',
		component: ProductsPage,
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: ContactsPage,
	},
	{
		path: '/products/magic-pen',
		name: 'magic-pen',
		component: MagicPen,
	},
];

const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// always scroll to top
		return { top: 0 }
	},
});

app.use(router)
.mount('#app')
