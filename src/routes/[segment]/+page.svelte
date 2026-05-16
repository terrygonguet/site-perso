<script lang="ts">
	import { untrack } from "svelte"
	import { invalidate } from "$app/navigation"
	import { page } from "$app/state"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"

	let { segment = "unknown" } = $derived(page.params)
	let { i18n, c, content, title = "🤷‍♂️" } = $derived(page.data)

	let current_lang = untrack(() => i18n.lang)
	$effect(() => {
		if (i18n.lang != current_lang) {
			invalidate(`content:${segment}`)
			current_lang = i18n.lang
		}
	})
</script>

<svelte:head>
	<title>{title} - Terry Gonguet</title>
</svelte:head>

<Header {title} viewTransitionName="page-title-{segment}"></Header>

<main
	class="grid place-items-center p-4"
	style:view-transition-name="page-main-{segment}"
	style:view-transition-class="segment-main"
>
	<div class="prose-default">
		{@html c(content, { editor: false })}
	</div>
</main>

<Footer />

<style lang="postcss">
	@reference "@appcss";

	::view-transition-new(.segment-main):only-child {
		animation: slide-in 0.2s ease 0.2s both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	::view-transition-old(.segment-main):only-child {
		animation: slide-in 0.2s ease reverse both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}
</style>
