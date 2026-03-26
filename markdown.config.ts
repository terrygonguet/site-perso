import markdownIt, { type PluginSimple } from "markdown-it"

const auto_blank: PluginSimple = function (md) {
	const defaultRenderer = md.renderer.rules.link_open
	md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
		const token = tokens[idx]
		if (token.attrGet("href")?.startsWith("http")) token.attrSet("target", "_blank")
		return defaultRenderer?.(tokens, idx, options, env, self) ?? self.renderToken(tokens, idx, options)
	}
}

export const config = markdownIt({ html: true, linkify: true, typographer: true }).use(auto_blank)
