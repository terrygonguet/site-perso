<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["entrepreneur","work","development","websites","IBD","cv"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Let's be an entrepreneur!</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Let's be an entrepreneur!</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2019-09-12"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">I always wanted to be my own boss. I guess everybody kind of does after having had a boss for long enough but I knew even before getting into the working world. After finishing my studies I thought I had the skills and the drive necessary to be self-employed at least, even if there were parts of it that I dreaded (like custommer acquisition). However after a while of struggling in my little corner of France I tried another approach.</p>  <p class="my-4">If I couldn't do it alone, surely I could complement someone else's skillset well enough to permit both of us to live from our work, right? And so I partnered with two other friends to form <a href="https://interestingby.design" target="_blank" class="a">Interesting By Design</a> and tried to do just that. We're still in the middle of that experiment but I learned a lot about myself already.</p>  <p class="my-4">As much as I think I want to be self-employed I <em>cannot for the life of me</em> do custommer acquisition. It is just not an option for it to be part of my work. Thankfully my other 2 partners are pretty good at it compared to me and I make up my lack of involvement on certain sides of the business with technical skill.</p>  <p class="my-4">I will likely have more to say about this when the experiment is done and will make a blog post about it.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=lets-be-entrepreneur" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
