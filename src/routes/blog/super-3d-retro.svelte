<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	import TranslationsList from "~components/TranslationsList.svelte"

	export const tags = ["project","3D","retro","abandonned","tech"]
	
	export let translations = {"français":"super-3d-retro-fr"}

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Super 3D Retro</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Super 3D Retro</h1>
		<h3 class="text-accent-light text-base">May 2017</h3>
		
		{#if translations}
			<TranslationsList {translations} />
		{/if}
		<div class="mb-8" />

		<p class="my-4">One day in may of my first year <a href="blog/2-years-in-ireland" class="a">in Ireland</a> I started to think about 3D engines, not about collisions but about displaying (very simple wireframe) 3D graphics. I had no idea how to efficiently put textures other than plain colors on the polygons or how to do lighting but I had studied 3D vector math in school and I remembered that it wasn't <em>that</em> much more complex than the 2D vector math I was already doing when making games.</p>  <p class="my-4">So instead of going to the internet to read up on the subject I tried to make a little game with retro wireframe 3D graphics from scratch, and because I was already in love with the concept of the web at the time I was going to do all of that in JS and draw it to a canvas.</p>  <p class="my-4">As you can expect it didn't work perfectly and I eventually abandonned it when I realised that to make it work I would have to rewrite basically everything because of a fundamental mistake I made. It actually renders the objects properly but because I didn't know about <a href="https://en.wikipedia.org/wiki/Projection_matrix" target="_blank" class="a">projection matrices</a> the edges of the screen are bent like through a <a href="https://en.wikipedia.org/wiki/Fisheye_lens" target="_blank" class="a">fish eye lens</a>.</p>  <p class="my-4">But appart from that problem with the camera it turned out that very basic 3D graphics are actually not that hard. It gets exponentially harder the more features you need to support (like textures, illumination, smoothing...) but I learned a lot and had a lot of fun rolling my own renderer. I think I wrote my own vector math functions too.</p>  <p class="my-4">The prototype is still up <a href="https://terry.gonguet.com/super3dretro" target="_blank" class="a">here</a>. <a href="https://github.com/terrygonguet/super3DRetro" target="_blank" class="a">Here</a> is the github repo.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=super-3d-retro" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
