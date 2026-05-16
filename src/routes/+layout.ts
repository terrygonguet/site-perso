import { SvelteI18N } from "@terrygonguet/svelte-i18n"
import type { I18NAutocomplete } from "@apptypes"
import { i18nFetchAll, i18nFetchCategory } from "$lib/i18n.remote"

export const load = async ({ data }) => {
	const i18n = new SvelteI18N<I18NAutocomplete>({
		...data,
		fetchAll: i18nFetchAll,
		fetchCategory: i18nFetchCategory,
		annotations: {
			link(content, args) {
				return `<a href="${args}" ${args?.startsWith("https:") ? 'target="_blank"' : ""} class="anchor">${content}</a>`
			},
		},
	})
	return { i18n, t: i18n.t.bind(i18n), c: i18n.c.bind(i18n) }
}
