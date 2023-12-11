<script lang="ts">
	import { LL } from "$i18n"
	import startSrcset from "./calibron-start.png?w=1280;720;260&webp&srcset&imgtools"
	import startFallback from "./calibron-start.png?jpg&imgtools"
	import endSrcset from "./calibron-end.png?w=1280;720;260&webp&srcset&imgtools"
	import endFallback from "./calibron-end.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left bordered"
		images={[
			{
				srcset: startSrcset,
				fallback: startFallback,
				alt: $LL.portfolio.calibron.alt.start(),
			},
			{ srcset: endSrcset, fallback: endFallback, alt: $LL.portfolio.calibron.alt.end() },
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.calibron.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.calibron.p} />
</section>
