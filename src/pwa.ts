// @ts-ignore
import { registerSW } from 'virtual:pwa-register';

registerSW({
    name: 'WebP Cloud',
    short_name: 'WebPCloud',
    description: 'WebP Cloud allows to convert all your images like JPG, PNG, JPEG, HEIC or GIF to webp or PDF and save a lot of space without losing quality.',
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

