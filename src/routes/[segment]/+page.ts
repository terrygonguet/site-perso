import { error } from "@sveltejs/kit"
import { safe } from "@terrygonguet/utils/result"

export const load = async ({ parent, depends, params: { segment = "unknown" } }) => {
	const { i18n } = await parent()
	depends(`content:${segment}`)

	const { value: data } = await safe(() => import(`./${segment}/${i18n.lang}.md`))
		.recover(() => import(`./${segment}/en.md`))
		.andThen((module: typeof import("*.md")) => ({
			content: module.html,
			title: module.attributes.title as string | undefined,
		}))
		.asObject()

	if (data) return data
	else error(404, "Not Found")
}
