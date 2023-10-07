/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
// TODO: Add daisy UI https://dev.to/kunalukey/how-to-add-dark-mode-toggle-in-reactjs-tailwindcss-daisyui-1af9
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,astro}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				anchorImage:
					'linear-gradient(var(--anchor-color),var(--anchor-color))',
				primaryImage:
					'linear-gradient(var(--primary-color),var(--primary-color))',
				zincImage: 'linear-gradient(rgb(244 244 245),rgb(244 244 245))',
			},
			colors: {
				anchor: 'var(--anchor-color)',
				['dark-primary-light']: '#51437a',
				['dark-primary-200']: '#261c46',
				['dark-primary-300']: '#120a25',
			},
			transitionProperty: {
				form: 'border-bottom, box-shadow',
			},
			translate: ['dark'],
		},
		fontFamily: {
			montserrat: ['Montserrat', 'ui-sans-serif'],
			blackOpsOne: ['"Black Ops One"'],
		},
	},
	daisyui: {
		themes: ['light', 'dark'],
	},
	plugins: [require('daisyui')],
};
