module.exports = {
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1D3557',
					dark: '#457B9D',
					light: '#A8DADC',
				},
				secondary: {
					DEFAULT: '#0496FF',
					dark: '#0496FF',
					light: '#0496FF',
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
