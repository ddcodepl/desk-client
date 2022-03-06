import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {VitePWA} from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        // https: true,
        host: '0.0.0.0'
    },
    publicDir: './public',
    plugins: [
        vue(),
        WindiCSS(),
        VitePWA({
            manifest: {
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
            },

        })
    ]
});
