import { createSvelteI18NServerBundle } from "@terrygonguet/svelte-i18n/server"

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

const { handle, fetchAll, fetchCategory } = createSvelteI18NServerBundle({
	fetchData({ where }) {
		const value: Translations = {}
		for (const [lang, categories] of Object.entries(translations)) {
			if (where.langs == "all" || where.langs.includes(lang)) {
				value[lang] ??= {}
				for (const [category, pairs] of Object.entries(categories)) {
					if (where.categories == "all" || where.categories.includes(category)) value[lang][category] = pairs
				}
			}
		}
		return value
	},
	getLang(event) {
		return event.locals.lang ?? "en"
	},
})

export { handle as i18nHandle, fetchAll as i18nFetchAll, fetchCategory as i18nFetchCategory }
