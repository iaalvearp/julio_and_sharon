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
			'primary': '#3D4439',
			'text': '#EEE2D2',
			'accent': '#B45E30'
		}
	},
	plugins: [
	],
}
