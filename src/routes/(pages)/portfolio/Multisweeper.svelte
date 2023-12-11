<script lang="ts">
	import { LL } from "$i18n"
	import multisweeperSrcset from "./multisweeper.png?w=1280;720;260&webp&srcset&imgtools"
	import multisweeperFallback from "./multisweeper.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left bordered"
		images={[
			{
				srcset: multisweeperSrcset,
				fallback: multisweeperFallback,
				alt: $LL.portfolio.multisweeper.alt(),
			},
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.multisweeper.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.multisweeper.p} />
</section>
