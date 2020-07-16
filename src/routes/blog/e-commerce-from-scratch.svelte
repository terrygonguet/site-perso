<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["typescript","vue","node","graphql","mongodb","project","stripe","cv"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - So I made an e-commerce website from scratch</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">So I made an e-commerce website from scratch</h1>
		<h3 class="text-accent-light text-base">Summer and Fall 2019</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">Let's get the buzzwords out of the way first: I used Typescript, VueJS, NodeJS, GraphQL, and MongoDB (among other smaller, less hyped tools).</p>  <p class="my-4">One of my Irish friends had this business idea that he was positive was amazing and always wanted to try out. After our studies we got an opportunity to do it thanks to a third friend and we set off to build the MVP, <a href="http://paulgraham.com/ds.html" target="_blank" class="a">Paul Graham style</a>. As the title says, it is an e-commerce website and even though we offered people the option to pay with cash on delivery, we wanted our customers to be able to pay with their card securely and easily so we went with <a href="https://stripe.com/en-fr" target="_blank" class="a">Stripe</a>.</p>  <p class="my-4">I must say, Stripe is probably the best SaaS that I've ever used: everything works, it is just as complex as it has to be but no more, it handles all the critical parts of transactions in a very elegant way and their docs are amazing (even if a bit sprawling sometimes).</p>  <p class="my-4">Being the best programmer of the 3 of us I basically set up the entire system myself from scratch. I'm not entirely sure why I didn't go with an already existing solution, maybe I wanted to prove to myself that I could. I also tend to prefer to build my systems from the ground up as opposed to getting a complete solution and bending it to do what I need afterwards. I do that with video games as well, I tend to not use complete game engines but build my own out of only the pieces I need to keep it lean.</p>  <p class="my-4">The front end is a Vue app written with Typescript. It saves some data to the local storage but most of it comes from and goes to the back end through GraphQL. I wrote most of the components' code but the design was from one of my partners.</p>  <p class="my-4">The back end is a simple Express server that serves the static Vue files and exposes the GraphQL endpoint. Then GraphQL talks to the MongoDB database through the <a href="https://mongoosejs.com/" target="_blank" class="a">Mongoose</a> adapter (that made my life so much easier yet made some requests very slow).</p>  <p class="my-4">For the first few months the project generated an ecouraging amount of revenue and after a hiatus at the end of 2019 we're back at it again. You probably have noticed that I haven't linked to the website yet. The reasons are:</p>  <ul class="list-disc">    <li class="ml-8">The website is purpose made for Dublin and the UX won't make much sense for anyone else</li>    <li class="ml-8">Because we're most likely closed right now you can't access most of the website (we open at 10pm Irish time)</li>    <li class="ml-8">I kinda didn't want anybody to steal our idea...</li>  </ul>  <p class="my-4">But now that you went through this <s>ordeal</s> article <a href="https://getmunch.ie/" target="_blank" class="a">here</a> it is.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=e-commerce-from-scratch" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
