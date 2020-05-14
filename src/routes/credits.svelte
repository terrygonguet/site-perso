<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
</script>

<svelte:head>
	<title>Terry Gonguet - Credits</title>
</svelte:head>

<main
	class="overflow-hidden flex-center relative flex-col text-center"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<p class="m-4">
		This website has been made with the help of a really cool framework named
		<a href="https://sapper.svelte.dev/" target="_blank" class="a">Sapper</a> and
		the awesome tool that is <a href="https://tailwindcss.com/" target="_blank" class="a">Tailwind</a>.
	</p>
	<p class="m-4">
		Some icons made by
		<a href="https://www.flaticon.com/authors/chanut" title="Chanut" target="_blank" class="a"> Chanut</a>
		from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" class="a">Flaticon</a>
	</p>
	<p class="m-4">
		<a target="_blank" href="https://icons8.com/icons/set/external-link" class="a">External Link</a>
		icon by <a target="_blank" href="https://icons8.com" class="a">Icons8</a>
	</p>
	<p>
		Most French translations are done by <a href="https://www.deviantart.com/little-marylis" target="_blank" class="a">Marylis</a>.
	</p>
	<a href="." class="back" rel="prefetch">Back</a>
</main>
