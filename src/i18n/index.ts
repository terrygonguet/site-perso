import { browser } from "$app/environment"
import { LL, locale, setLocale as _set } from "$i18n/i18n-svelte"
import type { Locales } from "$i18n/i18n-types"
import { detectLocale } from "$i18n/i18n-util"
import { loadLocaleAsync } from "$i18n/i18n-util.async"
import { loadLocale } from "$i18n/i18n-util.sync"
import { onMount } from "svelte"
import { localStorageDetector, navigatorDetector } from "typesafe-i18n/detectors"

export async function initI18n(serverLocale: Locales) {
	if (browser) {
		onMount(() => {
			const detectedLocale = detectLocale(localStorageDetector, navigatorDetector)
			setLocale(detectedLocale)
		})
	} else {
		loadLocale(serverLocale)
		_set(serverLocale)
	}
}

export async function setLocale(locale: Locales) {
	await loadLocaleAsync(locale)
	_set(locale)
	localStorage.setItem("lang", locale)
	return LL
}

export { LL, locale }
