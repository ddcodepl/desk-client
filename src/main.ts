import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
// @ts-ignore
import { registerSW } from 'virtual:pwa-register';

registerSW({
    name: 'Desk Upp',
    short_name: 'Desk Upp',
    description: 'Control your desk with this app',
    theme_color: '#24126a',
    background_color: '#24126a',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    icons: [
        {
            src: '/assets/pwa/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/assets/pwa/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        },
        {
            src: '/assets/pwa/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
        },
    ],
});



createApp(App).mount('#app');

