import type { AutoI18N } from "@terrygonguet/auto-i18n"
import type { Translations as GeneralTranslations } from "@translations/en/general"
import type { Translations as HomeTranslations } from "@translations/en/home"

export type I18NAutocomplete = {
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
			i18n: AutoI18N<I18NAutocomplete>
			t: AutoI18N<I18NAutocomplete>["translate"]
			c: AutoI18N<I18NAutocomplete>["content"]
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
