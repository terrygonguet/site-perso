<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["cv","studies","school","ireland"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - DUETI + Bachelor</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">DUETI + Bachelor</h1>
		<h3 class="text-accent-light text-base">2016-2018</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">Right after the DUT I had the opportunity of doing one year abroad as part of the DUETI program with Erasmus. It looked really appealing because I could do it in an english speaking country (I was already fluent then) and I would get up to 3 diplomas at the end:</p>  <ul class="list-disc">    <li class="ml-8"><a href="img/xl/dueti.jpg" class="a" target="_blank">DUETI</a></li>    <li class="ml-8"><a href="img/xl/bachelor.jpg" class="a" target="_blank">Diploma from the university I went to</a></li>    <li class="ml-8"><a href="img/xl/license.jpg" class="a" target="_blank">Licence Informatique in France</a></li>  </ul>  <p class="my-4">The choice was pretty obvious so I chose to try and go to Ireland. After the exchange I just stayed there for 1 more year in the IT Tallaght to complete the 4 years Bachelor course and get <a href="img/xl/bachelor-honours.jpg" class="a" target="_blank">yet another diploma</a> (although suspiciously similar to the previous one).</p>  <p class="my-4">I talk more in detail about the whole experience in <a href="blog/2-years-in-ireland" class="a">this blog post</a>.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=dueti-bachelor" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
