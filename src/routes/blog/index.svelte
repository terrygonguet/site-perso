<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch("blogs")
		const blogs = await res.json()

		if (res.ok) return { blogs }
		else this.error(res.status, new Error(blogs.message))
	}
</script>

<script>
	import { fade } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import BlogLink from "../../components/BlogLink";
	import Back from "../../components/Back"

	export let blogs = []

	$: sortedBlogs =
		blogs
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
