<script lang="ts">
	import { page } from "$app/state"
	import Footer from "$lib/components/Footer.svelte"

	let { t } = $derived(page.data)
</script>

<svelte:head>
	<title>{await t("portfolio", "title", { editor: false })} - Terry Gonguet</title>
</svelte:head>

<header class="grid place-items-center px-4 pt-8 pb-16">
	<h1 class="text-4xl font-bold md:text-6xl" style:view-transition-name="page-title-portfolio">
		{@html await t("portfolio", "title")}
	</h1>
</header>

<main class="grid place-items-center gap-8 p-4" style:view-transition-name="page-main">
	<section class="prose dark:prose-invert">
		<h1>{@html await t("portfolio", "section_title_pro")}</h1>
		<hr />
		<h2>{@html await t("portfolio", "section_subtitle_pro")}</h2>

		<article>
			<enhanced:img
				src="@assets/portfolio/gapsmoov_home.png"
				sizes="min(1280px, 100vw)"
				alt={await t("portfolio", "pro_1_alt", { editor: false })}
			/>
			<h1>{@html await t("portfolio", "pro_1_title")}</h1>
			<p>{@html await t("portfolio", "pro_1_p1")}</p>
			<p>{@html await t("portfolio", "pro_1_p2")}</p>
		</article>

		<article>
			<enhanced:img
				src="@assets/portfolio/munch_home.png"
				sizes="min(1280px, 100vw)"
				alt={await t("portfolio", "pro_2_alt", { editor: false })}
			/>
			<h1>{@html await t("portfolio", "pro_2_title")}</h1>
			<p>{@html await t("portfolio", "pro_2_p1")}</p>
		</article>
	</section>

	<section class="prose dark:prose-invert">
		<h1>{@html await t("portfolio", "section_title_volonteer")}</h1>
		<hr />
		<h2>{@html await t("portfolio", "section_subtitle_volonteer")}</h2>

		<article>
			<enhanced:img
				src="@assets/portfolio/repaircafe_home.png"
				sizes="min(1280px, 100vw)"
				alt={await t("portfolio", "vol_1_alt", { editor: false })}
			/>
			<h1>{@html await t("portfolio", "vol_1_title")}</h1>
			<p>{@html await t("portfolio", "vol_1_p1")}</p>
			<p>{@html await t("portfolio", "vol_1_p2")}</p>
		</article>

		<article>
			<enhanced:img
				src="@assets/portfolio/webext_home.png"
				sizes="min(1280px, 100vw)"
				alt={await t("portfolio", "vol_2_alt", { editor: false })}
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
			h1 {
				@apply text-2xl font-semibold;
			}

			enhanced\:img {
				@apply shadow;

				@variant md {
					float: left;
					margin: 0 1rem 0.5rem 0;
					max-width: 50%;
				}
			}
			&:nth-child(2n + 1) enhanced\:img {
				@variant md {
					float: right;
					margin: 0 0 0.5rem 1rem;
				}
			}
		}
	}
</style>
