<script lang="ts">
	import { LL } from "$i18n"
	import exploreSrcset from "./gapsmoov-explore.png?w=1280;720;260&webp&srcset&imgtools"
	import exploreFallback from "./gapsmoov-explore.png?jpg&imgtools"
	import compareSrcset from "./gapsmoov-compare.png?w=1280;720;260&webp&srcset&imgtools"
	import compareFallback from "./gapsmoov-compare.png?jpg&imgtools"
	import evaluateSrcset from "./gapsmoov-evaluate.png?w=1280;720;260&webp&srcset&imgtools"
	import evaluateFallback from "./gapsmoov-evaluate.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left"
		images={[
			{ srcset: exploreSrcset, fallback: exploreFallback, alt: "Placeholder" },
			{ srcset: compareSrcset, fallback: compareFallback, alt: "Placeholder" },
			{ srcset: evaluateSrcset, fallback: evaluateFallback, alt: "Placeholder" },
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.p1} />
	<LocalizedParagraph fragments={$LL.portfolio.gapsmoov.p2} />
</section>
