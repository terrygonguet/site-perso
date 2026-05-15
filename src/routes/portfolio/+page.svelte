<script lang="ts">
	import { page } from "$app/state"
	import Carousel from "$lib/components/Carousel.svelte"
	import Header from "$lib/components/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"

	import gapsmoov_home from "@assets/portfolio/gapsmoov_home.png"
	import gapsmoov_compare from "@assets/portfolio/gapsmoov_compare.png"
	import gapsmoov_cvc from "@assets/portfolio/gapsmoov_cvc.png"
	import gapsmoov_video from "@assets/portfolio/gapsmoov_video.png"
	import gapsmoov_culturosity from "@assets/portfolio/gapsmoov_culturosity.png"

	import munch_home from "@assets/portfolio/munch_home.png"
	import munch_menu from "@assets/portfolio/munch_menu.png"
	import munch_checkout from "@assets/portfolio/munch_checkout.png"

	import repaircafe_form from "@assets/portfolio/repaircafe_form.png"
	import repaircafe_home from "@assets/portfolio/repaircafe_home.png"
	import repaircafe_list from "@assets/portfolio/repaircafe_list.png"

	import webext_home from "@assets/portfolio/webext_home.png"

	let { t } = $derived(page.data)
</script>

<svelte:head>
	<title>{await t("portfolio", "title", { editor: false })} - Terry Gonguet</title>
</svelte:head>

<Header title={await t("portfolio", "title")} viewTransitionName="page-title-portfolio"></Header>

<main class="my-16 grid place-items-center gap-8 p-4" style:view-transition-name="page-main-portfolio">
	<section class="prose-default">
		<h1>{@html await t("portfolio", "section_title_pro")}</h1>
		<hr />
		<h2>{@html await t("portfolio", "section_subtitle_pro")}</h2>

		<article>
			<Carousel
				class="carousel not-prose"
				dialogClass="not-prose"
				thumbnail={gapsmoov_home}
				alt={await t("portfolio", "pro_1_alt", { editor: false })}
				images={[
					{ src: gapsmoov_home, alt: "" },
					{ src: gapsmoov_compare, alt: "" },
					{ src: gapsmoov_cvc, alt: "" },
					{ src: gapsmoov_video, alt: "" },
					{ src: gapsmoov_culturosity, alt: "" },
				]}
			/>
			<h1 id="pro_1_title">{@html await t("portfolio", "pro_1_title")}</h1>
			<p>{@html await t("portfolio", "pro_1_p1")}</p>
			<p>{@html await t("portfolio", "pro_1_p2")}</p>
		</article>

		<article>
			<Carousel
				class="carousel not-prose"
				dialogClass="not-prose"
				thumbnail={munch_home}
				alt={await t("portfolio", "pro_2_alt", { editor: false })}
				images={[
					{ src: munch_home, alt: "" },
					{ src: munch_menu, alt: "" },
					{ src: munch_checkout, alt: "" },
				]}
			/>
			<h1>{@html await t("portfolio", "pro_2_title")}</h1>
			<p>{@html await t("portfolio", "pro_2_p1")}</p>
		</article>
	</section>

	<section class="prose-default">
		<h1>{@html await t("portfolio", "section_title_volonteer")}</h1>
		<hr />
		<h2>{@html await t("portfolio", "section_subtitle_volonteer")}</h2>

		<article>
			<Carousel
				class="carousel not-prose"
				dialogClass="not-prose"
				thumbnail={repaircafe_home}
				alt={await t("portfolio", "vol_1_alt", { editor: false })}
				images={[
					{ src: repaircafe_home, alt: "" },
					{ src: repaircafe_list, alt: "" },
					{ src: repaircafe_form, alt: "" },
				]}
			/>
			<h1>{@html await t("portfolio", "vol_1_title")}</h1>
			<p>{@html await t("portfolio", "vol_1_p1")}</p>
			<p>{@html await t("portfolio", "vol_1_p2")}</p>
		</article>

		<article>
			<Carousel
				class="carousel not-prose"
				dialogClass="not-prose"
				thumbnail={webext_home}
				alt={await t("portfolio", "vol_2_alt", { editor: false })}
				images={[{ src: webext_home, alt: await t("portfolio", "vol_2_alt") }]}
			/>
			<h1>{@html await t("portfolio", "vol_2_title")}</h1>
			<p>{@html await t("portfolio", "vol_2_p1")}</p>
		</article>
	</section>
</main>

<Footer />

<style lang="postcss">
	@reference "@appcss";

	section {
		& > h1 {
			@apply m-0 text-center text-3xl font-semibold;

			@variant md {
				@apply text-5xl;
			}
		}

		& > h2 {
			@apply m-0 text-center text-xl font-normal text-stone-600;

			@variant dark {
				@apply text-stone-400;
			}
			@variant md {
				@apply text-2xl;
			}
		}

		& > hr {
			@apply mx-auto my-2 w-4/5 border-current;
		}

		& > article {
			@apply my-8;

			& > h1 {
				@apply text-2xl font-semibold;
			}
		}
	}

	article :global(.carousel) {
		@apply shadow;

		@variant md {
			float: left;
			margin: 0 1rem 0.5rem 0;
			max-width: 50%;
		}

		@variant lg {
			max-width: 40%;
		}

		:global(img) {
			view-transition-class: portfolio-carousel;
		}
	}

	article:nth-child(2n + 1) :global(.carousel) {
		@variant md {
			float: right;
			margin: 0 0 0.5rem 1rem;
		}
	}

	::view-transition-new(page-main-portfolio):only-child,
	::view-transition-new(.portfolio-carousel):only-child {
		animation: slide-in 0.2s ease 0.2s both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	::view-transition-old(page-main-portfolio):only-child,
	::view-transition-old(.portfolio-carousel):only-child {
		animation: slide-in 0.2s ease reverse both;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}
</style>
