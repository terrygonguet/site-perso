/// <reference types="unplugin-icons/types/svelte" />

declare module "*&imgtools" {
	const out
	export default out
}

declare namespace App {
	// interface Error {}
	interface Locals {
		locale: import("$i18n/i18n-types").Locales
	}
	// interface PageData {}
	// interface Platform {}
}
