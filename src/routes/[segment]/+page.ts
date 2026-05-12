import { dev } from "$app/environment"
import { stringify_error } from "$lib/error.js"
import { error } from "@sveltejs/kit"
import { safe } from "@terrygonguet/utils/result"

export const load = async ({ parent, depends, params: { segment = "unknown" } }) => {
	const { i18n } = await parent()
	depends(`content:${segment}`)

	const [importErr, data] = await safe(() => import(`./${segment}/${i18n.lang}.md`))
		.recover(() => import(`./${segment}/en.md`))
		.andThen((module: typeof import("*.md")) => ({
			content: module.html,
			title: module.attributes.title as string | undefined,
		}))
		.asTuple()

	if (data) return data
	else
		error(404, {
			message: "Not Found",
			code: "not_found",
			cause: dev ? stringify_error(importErr) : undefined,
		})
}
