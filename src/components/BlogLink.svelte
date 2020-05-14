<script>
	import { dateFormatter } from "../tools"
	import { slide } from "svelte/transition"
	import { onMount } from "svelte"

	export let title = "Missing title"
	export let date = "0001-01-01"
	export let slug = "missing-slug"
	export let displayDate = false

	let w = 0,
		showDate = false,
		a
	$: dateText = displayDate || dateFormatter.format(new Date(date))

	onMount(() => {
		measure()
		setTimeout(() => (showDate = true), 50)
	})

	function measure() {
		w = a.clientWidth
	}
</script>

<style>
	a {
		background: var(--radial-bg-dark);
		display: grid;
		transition: all 0.4s;
		grid-template-columns: 1fr auto;
		grid-template-areas: "title date";
	}

	a:hover {
		background: var(--radial-bg-light);
	}

	.small {
		grid-template-columns: auto;
		grid-template-areas: "title" "date";
	}
</style>

<svelte:window on:resize={measure} />

<a
	href="blog/{slug}"
	class="p-4 m-2 items-center text-left"
	bind:this={a}
	class:small={w < 700}
	rel="prefetch">
	<span class="text-xl" style="grid-area:title">{title}</span>
	{#if showDate}
		<span
			class="text-base text-accent-light"
			style="grid-area:date"
			transition:slide>
			{dateText}
		</span>
	{/if}
</a>
