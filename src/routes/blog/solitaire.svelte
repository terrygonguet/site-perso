<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["game","project","development","vue"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Solitaire</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Solitaire</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2018-10-28"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">I don't remember why I started making a solitaire, it just kind of happened. I think I was wondering how easy it would be to make a game with a "modern" front-end framework like <a href="https://vuejs.org/" target="_blank" class="a">VueJS</a> and came across a nice playing cards spritesheet. According to the <a href="https://github.com/terrygonguet/solitaire" target="_blank" class="a">Github repo</a> of the project it took me about 4 days of coding over an 8 days period, of wich I only remember sitting in Discord with 2 friends complaining that the game was unsolvable too often yet still playing it for like 3 hours. It was a small throwaway project but I'm pretty proud of the result (especially those 3 hours bug testing with friends and making the game easier).</p><p class="my-4">I am aware that it migh not respect all the rules that you are used to with your solitaire but it doesn't really matter. Here's what it looks like if you can't or don't want to <a href="https://terry.gonguet.com/solitaire" target="_blank" class="a">try it</a>.</p><picture>  <source srcset="img/sm/solitaire.webp 500w, img/md/solitaire.webp" type="image/webp" />  <source srcset="img/sm/solitaire.jpg 500w" type="image/jpg" />  <source srcset="img/md/solitaire.png" type="image/png" />  <img src="img/md/solitaire.png" alt="A screenshot of my solitaire game" class="m-auto"/></picture>
		<Back />
		{#if dev}
			<a href="editor?blog=solitaire" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
