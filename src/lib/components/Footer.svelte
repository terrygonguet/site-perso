<script lang="ts">
	import { page } from "$app/state"
	import Copyright from "$lib/components/Copyright.svelte"
	import ToggleLocale from "$lib/components/ToggleLocale.svelte"
	import ToggleMode from "$lib/components/ToggleTheme.svelte"
	// import Home from "~icons/ri/home-2-fill"

	let { t } = $derived(page.data)
</script>

<footer class="flex flex-col items-center gap-4 print:hidden">
	<a href="/" class="flex items-center gap-2 text-lg">
		<!-- <Home aria-label={t("footer", "altHome")} /> -->
		{@html t("general", "footer_home")}
	</a>
	<ToggleLocale />
	<ToggleMode />
	<Copyright />
</footer>
