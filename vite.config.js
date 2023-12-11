import { sveltekit } from "@sveltejs/kit/vite"
import autoImport from "sveltekit-autoimport"
import Icons from "unplugin-icons/vite"
import { imagetools } from "vite-imagetools"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		autoImport({
			components: ["./src/lib/globals"],
			module: {
				svelte: ["onMount", "createEventDispatcher"],
			},
		}),
		sveltekit(),
		imagetools(),
		Icons({ compiler: "svelte", defaultStyle: "display:inline" }),
	],
}

export default config
