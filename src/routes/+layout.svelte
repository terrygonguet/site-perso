<script>
	import "../app.postcss"
	import { initI18n } from "$i18n"
	import { initDarkMode } from "$lib/darkMode"

	initI18n()
	initDarkMode()
</script>

<div id="root" class="grid grid-cols-1 grid-rows-1 min-h-screen">
	<slot />
</div>

<style lang="postcss">
	:global(#root > main) {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
</style>
