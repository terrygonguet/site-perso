<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["work","cv","internship","development"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - My first and only internship to date</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">My first and only internship to date</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2016-04-04"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">In the Spring of 2016 I had the opportunity to do an internship for 3 months (April to June) as a front end developer in a medium size enterprise in Annecy, <a href="https://www.alpes-controles.fr/" target="_blank" class="a">Alpes Contrôles</a>. I mainly worked on some pages of their in-house software to manage all of their projects and everything. We used an old version of the DHTMLX suite to display all the interface and requested the data via REST requests to a PHP/MySQL backend.</p>  <p class="my-4">Even though the technology was a bit old even for the time, I liked these 3 months very much, it's nice to only have to worry about if the software works or not and not about all the management and client relations part of the business.</p>  <p class="my-4">How I ended up with this internship is a funny enough story to tell here. We had a JavaScript course a few months before and one of the classes was to teach us about AJAX and asynchronous programming. The teacher set up a server running a simple maze with a coin so we could send request to that server to move our token in this grid to try and grab the coin. The day before the lab for that activity I stayed up very late basically doing the lab and having a ton of fun, it was my first experience of what could be achieved with JS then. The next day I didn't have anything to do in the lab so I spent the 4 hours helping other students wrap their heads around async programming. At the end of the class, the TA took me appart and asked me if I was interested by an internship in their team and I accepted. And that's the story of how I went through the most "working life" part of my life without having to ever hunt for a job.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=stage-alpes-controles" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
