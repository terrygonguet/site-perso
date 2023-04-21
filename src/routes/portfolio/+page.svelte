<script lang="ts">
	import { LL } from "$i18n"
	import Footer from "$lib/comp/Footer.svelte"
	import { fade } from "svelte/transition"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.portfolio())}</title>
</svelte:head>

<main class="grid grid-rows-[1fr_auto] gap-6 p-4" transition:fade={{ duration: 200 }}>
	<div class="max-w-prose m-auto grid gap-8 text-lg text-justify">
		<div class="heading">
			<h2>{$LL.portfolio.headings.pro()}</h2>
			<h3>{$LL.portfolio.subtitles.pro()}</h3>
		</div>

		<section>
			<LightBox
				class="left"
				images={[
					{ src: "/gapsmoov-explore.png", alt: "Placeholder" },
					{ src: "/gapsmoov-compare.png", alt: "Placeholder" },
					{ src: "/gapsmoov-evaluate.png", alt: "Placeholder" },
				]}
			/>
			<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.p1} />
			<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.p2} />
		</section>

		<section>
			<LightBox
				class="right bordered"
				images={[
					{ src: "/munch-home.png", alt: "Placeholder" },
					{ src: "/munch-menu.png", alt: "Placeholder" },
					{ src: "/munch-checkout.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.getmunch.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.getmunch.p} />
		</section>

		<div class="heading">
			<h2>{$LL.portfolio.headings.volonteer()}</h2>
			<h3>{$LL.portfolio.subtitles.volonteer()}</h3>
		</div>

		<section>
			<LightBox
				class="left"
				images={[
					{ src: "/repaircafe-home.png", alt: "Placeholder" },
					{ src: "/repaircafe-list.png", alt: "Placeholder" },
					{ src: "/repaircafe-form.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.repaircafe.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.repaircafe.p1} />
			<LocalizedParagraph fragments={$LL.portfolio.repaircafe.p2} />
		</section>

		<section>
			<LightBox
				class="right"
				images={[
					{ src: "/webext-home.png", alt: "Placeholder" },
					{ src: "/webext-playlist.png", alt: "Placeholder" },
					{ src: "/webext-interact.png", alt: "Placeholder" },
					{ src: "/webext-web0cc.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.webexts.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.webexts.p} />
		</section>

		<div class="heading">
			<h2>{$LL.portfolio.headings.experiments()}</h2>
			<h3>{$LL.portfolio.subtitles.experiments()}</h3>
		</div>

		<section>
			<LightBox
				class="left"
				images={[
					{ src: "/webcells-home.png", alt: "Placeholder" },
					{ src: "/webcells-butterfly.png", alt: "Placeholder" },
					{ src: "/webcells-hex.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.webcells.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.webcells.p} />
		</section>

		<section>
			<LightBox
				class="right"
				images={[
					{ src: "/sokoban-game.png", alt: "Placeholder" },
					{ src: "/sokoban-edit.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.sokoban.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.sokoban.p} />
		</section>

		<section>
			<LightBox
				class="left bordered"
				images={[{ src: "/multisweeper.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.multisweeper.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.multisweeper.p} />
		</section>

		<section>
			<LightBox
				class="right"
				images={[{ src: "/vitruvius.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.vitruvius.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.vitruvius.p1} />
			<LocalizedParagraph fragments={$LL.portfolio.vitruvius.p2} />
		</section>

		<section>
			<LightBox
				class="left bordered"
				images={[
					{ src: "/calibron-start.png", alt: "Placeholder" },
					{ src: "/calibron-end.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.calibron.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.calibron.p} />
		</section>

		<section>
			<LightBox
				class="right"
				images={[{ src: "/naga.webp", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.naga.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.naga.p} />
		</section>

		<section>
			<LightBox
				class="left"
				images={[{ src: "/solitaire.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<LocalizedParagraph fragments={$LL.portfolio.solitaire.h} as="h3" />
			<LocalizedParagraph fragments={$LL.portfolio.solitaire.p} />
		</section>
	</div>
	<Footer />
</main>

<style lang="postcss">
	.heading {
		@apply grid gap-2;
	}
	.heading h2 {
		@apply text-5xl text-center mt-8 border-b border-current p-3 w-4/5 mx-auto;
	}
	.heading h3 {
		@apply text-xl text-center text-stone-500;
	}

	section :global(h3) {
		@apply text-xl font-bold;
	}
	section :global(.bordered) {
		@apply border border-stone-500;
	}
	:global(.dark) section :global(.bordered) {
		@apply border-none;
	}
	section :global(p) {
		@apply my-3;
	}

	@screen lg {
		section :global(.left) {
			@apply w-1/3 float-left mt-2 mr-4;
		}
		section :global(.right) {
			@apply w-1/3 float-right mt-2 ml-4;
		}
	}
</style>
