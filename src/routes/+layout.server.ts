import { FALLBACK_LANG, SUPPORTED_LANGS } from "$lib/server/env"

export const load = async ({ cookies, request, locals }) => {
	const override = cookies.get("override-lang")
	if (override) {
		locals.lang = override
		return { lang: override, supportedLangs: SUPPORTED_LANGS, fallbackLang: FALLBACK_LANG }
	}

	const accepted = request.headers.get("Accept-Language")?.split(",") ?? []
	for (const candidate of accepted) {
		const [lang] = candidate.split(";")
		if (SUPPORTED_LANGS.includes(lang)) {
			locals.lang = lang
			return { lang, supportedLangs: SUPPORTED_LANGS, fallbackLang: FALLBACK_LANG }
		}
	}

	locals.lang = FALLBACK_LANG
	return { lang: FALLBACK_LANG, supportedLangs: SUPPORTED_LANGS, fallbackLang: FALLBACK_LANG }
}
