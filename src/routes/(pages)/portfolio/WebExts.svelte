<script lang="ts">
	import { LL } from "$i18n"
	import homeSrcset from "./webext-home.png?w=1280;720;260&webp&srcset&imgtools"
	import homeFallback from "./webext-home.png?jpg&imgtools"
	import playlistSrcset from "./webext-playlist.png?w=1280;720;260&webp&srcset&imgtools"
	import playlistFallback from "./webext-playlist.png?jpg&imgtools"
	import interactSrcset from "./webext-interact.png?w=1280;720;260&webp&srcset&imgtools"
	import interactFallback from "./webext-interact.png?jpg&imgtools"
	import web0ccSrcset from "./webext-web0cc.png?w=1280;720;260&webp&srcset&imgtools"
	import web0ccFallback from "./webext-web0cc.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="right"
		images={[
			{ srcset: homeSrcset, fallback: homeFallback, alt: $LL.portfolio.webexts.alt.home() },
			{
				srcset: playlistSrcset,
				fallback: playlistFallback,
				alt: $LL.portfolio.webexts.alt.playlist(),
			},
			{
				srcset: interactSrcset,
				fallback: interactFallback,
				alt: $LL.portfolio.webexts.alt.interact(),
			},
			{
				srcset: web0ccSrcset,
				fallback: web0ccFallback,
				alt: $LL.portfolio.webexts.alt.web0cc(),
			},
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.webexts.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.webexts.p} />
</section>
