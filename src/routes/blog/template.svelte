<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = []
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - title</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">title</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2020-01-27"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">This post is a work in progress...</p>
		<Back />
		{#if dev}
			<a href="editor?blog=template" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
