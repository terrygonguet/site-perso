<script lang="ts">
	import { LL } from "$i18n"
	import homeSrcset from "./webcells-home.png?w=1280;720;260&webp&srcset&imgtools"
	import homeFallback from "./webcells-home.png?jpg&imgtools"
	import butterflySrcset from "./webcells-butterfly.png?w=1280;720;260&webp&srcset&imgtools"
	import butterflyFallback from "./webcells-butterfly.png?jpg&imgtools"
	import hexSrcset from "./webcells-hex.png?w=1280;720;260&webp&srcset&imgtools"
	import hexFallback from "./webcells-hex.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left"
		images={[
			{ srcset: homeSrcset, fallback: homeFallback, alt: $LL.portfolio.webcells.alt.home() },
			{
				srcset: butterflySrcset,
				fallback: butterflyFallback,
				alt: $LL.portfolio.webcells.alt.butterfly(),
			},
			{ srcset: hexSrcset, fallback: hexFallback, alt: $LL.portfolio.webcells.alt.hex() },
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.webcells.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.webcells.p} />
</section>
