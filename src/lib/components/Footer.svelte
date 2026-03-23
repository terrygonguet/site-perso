<script lang="ts">
	import { page } from "$app/state"
	import Copyright from "$lib/components/Copyright.svelte"
	import ToggleLang from "$lib/components/ToggleLang.svelte"
	import ToggleMode from "$lib/components/ToggleTheme.svelte"
	import Home from "virtual:icons/ri/home-2-fill"

	let { t } = $derived(page.data)
</script>

<footer class="flex flex-col items-center gap-4 p-4 print:hidden">
	<div class="flex flex-col items-center justify-evenly gap-4 self-stretch md:flex-row">
		<a href="/" class="anchor flex items-center gap-2 text-lg md:order-2">
			<Home />
			{@html t("general", "footer_home")}
		</a>
		<ToggleLang class="md:order-1" />
		<ToggleMode class="md:order-3" />
	</div>
	<Copyright />
</footer>
