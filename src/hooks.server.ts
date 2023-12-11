import { detectLocale, i18n } from "$i18n/i18n-util"
import { loadAllLocales } from "$i18n/i18n-util.sync"
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors"

loadAllLocales()
const L = i18n()

export async function handle({ resolve, event }) {
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(event.request)
	const locale = detectLocale(acceptLanguageDetector)

	event.locals.locale = locale

	return resolve(event, {
		transformPageChunk({ html }) {
			return html.replace("%lang%", locale)
		},
	})
}
