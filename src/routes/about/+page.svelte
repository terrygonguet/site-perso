<script lang="ts">
	import { LL } from "$i18n"
	import Footer from "$lib/components/Footer.svelte"
	import { fade } from "svelte/transition"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.about())}</title>
</svelte:head>

<main class="grid place-items-center gap-6 p-4" transition:fade={{ duration: 200 }}>
	<section class="max-w-prose grid gap-4 text-lg">
		<LocalizedParagraph fragments={$LL.about.p1} />
		<LocalizedParagraph fragments={$LL.about.p2} />
		<LocalizedParagraph fragments={$LL.about.p3} />
		<LocalizedParagraph fragments={$LL.about.p4} />
		<LocalizedParagraph fragments={$LL.about.p5} />
	</section>
	<Footer />
</main>
