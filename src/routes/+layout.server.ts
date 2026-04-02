import { FALLBACK_LANG, SUPPORTED_LANGS } from "$lib/server/env"
import { setSSRLang } from "$lib/server/i18n.js"

export const load = async ({ cookies, request, locals }) => {
	const override = cookies.get("override-lang")
	if (override) {
		locals.lang = override
		return setSSRLang(request, override)
	}

	const accepted = request.headers.get("Accept-Language")?.split(",") ?? []
	for (const candidate of accepted) {
		const [lang] = candidate.split(";")
		if (SUPPORTED_LANGS.includes(lang)) {
			locals.lang = lang
			return setSSRLang(request, lang)
		}
	}

	locals.lang = FALLBACK_LANG
	return setSSRLang(request, FALLBACK_LANG)
}
