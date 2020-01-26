const webpack = require("webpack");
const path = require("path");
const config = require("sapper/config/webpack.js");
const pkg = require("./package.json");
const PurgeCSS = require("@fullhuman/postcss-purgecss");
const CompressionPlugin = require("compression-webpack-plugin");
const fs = require("fs");
const postcss = require("postcss");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const alias = { svelte: path.resolve("node_modules", "svelte") };
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];

const purgeCSSPlugin = PurgeCSS({
	content: ["./src/**/*.svelte", "./src/template.html"],
	fontFace: true,
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
	extractors: [
		{
			extractor: require("purgecss-from-svelte"),
			extensions: ["svelte"]
		}
	]
});

const shimTailwind = async ({ content, filename }) => {
	if (filename.endsWith("_layout.svelte")) {
		let source = await new Promise((resolve, reject) => {
			fs.readFile("src/global.css", (err, data) => {
				if (err) reject(err);
				else resolve(data.toString());
			});
		});
		let plugins = [
			require("tailwindcss"),
			require("autoprefixer"),
			require("postcss-discard-comments")({ removeAll: true }),
			!dev && purgeCSSPlugin,
			!dev && require("cssnano")()
		].filter(Boolean);

		// compile css
		let { css } = await postcss(plugins).process(source, {
			from: "src/global.css",
			to: "global.css"
		});
		// "globalize" the selectors
		css = css
			.replace(/\s/g, "")
			.replace(/([a-zA-Z\[\]:\d,="\-.\\/*_]+?)(?={)/g, `:global($1)`);

		let code = content.replace("/* shimport css */", css);

		return {
			code,
			dependencies: [path.join(__dirname, "src/global.css")]
		};
	}
};

module.exports = {
	client: {
		entry: config.client.entry(),
		output: config.client.output(),
		resolve: { alias, extensions, mainFields },
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: "svelte-loader",
						options: {
							dev,
							hydratable: true,
							preprocess: {
								style: shimTailwind
							}
						}
					}
				}
			]
		},
		mode,
		plugins: [
			new webpack.DefinePlugin({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			!dev && new CompressionPlugin(),
			!dev &&
				new CompressionPlugin({
					filename: "[path].br[query]",
					algorithm: "brotliCompress",
					test: /\.(js|css|html|svg)$/,
					compressionOptions: { level: 11 },
					threshold: 10240,
					minRatio: 0.8,
					deleteOriginalAssets: false
				})
		].filter(Boolean),
		devtool: dev && "inline-source-map"
	},

	server: {
		entry: config.server.entry(),
		output: config.server.output(),
		target: "node",
		resolve: { alias, extensions, mainFields },
		externals: Object.keys(pkg.dependencies).concat("encoding"),
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: "svelte-loader",
						options: {
							css: false,
							generate: "ssr",
							dev,
							preprocess: {
								style: shimTailwind
							}
						}
					}
				}
			]
		},
		mode: process.env.NODE_ENV,
		performance: {
			hints: false // it doesn't matter if server.js is large
		}
	},

	serviceworker: {
		entry: config.serviceworker.entry(),
		output: config.serviceworker.output(),
		mode: process.env.NODE_ENV
	}
};
