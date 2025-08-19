/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				gradient: {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
			},
			animation: {
				gradient: 'gradient 8s ease infinite',
			},
		},
	},
	plugins: [],
};
