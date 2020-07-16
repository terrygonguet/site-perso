<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["cv","studies","school"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - DUT INFO</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">DUT INFO</h1>
		<h3 class="text-accent-light text-base">2014-2016</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">As soon as I had the opportunity to I steered my studies towards computers and programming. So after Lycée I spent 2 years in Université Savoie Mt Blanc in Annecy for a DUT INFO.</p><p class="my-4">These years were probably the most efficiently I ever learned in a school environment and people there were amazing! I still talk every day with friends I made then. I don't want to disparage IT Tallaght but this university offered a much better education in the same time frame (and this was confirmed to me by people in Ireland who did their first 2 years there).</p><p class="my-4"><a href="img/xl/dut.jpg" target="_blank" class="a">Here</a> is the diploma.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=dut-info" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
