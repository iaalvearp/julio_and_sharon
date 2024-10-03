/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'brand': 'athelas',
			'against': 'avenir',
			'montse': 'sweet'
		},
		colors: {
			'primary': '#',
			'text': '#',
			'bg': '#'
		}
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
