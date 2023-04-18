/** @type {import("tailwindcss").Config} */
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",

	theme: {
		extend: {
			maxWidth: {
				prose: "80ch",
			},
		},
	},

	plugins: [],
}

module.exports = config
