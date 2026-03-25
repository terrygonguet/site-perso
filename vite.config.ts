import tailwindcss from "@tailwindcss/vite"
import devtoolsJson from "vite-plugin-devtools-json"
import icons from "unplugin-icons/vite"
import { plugin as markdown, Mode } from "vite-plugin-markdown"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [tailwindcss(), markdown({ mode: [Mode.HTML] }), sveltekit(), icons({ compiler: "svelte" }), devtoolsJson()],
	server: {
		port: parseInt(process.env.PORT ?? "7381"),
	},
})
