<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import BlogLink from "~components/BlogLink.svelte"
	import Back from "~components/Back.svelte"
	import { abandonned as blogs } from "~data"
</script>

<main
	class="overflow-auto flex justify-center items-stretch md:items-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<div class="m-4 max-w-1k max-h-full text-justify">
		<p class="my-4">
			These are projects I started (and stopped) what feels like an age ago, some are just
			unfinished, some are broken and some only exist in Github or in my memories. The fact that
			I feel like I was a different person when I made these probably tells me that I've done
			some growing up in between.
		</p>
		<p class="my-4">
			I like to think that I could make them now for a fraction of the time and effort but I
			haven't tried yet. I made them into blog posts for linkability and organisation.
		</p>
		{#each blogs as blog}
			<BlogLink {...blog} />
		{/each}
		<Back />
	</div>
</main>
