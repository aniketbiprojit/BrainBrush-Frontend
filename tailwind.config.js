module.exports = {
	purge: ['./components/modules/**/*.{js,ts,jsx,tsx}', './components/layouts/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1D3557',
					dark: '#457B9D',
					light: '#A8DADC',
					highlight: '#ABDADC',
				},
				secondary: {
					DEFAULT: '#0496FF',
					dark: '#0496FF',
					light: '#FE6D73',
					highlight: '#FFC327',
				},
				white: {
					DEFAULT: '#EAEAEA',
					light: '#fff',
				},
				black: '#000',
				grey: '#333',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
