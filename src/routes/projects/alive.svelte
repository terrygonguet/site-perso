<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import BlogLink from "~components/BlogLink.svelte"
	import Back from "~components/Back.svelte"
	import { alive, completed } from "~data"
</script>

<main
	class="overflow-auto flex justify-center items-stretch md:items-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<div class="m-4 max-w-1k max-h-full text-justify">
		<p class="my-4">
			These are projects that are either completed or still in operation. They might not all be software
			or sofware-related but they are what I do and I'm pretty proud of most of them. I made them into
			blog posts for linkability and organisation.
		</p>
		<h2 class="text-2xl font-semibold border-b border-white">Alive</h2>
		{#each alive as blog}
			<BlogLink {...blog} />
		{/each}
		<h2 class="text-2xl font-semibold border-b border-white">Completed</h2>
		{#each completed as blog}
			<BlogLink {...blog} />
		{/each}
		<Back />
	</div>
</main>
