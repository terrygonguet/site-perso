<script lang="ts">
	import { page } from "$app/state"
	import Footer from "$lib/components/Footer.svelte"

	let { t } = $derived(page.data)
</script>

<svelte:head>
	<title>{t("general", "title_about")} - Terry Gonguet</title>
</svelte:head>

<header class="grid place-items-center px-4 pt-8">
	<h1 class="text-4xl font-bold md:text-6xl" style:view-transition-name="page-title-about">
		{@html t("home", "about")}
	</h1>
</header>

<main class="grid place-items-center p-4" style:view-transition-name="page-about-main">
	<div class="prose-default dark:prose-invert">
		<p>{@html t("about", "p1")}</p>
		<p>{@html t("about", "p2")}</p>
		<p>{@html t("about", "p3")}</p>
		<p>{@html t("about", "p4")}</p>
		<p>{@html t("about", "p5")}</p>
	</div>
</main>

<Footer />

<style lang="postcss">
	@reference "@appcss";

	::view-transition-old(page-about-main) {
		animation: slide-out 0.2s ease forwards;
	}

	::view-transition-new(page-about-main) {
		animation: slide-out 0.2s ease reverse forwards;
	}

	@keyframes slide-out {
		from {
			transform: translate(0, 0);
			opacity: 1;
		}
		to {
			transform: translate(0, 20dvh);
			opacity: 0;
		}
	}
</style>
