import { LL, locale, setLocale as _set } from "$i18n/i18n-svelte"
import type { Locales } from "$i18n/i18n-types"
import { detectLocale } from "$i18n/i18n-util"
import { loadLocaleAsync } from "$i18n/i18n-util.async"
import { onMount } from "svelte"
import { localStorageDetector, navigatorDetector } from "typesafe-i18n/detectors"

export async function initI18n() {
	onMount(() => {
		const detectedLocale = detectLocale(localStorageDetector, navigatorDetector)
		setLocale(detectedLocale)
	})
}

export async function setLocale(locale: Locales) {
	await loadLocaleAsync(locale)
	_set(locale)
	localStorage.setItem("lang", locale)
	return LL
}

export { LL, locale }
