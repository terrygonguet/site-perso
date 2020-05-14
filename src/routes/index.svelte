<script>
	import RadialNavigation from "~components/RadialNavigation.svelte"
	import { fly } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"

	let w;
	$: isSmall = w <= 768;
	$: css = isSmall
		? "width: 95vmin;height: 95vmin;"
		: "width: 85vmin;height: 85vmin;";
</script>

<svelte:head>
	<title>Terry Gonguet - Home</title>
</svelte:head>

<svelte:window bind:innerWidth={w} />

<main
	class="overflow-hidden flex-center relative"
	in:fly={{ easing: cubicInOut, duration: 200, delay: 200, y: -500 }}
	out:fly={{ easing: cubicInOut, duration: 200, y: -500 }}>
	<RadialNavigation _style={css} />
	<a href="credits" class="absolute m-4 bottom-0 text-center a" rel="prefetch">
		Credits
	</a>
</main>
