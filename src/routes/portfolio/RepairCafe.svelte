<script lang="ts">
	import { LL } from "$i18n"
	import homeSrcset from "./repaircafe-home.png?w=1280;720;260&webp&srcset&imgtools"
	import homeFallback from "./repaircafe-home.png?jpg&imgtools"
	import listSrcset from "./repaircafe-list.png?w=1280;720;260&webp&srcset&imgtools"
	import listFallback from "./repaircafe-list.png?jpg&imgtools"
	import formSrcset from "./repaircafe-form.png?w=1280;720;260&webp&srcset&imgtools"
	import formFallback from "./repaircafe-form.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left"
		images={[
			{ srcset: homeSrcset, fallback: homeFallback, alt: "Placeholder" },
			{ srcset: listSrcset, fallback: listFallback, alt: "Placeholder" },
			{ srcset: formSrcset, fallback: formFallback, alt: "Placeholder" },
		]}
		alt="placeholder"
	/>
	<LocalizedParagraph fragments={$LL.portfolio.repaircafe.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.repaircafe.p1} />
	<LocalizedParagraph fragments={$LL.portfolio.repaircafe.p2} />
</section>
