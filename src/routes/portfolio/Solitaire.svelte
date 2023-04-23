<script lang="ts">
	import { LL } from "$i18n"
	import solitaireSrcset from "./solitaire.png?w=1280;720;260&webp&srcset&imgtools"
	import solitaireFallback from "./solitaire.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="left"
		images={[{ srcset: solitaireSrcset, fallback: solitaireFallback, alt: "Placeholder" }]}
		alt="placeholder"
	/>
	<LocalizedParagraph fragments={$LL.portfolio.solitaire.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.solitaire.p} />
</section>
