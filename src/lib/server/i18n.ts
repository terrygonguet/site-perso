import { FALLBACK_LANG, SUPPORTED_LANGS } from "$lib/server/env"
import { createSvelteI18NHandle } from "@terrygonguet/svelte-i18n/server"

interface Translations {
	[lang: string]: {
		[category: string]: {
			[key: string]: string
		}
	}
}

const translation_modules = import.meta.glob<true, string, { translations: Record<string, string> }>(
	"@translations/**/*.ts",
	{
		eager: true,
	},
)
const path_regexp = /.*\/(?<lang>.*)\/(?<category>.*)\.ts$/

const translations: Translations = {}
for (const [path, module] of Object.entries(translation_modules)) {
	const match = path_regexp.exec(path)
	if (!match?.groups) continue
	const { lang, category } = match.groups
	translations[lang] ??= {}
	translations[lang][category] = module.translations
}

export const i18nHandle = createSvelteI18NHandle({
	supportedLangs: SUPPORTED_LANGS,
	fallbackLang: FALLBACK_LANG,

	fetchCategory({ where: { lang, category } }) {
		return translations[lang]?.[category]
	},
	fetchAll({ where }) {
		const value: Translations = {}
		for (const [lang, categories] of Object.entries(translations)) {
			if (where.langs && !where.langs.includes(lang)) continue
			value[lang] ??= {}
			for (const [category, pairs] of Object.entries(categories)) {
				if (where.categories && !where.categories.includes(category)) continue
				value[lang][category] = pairs
			}
		}
		return value
	},
	update() {},
	canUpdate() {
		return false
	},
})
