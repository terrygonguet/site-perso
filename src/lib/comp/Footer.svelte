<script lang="ts">
	import { LL } from "$i18n"
	import ToggleLocale from "$lib/comp/ToggleLocale.svelte"
	import ToggleMode from "$lib/comp/ToggleMode.svelte"
	import Home from "~icons/ri/home-2-fill"
</script>

<footer class="p-4 flex flex-col items-center gap-4">
	<A href="/" class="flex items-center gap-2 text-lg"
		><Home aria-label={$LL.footer.altHome()} />{$LL.footer.home()}</A
	>
	<ToggleLocale />
	<ToggleMode />
</footer>
