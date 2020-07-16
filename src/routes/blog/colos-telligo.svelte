<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["summer camp","kids","work","cv"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Telligo and summer camps</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Telligo and summer camps</h1>
		<h3 class="text-accent-light text-base">April and August 2019</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">As I mentionned in another blog post, <a href="blog/i-like-teaching" class="a" rel="prefetch">I really like teaching</a>. However I'm very much introverted so hearing that I did two summer camps (not necessarily in the summer) as an animator might be surprising. It was for me and I did it! I heared about <a href="https://www.telligo.fr/" target="_blank" class="a">Telligo</a> from a friend and managed to get hired for an 8 day camp, Game Develpment themed.</p><p class="my-4">As expected from a workforce composed entirely of young underpaid people, we worked much more and longer than is healthy or reasonable (I swear there is a inverse correlation between the amount you pay young people and the work they output). I also managed to catch both the flu and diarrhea in there and there was a few days that were <a href="https://en.wikipedia.org/wiki/Understatement" target="_blank" class="a">sub-par</a>.</p><p class="my-4">I really enjoyed the game dev part however. I was the <a href="https://unity.com/" target="_blank" class="a">Unity</a> specialist in both camps and helped a few kids to make prototypes for 3D games. Because they were pretty young I did all of the programming but I tried to do it in front of them while explaining what I was doing to hopefully plant the first seed of the programmer's logic in their young minds.</p><p class="my-4">Of course we didn't do only game dev, only in the mornings and not every day and did other activities I was much less good at. All in all it is a really good experience that taught me a lot of things I wasn't always ready for, I won't try to list them here because it's some of those things you have to learn by yourself. I probably will never do anything like that ever again because I value my freedom to sleep more than 5 hours per day at more than 30€/day but I don't regret doing it.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=colos-telligo" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
