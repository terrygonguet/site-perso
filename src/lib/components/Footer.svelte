<script lang="ts">
	import { page } from "$app/state"
	import Copyright from "$lib/components/Copyright.svelte"
	import LangChanger from "$lib/components/LangChanger.svelte"
	import ToggleTheme from "$lib/components/ToggleTheme.svelte"
	import Home from "virtual:icons/ri/home-2-fill"

	let { t } = $derived(page.data)
</script>

<footer class="flex flex-col items-center gap-4 p-4 print:hidden">
	<div class="flex flex-col items-center justify-evenly gap-4 self-stretch md:flex-row">
		<a href="/" class="anchor flex items-center gap-2 text-lg md:order-2">
			<Home aria-hidden />
			{@html await t("general", "footer_home")}
		</a>
		<LangChanger class="md:order-1" />
		<ToggleTheme class="md:order-3" />
	</div>
	<Copyright />
</footer>
