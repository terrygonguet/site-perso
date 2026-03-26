import { safe } from "@terrygonguet/utils/result"
import * as default_module from "./content_en.md"

export const load = async ({ parent, depends }) => {
	const { i18n } = await parent()
	depends("content:about")
	return safe(() => import(`./content_${i18n.lang}.md`))
		.recover(() => default_module)
		.andThen((module: typeof import("*.md")) => ({ content: module.html }))
		.unwrap()
}
