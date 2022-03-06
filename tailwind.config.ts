import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    extract: {
        include: ['./public/**/*.html', './src/**/*.{vue, ts}']
    },
    darkMode: false, // or 'media' or 'class',
    safelist: [
        'bg-info',
        'border-info',
        'bg-warning',
        'border-warning',
        'bg-success',
        'border-success',
        'bg-error',
        'border-error'
    ],
    theme: {
        colors: {
            purple: '#24126A',
            'dark-gray': '#111',
            'dark-purple': '#453BA9',
            'light-purple': '#BCBEFF',
            'lighter-purple': '#E9E9FD',
            'light-blue': '#B9BBFD',
            gray: '#333',
            white: '#FFFFFF',
            green: '#5FEFC0',
            success: '#5FEFC0',
            error: '#FF5F5F',
            warning: '#FF9D00',
            info: '#5DAEFF',
            'transparent-white': 'rgba(255,255,255,0.08)',
            transparent: 'transparent',
            danger: '#F87171',
        },
        minWidth: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
        extend: {},
    },
    plugins: [],
});
