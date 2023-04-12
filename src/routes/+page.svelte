<script lang="ts">
	import ToggleMode from "$lib/comp/ToggleMode.svelte"
	import ToggleLocale from "$lib/comp/ToggleLocale.svelte"
	import { LL } from "$i18n"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.home())}</title>
</svelte:head>

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
		<div
			id="blog"
			class="aspect-square bg-stone-200 dark:bg-stone-700 p-4 grid place-items-center text-2xl relative overflow-hidden"
			style:--label={'"' + $LL.home.wip() + '"'}
		>
			<span>{$LL.home.blog()}</span>
		</div>
	</nav>
	<div class="flex flex-col items-center gap-4 p-4">
		<ToggleLocale />
		<ToggleMode />
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
		@apply transition-transform duration-200 transform;
	}
	.bloc:hover span {
		--tw-scale-x: 0.952381;
		--tw-scale-y: 0.952381;
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
		color: black;
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

	#experiments:hover {
		color: white;
		background-color: #269;
		background-image: linear-gradient(white 2px, transparent 2px),
			linear-gradient(90deg, white 2px, transparent 2px),
			linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
		background-size: 80px 80px, 80px 80px, 16px 16px, 16px 16px;
		background-position: center;
	}

	#blog:after {
		content: var(--label, "WIP");
		@apply absolute flex items-center justify-center w-full h-12 left-0 top-1/2 text-white font-bold bg-yellow-500;
		background-image: repeating-linear-gradient(
			-45deg,
			transparent,
			transparent 2rem,
			black 2rem,
			black 4rem
		);
		transform: translate(-100%, -50%);
		transition: transform 0.2s ease-in-out;
		-webkit-text-stroke: 1px black;
	}
	#blog:hover:after {
		transform: translate(0, -50%);
	}
</style>
