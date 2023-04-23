<script>
	import "../app.postcss"
	import { initI18n } from "$i18n"
	import { initDarkMode } from "$lib/darkMode"

	initI18n()
	initDarkMode()
</script>

<slot />
