import "unplugin-icons/types/svelte"
import type { SvelteI18N } from "@terrygonguet/svelte-i18n"
import type { Translations as AboutTranslations } from "@translations/en/about"
import type { Translations as GeneralTranslations } from "@translations/en/general"
import type { Translations as HomeTranslations } from "@translations/en/home"

export type I18NAutocomplete = {
	about: keyof AboutTranslations
	general: keyof GeneralTranslations
	home: keyof HomeTranslations
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string
		}
		interface PageData {
			i18n: SvelteI18N<I18NAutocomplete>
			t: SvelteI18N<I18NAutocomplete>["translate"]
			c: SvelteI18N<I18NAutocomplete>["content"]
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
