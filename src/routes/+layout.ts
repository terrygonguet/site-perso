import { SvelteI18N } from "@terrygonguet/svelte-i18n"
import type { I18NAutocomplete } from "@apptypes"

export const load = async ({ fetch, data }) => {
	const i18n = new SvelteI18N<I18NAutocomplete>({ ...data, fetch })
	return { i18n, t: i18n.t.bind(i18n), c: i18n.c.bind(i18n) }
}
