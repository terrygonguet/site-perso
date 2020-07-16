<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import BlogLink from "~components/BlogLink.svelte"
	import Back from "~components/Back.svelte"
	import { blogs } from "~data"

	$: sortedBlogs =
		blogs
			.filter(b => b.visible)
			.map(b => ({ ...b, jsdate: new Date(b.date) }))
			.sort((a, b) => a.jsdate > b.jsdate ? -1 : 1)
	$: first = sortedBlogs[0]
	$: notFirst = sortedBlogs.slice(1)
</script>

<svelte:head>
	<title>Terry Gonguet - Blog</title>
</svelte:head>

<main
	class="overflow-auto flex justify-center items-stretch md:items-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<div class="m-4 max-w-1k md:w-full max-h-full">
		<h2 class="text-2xl font-semibold my-2 border-b border-white">Latest</h2>
		<BlogLink {...first} />
		{#if notFirst.length}
			<h2 class="text-2xl font-semibold mt-4 border-b border-white">Older</h2>
			{#each notFirst as blog}
				<BlogLink {...blog} />
			{/each}
		{/if}
		<Back />
	</div>
</main>
