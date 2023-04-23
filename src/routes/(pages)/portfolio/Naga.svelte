<script lang="ts">
	import { LL } from "$i18n"
	import nagaSrcset from "./naga.webp?w=1280;720;260&srcset&imgtools"
	import nagaFallback from "./naga.webp?jpg&imgtools"
</script>

<section>
	<LightBox
		class="right"
		images={[{ srcset: nagaSrcset, fallback: nagaFallback, alt: "Placeholder" }]}
		alt="placeholder"
	/>
	<LocalizedParagraph fragments={$LL.portfolio.naga.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.naga.p} />
</section>
