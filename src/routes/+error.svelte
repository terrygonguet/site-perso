<!-- This page throws a lot of errors in dev and I don't know why -->
<script lang="ts">
	import { page } from "$app/state"
	import Footer from "$lib/components/Footer.svelte"

	let { t, c } = $derived(page.data)
	let error_code = $derived(page.error?.code ?? "unknown")
	let error_message = $derived(await t("errors", error_code))
</script>

<svelte:head>
	<title>{error_message} - Terry Gonguet</title>
</svelte:head>

<header class="grid place-items-center px-4 pt-8 md:gap-4">
	<h1 class="text-4xl font-bold md:text-6xl" style:view-transition-name="page-title-error">
		{@html error_message}
	</h1>
	<h2 class="text-xl font-semibold text-stone-600 md:text-2xl dark:text-stone-400">
		{@html await t("errors", "detail", { values: { status: page.status, code: error_code } })}
	</h2>
</header>

<main class="grid place-items-center p-4" style:view-transition-name="page-main">
	{#if page.error?.cause}
		<pre class="whitespace-pre-wrap">{@html c(page.error?.cause, { editor: false })}</pre>
	{:else}
		<p class="prose-default">{@html await t("errors", "explanation")}</p>
	{/if}
</main>

<Footer />
