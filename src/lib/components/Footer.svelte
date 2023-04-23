<script lang="ts">
	import { LL } from "$i18n"
	import Copyright from "$lib/components/Copyright.svelte"
	import ToggleLocale from "$lib/components/ToggleLocale.svelte"
	import ToggleMode from "$lib/components/ToggleMode.svelte"
	import Home from "~icons/ri/home-2-fill"
</script>

<footer class="p-4 flex flex-col items-center gap-4">
	<A href="/" class="flex items-center gap-2 text-lg"
		><Home aria-label={$LL.footer.altHome()} />{$LL.footer.home()}</A
	>
	<ToggleLocale />
	<ToggleMode />
	<Copyright />
</footer>
