/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Mulish', 'sans-serif'],
            },
            colors: {
                'dark-blue': '#1C2852',
                'dark-pink': '#A30062',
                'light-pink': '#C2ADC2',
            },
        },
    },
    plugins: [],
};
