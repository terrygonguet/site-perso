<script lang="ts">
	import Toggle from "svelte-toggle"
	import { LL, locale, setLocale } from "$i18n"
	import { mode } from "$lib/darkMode"

	function onToggleMode(e: CustomEvent<boolean>) {
		mode.set(e.detail ? "dark" : "light")
	}

	function onToggleLocale(e: CustomEvent<boolean>) {
		setLocale(e.detail ? "fr" : "en")
	}
</script>

<main class="flex flex-col justify-evenly items-center p-4">
	<div class="flex flex-col gap-4 items-center">
		<h1 class="text-4xl md:text-6xl font-bold">Terry Gonguet</h1>
		<h2 class="text-xl md:text-2xl text-amber-600 dark:text-amber-700">
			{$LL.home.jobTitle()}
		</h2>
	</div>
	<nav class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto text-center">
		<a id="about" class="bloc" href="/about">
			<span>{$LL.home.about()}</span>
		</a>
		<a id="cv" class="bloc" href="/cv">
			<span>{$LL.home.cv()}</span>
		</a>
		<a id="experiments" class="bloc" href="/experiments">
			<span>{$LL.home.experiments()}</span>
		</a>
		<a class="bloc" href="/blog">
			<span>{$LL.home.blog()}</span>
		</a>
	</nav>
	<div class="flex flex-col items-center gap-4 p-4">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="toggle-locale" class="flex gap-2 items-center">
			English
			<Toggle
				toggled={$locale == "fr"}
				on:toggle={onToggleLocale}
				hideLabel
				label={$LL.locale.toggleLabel()}
				switchColor="var(--color-nub)"
				toggledColor="var(--color-dark)"
				untoggledColor="var(--color-light)"
			/>
			Français
		</label>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="toggle-mode" class="flex gap-2 items-center">
			{$LL.mode.light()}
			<Toggle
				toggled={$mode == "dark"}
				on:toggle={onToggleMode}
				hideLabel
				switchColor="var(--color-nub)"
				toggledColor="var(--color-dark)"
				untoggledColor="var(--color-light)"
			/>
			{$LL.mode.dark()}
		</label>
	</div>
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
	@screen lg {
		.bloc {
			@apply h-52;
		}
	}
	.bloc span {
		@apply transition-transform duration-200;
	}
	.bloc:hover span {
		@apply scale-95;
	}

	#about:hover {
		color: white;
		background-color: black;
		background-image: radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px),
			radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
			radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
			radial-gradient(
				rgba(255, 255, 255, 0.4),
				rgba(255, 255, 255, 0.1) 2px,
				transparent 30px
			);
		background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%;
		background-position: -25px -40px, 40px 60px, 130px 60px, 70px 100px;
	}

	#cv:hover {
		background-color: #fff;
		background-image: linear-gradient(
				90deg,
				transparent 39px,
				#abced4 39px,
				#abced4 41px,
				transparent 41px
			),
			linear-gradient(#eee 0.1em, transparent 0.1em);
		background-size: 100% 1rem;
	}
	:is(.dark #cv:hover) {
		color: black;
	}

	#experiments:hover {
		color: white;
		background-color: #269;
		background-image: linear-gradient(white 2px, transparent 2px),
			linear-gradient(90deg, white 2px, transparent 2px),
			linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
		background-size: 80px 80px, 80px 80px, 16px 16px, 16px 16px;
		/* background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px; */
		background-position: center;
	}

	#toggle-locale {
		@apply cursor-pointer;
		--color-dark: theme("colors.amber.500");
		--color-light: theme("colors.amber.500");
		--color-nub: theme("colors.stone.100");
	}
	:is(.dark #toggle-locale) {
		--color-dark: theme("colors.amber.800");
		--color-light: theme("colors.amber.800");
		--color-nub: theme("colors.stone.400");
	}

	#toggle-mode {
		@apply cursor-pointer;
		--color-dark: theme("colors.stone.700");
		--color-light: theme("colors.stone.200");
		--color-nub: theme("colors.stone.400");
	}
</style>
