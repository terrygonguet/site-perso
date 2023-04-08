import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter({ precompress: true }),
	},
}

export default config
