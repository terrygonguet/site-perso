<script lang="ts">
	import { LL } from "$i18n"
	import homeSrcset from "./munch-home.png?w=1280;720;260&webp&srcset&imgtools"
	import homeFallback from "./munch-home.png?jpg&imgtools"
	import menuSrcset from "./munch-menu.png?w=1280;720;260&webp&srcset&imgtools"
	import menuFallback from "./munch-menu.png?jpg&imgtools"
	import checkoutSrcset from "./munch-checkout.png?w=1280;720;260&webp&srcset&imgtools"
	import checkoutFallback from "./munch-checkout.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="right bordered"
		images={[
			{ srcset: homeSrcset, fallback: homeFallback, alt: $LL.portfolio.getmunch.alt.home() },
			{ srcset: menuSrcset, fallback: menuFallback, alt: $LL.portfolio.getmunch.alt.menu() },
			{
				srcset: checkoutSrcset,
				fallback: checkoutFallback,
				alt: $LL.portfolio.getmunch.alt.checkout(),
			},
		]}
	/>
	<LocalizedParagraph fragments={$LL.portfolio.getmunch.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.getmunch.p} />
</section>
