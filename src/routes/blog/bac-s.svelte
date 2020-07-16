<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["cv","studies","school"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - BAC S</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">BAC S</h1>
		<h3 class="text-accent-light text-base">2014</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">I knew really early in school that I was made for the more scientific subjects and so I earned a BAC S (specialized in physics) at the Lycée Mme de Staël in St Julien en Genevois.</p><p class="my-4">The most technical thing we did computer-wise during the 3 years was programming scientific calculators and I took the opportunity to make games on said calculators. I'm not ashamed of my minesweeper from these days.</p><p class="my-4">If I manage to find it, my diploma will be available <a href="img/xl/bac.jpg" target="_blank" class="a">here</a>.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=bac-s" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
