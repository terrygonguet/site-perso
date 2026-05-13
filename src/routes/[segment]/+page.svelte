<script lang="ts">
	import { invalidate } from "$app/navigation"
	import { page } from "$app/state"
	import Footer from "$lib/components/Footer.svelte"

	let { segment = "unknown" } = $derived(page.params)
	let { i18n, c, content, title = "🤷‍♂️" } = $derived(page.data)

	$effect(() => {
		i18n.lang
		invalidate(`content:${segment}`)
	})
</script>

<svelte:head>
	<title>{title} - Terry Gonguet</title>
</svelte:head>

<header class="grid place-items-center px-4 pt-8">
	<h1 class="text-4xl font-bold md:text-6xl" style:view-transition-name="page-title-{segment}">
		{@html await title}
	</h1>
</header>

<main class="grid place-items-center p-4" style:view-transition-name="page-main">
	<div class="prose-default">
		{@html c(content, { editor: false })}
	</div>
</main>

<Footer />

<style lang="postcss">
	@reference "@appcss";

	::view-transition-new(page-main) {
		animation: slide-in 0.2s ease 0.2s both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	::view-transition-old(page-main) {
		animation: slide-in 0.2s ease reverse both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	@keyframes slide-in {
		from {
			transform: translate(0, 20dvh);
			opacity: 0;
		}
		to {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
