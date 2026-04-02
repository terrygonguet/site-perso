import adapter from "@sveltejs/adapter-node"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			"@appcss": "./src/routes/app.css",
			"@apptypes": "./src/app.d.ts",
			"@routes/*": "./src/routes/*",
			"@translations/*": "./src/translations/*",
		},
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => (filename.includes("node_modules") ? undefined : { runes: true }),
	},
}

export default config
