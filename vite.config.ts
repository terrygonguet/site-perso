import tailwindcss from "@tailwindcss/vite"
import icons from "unplugin-icons/vite"
import { plugin as markdown, Mode } from "vite-plugin-markdown"
import { config as markdownConfig } from "./markdown.config.ts"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, import.meta.dirname, "")

	return {
		plugins: [
			tailwindcss(),
			markdown({
				mode: [Mode.HTML],
				markdownIt: markdownConfig,
			}),
			enhancedImages(),
			sveltekit(),
			icons({ compiler: "svelte" }),
		],
		server: {
			port: parseInt(env.PORT!),
		},
	}
})
