import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import preprocess from "svelte-preprocess"
import adapterStatic from "@sveltejs/adapter-static"
import adapterAuto from "@sveltejs/adapter-auto"
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
		adapter:
			process.env.ADAPTER == "static" ? adapterStatic({ precompress: true }) : adapterAuto(),
		alias: {
			$i18n: "src/i18n/index.ts",
			"$i18n/*": "src/i18n/*",
		},
	},
}

export default config
