<script lang="ts">
	import Toggle from "svelte-toggle"
	import { LL, locale, setLocale } from "$i18n"

	function onToggle(e: CustomEvent<boolean>) {
		setLocale(e.detail ? "fr" : "en")
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label id="toggle-locale" class="flex gap-2 items-center">
	English
	<Toggle
		toggled={$locale == "fr"}
		on:toggle={onToggle}
		hideLabel
		label={$LL.locale.toggleLabel()}
		switchColor="var(--color-nub)"
		toggledColor="var(--color-dark)"
		untoggledColor="var(--color-light)"
	/>
	Français
</label>

<style lang="postcss">
	#toggle-locale {
		@apply cursor-pointer;
		--color-dark: theme("colors.orange.500");
		--color-light: theme("colors.orange.500");
		--color-nub: theme("colors.stone.100");
	}
	:is(.dark #toggle-locale) {
		--color-dark: theme("colors.amber.700");
		--color-light: theme("colors.amber.700");
		--color-nub: theme("colors.stone.400");
	}
</style>
