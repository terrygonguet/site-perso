<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["studies","school","cv","entrepreneur","development"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - D2E</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">D2E</h1>
		<h3 class="text-accent-light text-base">2019 to now</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">A friend told me about this unusual course we could do where we basically try to setup a company and get help from the university of Lyon 3 with classes and mentors. Because I always wanted to be my own boss and work on what I want the three of us applied (my friend, one of his friends and me) and got in!</p>  <p class="my-4">So since September 2019 we're trying to get <a href="https://interestingby.design" target="_blank" class="a">IBD</a> off the ground, providing custom websites for any possible needs.</p>  <p class="my-4">I'll have more to say about the adventure when it is properly finished (and hopefully our partnership isn't).</p>
		<Back />
		{#if dev}
			<a href="editor?blog=d2e" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
