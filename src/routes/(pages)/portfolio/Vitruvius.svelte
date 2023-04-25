<script lang="ts">
	import { LL } from "$i18n"
	import vitruviusSrcset from "./vitruvius.png?w=1280;720;260&webp&srcset&imgtools"
	import vitruviusFallback from "./vitruvius.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="right"
		images={[
			{
				srcset: vitruviusSrcset,
				fallback: vitruviusFallback,
				alt: $LL.portfolio.vitruvius.alt(),
			},
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.vitruvius.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.vitruvius.p1} />
	<LocalizedParagraph fragments={$LL.portfolio.vitruvius.p2} />
</section>
