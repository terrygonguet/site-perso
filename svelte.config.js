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
		experimental: {
			remoteFunctions: true,
		},
	},
	compilerOptions: {
		experimental: {
			async: true,
		},
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename, compileOptions }) =>
			filename.includes("node_modules") ? undefined : { ...compileOptions, runes: true },
	},
}

export default config
