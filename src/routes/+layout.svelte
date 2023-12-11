<script lang="ts">
	import "../app.postcss"
	import { initI18n } from "$i18n"
	import { initDarkMode } from "$lib/darkMode"
	import { fade } from "svelte/transition"
	import Spinner from "~icons/svg-spinners/3-dots-move"
	import { showLoadingSpinner } from "$lib/stores"

	export let data

	initI18n(data.serverLocale)
	initDarkMode()
</script>

{#if $showLoadingSpinner}
	<main class="grid place-items-center" transition:fade={{ duration: 200 }}>
		<Spinner class="h-16 w-16 text-orange-500 dark:text-amber-600" />
	</main>
{:else}
	<slot />
{/if}
