<script lang="ts">
	import Toggle from "svelte-toggle"
	import { LL } from "$i18n"
	import { mode } from "$lib/darkMode"
</script>

<main class="flex flex-col justify-evenly items-center p-4">
	<div class="flex flex-col gap-4 items-center">
		<h1 class="text-4xl md:text-6xl font-bold">Terry Gonguet</h1>
		<h2 class="text-xl md:text-2xl text-stone-800 dark:text-stone-300">Web developer</h2>
	</div>
	<nav class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
		<a class="bloc" href="/about">About me</a>
		<a class="bloc" href="/cv">CV</a>
		<a class="bloc" href="/experiments">Experiments</a>
		<a class="bloc" href="/blog">Blog</a>
	</nav>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="flex gap-1 items-center p-4">
		<Toggle
			toggled={$mode == "dark"}
			on:toggle={e => mode.set(e.detail ? "dark" : "light")}
			hideLabel
			label="Mode"
			on="Dark"
			off="Light"
			switchColor="var(--color-nub)"
			toggledColor="var(--color-dark)"
			untoggledColor="var(--color-light)"
		/>
		mode
	</label>
</main>

<style lang="postcss">
	.bloc {
		@apply aspect-square bg-stone-200 p-4 grid place-items-center text-2xl duration-200;
		transition-property: transform, background-color;
	}
	.bloc:hover {
		@apply scale-105 bg-stone-100;
	}
	:is(.dark .bloc) {
		@apply bg-stone-700;
	}
	:is(.dark .bloc:hover) {
		@apply bg-stone-600;
	}

	label {
		@apply cursor-pointer;
		--color-dark: theme("colors.stone.700");
		--color-light: theme("colors.stone.200");
		--color-nub: theme("colors.stone.400");
	}
</style>
