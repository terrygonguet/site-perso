<script lang="ts">
	import Toggle from "svelte-toggle"
	import { LL } from "$i18n"
	import { mode } from "$lib/darkMode"

	function onToggle(e: CustomEvent<boolean>) {
		mode.set(e.detail ? "dark" : "light")
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label id="toggle-mode" class="flex gap-2 items-center">
	{$LL.mode.light()}
	<Toggle
		toggled={$mode == "dark"}
		on:toggle={onToggle}
		hideLabel
		switchColor="var(--color-nub)"
		toggledColor="var(--color-dark)"
		untoggledColor="var(--color-light)"
	/>
	{$LL.mode.dark()}
</label>

<style lang="postcss">
	#toggle-mode {
		@apply cursor-pointer;
		--color-dark: theme("colors.stone.700");
		--color-light: theme("colors.stone.200");
		--color-nub: theme("colors.stone.400");
	}
</style>
