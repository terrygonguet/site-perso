<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["teaching","learning","kids","young","helping"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - I like teaching</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">I like teaching</h1>
		<h3 class="text-accent-light text-base">2016 till now</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">The original title of this post was "I like teaching kids" but the longer I think about it the more I realise that I don't only like teaching to kids but to anyone willing to learn. The first real experience I had with teaching was volonteering for <a href="https://coderdojo.com/" target="_blank" class="a">CoderDojo</a>. I was in charge of teaching a beginner's JavaScript class to young children for 2 hours every saturday in the University in Ireland where I studied for 2 years. The organisation was sub-par and some kids were clearly too young but I learned a lot doing this.</p><p class="my-4">Fast forward 2 years and I am now spending 4.5 hours per week helping kids from 14 to 18 (in relatively homogenous age groups) with their homework and classes. Some hours are paid, some are volonteering and it's the best work I've ever had and would love to do more (work as in "calssic" work, I still want to do programming for my carreer).</p><p class="my-4">There is something incredibly rewarding about helping people wrap their heads around ideas that they didn't understand before, to instill that "got it!" moment. It sometimes feels like a puzzle where I don't know its exact shape but I have to keep trying to reformulate, draw, use examples or change approaches to help the ideas "fit" into place in someone's head.</p><p class="my-4">Perhaps not unrelated is my life long passion for learning new things. I just love to learn anything about almost everything (sorry accounting but you're not for me...) and especially if it can help me in my work. The Internet makes satisfying my appetite for knowledge wonderfully easy and fun. It's one of the best things about the modern world in my opinion. It's sad to see that the newest generations sometimes don't seem to realise the treasures at their disposition...</p>
		<Back />
		{#if dev}
			<a href="editor?blog=i-like-teaching" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
