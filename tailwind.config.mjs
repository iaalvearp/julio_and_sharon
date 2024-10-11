import animated from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'athelas': 'athelas',
			'avenir': 'avenir',
			'sweet': 'sweet'
		},
		colors: {
			'primary': '#3D4439',
			'text': '#EEE2D2',
			'accent': '#B45E30',
			'bg': '#F9F3E9',
			'pink': '#F4DEBE'
		}
	},
	plugins: [animated],
}
