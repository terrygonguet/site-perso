import { AutoI18N } from "@terrygonguet/auto-i18n"
import type { I18NAutocomplete } from "@apptypes"

export const load = async ({ fetch, data: { lang, supportedLangs, fallbackLang } }) => {
	const i18n = new AutoI18N<I18NAutocomplete>({ lang, supportedLangs, fallbackLang, fetch })
	return { i18n, t: i18n.t.bind(i18n), c: i18n.c.bind(i18n) }
}
