import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home/Home.vue';
import Editor from './views/Editor/Editor.vue';
import History from './views/History/History.vue';
import pinia from './store/index';


const routes = [
    {path: '/', component: Home},
    {path: '/editor', component: Editor},
    {path: '/history', component: History}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app')
