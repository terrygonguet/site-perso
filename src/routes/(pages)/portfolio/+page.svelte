<script lang="ts">
	import { LL } from "$i18n"
	import Calibron from "./Calibron.svelte"
	import Gapsmoov from "./Gapsmoov.svelte"
	import GetMunch from "./GetMunch.svelte"
	import Multisweeper from "./Multisweeper.svelte"
	import Naga from "./Naga.svelte"
	import RepairCafe from "./RepairCafe.svelte"
	import Sokoban from "./Sokoban.svelte"
	import Solitaire from "./Solitaire.svelte"
	import Vitruvius from "./Vitruvius.svelte"
	import Webcells from "./Webcells.svelte"
	import WebExts from "./WebExts.svelte"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.portfolio())}</title>
</svelte:head>

<div id="portfolio" class="max-w-prose m-auto grid gap-8 text-lg text-justify">
	<div class="heading">
		<h2>{$LL.portfolio.headings.pro()}</h2>
		<h3>{$LL.portfolio.subtitles.pro()}</h3>
	</div>

	<Gapsmoov />
	<GetMunch />

	<div class="heading">
		<h2>{$LL.portfolio.headings.volonteer()}</h2>
		<h3>{$LL.portfolio.subtitles.volonteer()}</h3>
	</div>

	<RepairCafe />
	<WebExts />

	<div class="heading">
		<h2>{$LL.portfolio.headings.experiments()}</h2>
		<h3>{$LL.portfolio.subtitles.experiments()}</h3>
	</div>

	<Webcells />
	<Sokoban />
	<Multisweeper />
	<Vitruvius />
	<Calibron />
	<Naga />
	<Solitaire />
</div>

<style lang="postcss">
	.heading {
		@apply grid gap-2;
	}
	.heading h2 {
		@apply text-5xl text-center mt-8 border-b border-current p-3 w-4/5 mx-auto;
	}
	.heading h3 {
		@apply text-xl text-center text-stone-500;
	}

	#portfolio :global(section h3) {
		@apply text-xl font-bold;
	}
	#portfolio :global(section .bordered) {
		@apply border border-stone-500;
	}
	:global(.dark) #portfolio :global(section .bordered) {
		@apply border-none;
	}
	#portfolio :global(section p) {
		@apply my-3;
	}

	@screen lg {
		#portfolio :global(section .left) {
			@apply w-1/3 float-left mt-2 mr-4;
		}
		#portfolio :global(section .right) {
			@apply w-1/3 float-right mt-2 ml-4;
		}
	}
</style>
