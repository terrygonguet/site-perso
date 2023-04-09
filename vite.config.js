import { sveltekit } from "@sveltejs/kit/vite"
import autoImport from "sveltekit-autoimport"
import Icons from "unplugin-icons/vite"

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
		Icons({ compiler: "svelte", autoInstall: true }),
	],
}

export default config
