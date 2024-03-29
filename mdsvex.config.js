import { defineMDSveXConfig as defineConfig } from "mdsvex"

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	// layout: {
	// 	about: "src/layouts/About.svelte",
	// },

	smartypants: {
		dashes: "oldschool",
	},

	remarkPlugins: [],
	rehypePlugins: [],
})

export default config
