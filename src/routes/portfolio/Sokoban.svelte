<script lang="ts">
	import { LL } from "$i18n"
	import gameSrcset from "./sokoban-game.png?w=1280;720;260&webp&srcset&imgtools"
	import gameFallback from "./sokoban-game.png?jpg&imgtools"
	import editSrcset from "./sokoban-edit.png?w=1280;720;260&webp&srcset&imgtools"
	import editFallback from "./sokoban-edit.png?jpg&imgtools"
</script>

<section>
	<LightBox
		class="right"
		images={[
			{ srcset: gameSrcset, fallback: gameFallback, alt: "Placeholder" },
			{ srcset: editSrcset, fallback: editFallback, alt: "Placeholder" },
		]}
		alt="placeholder"
	/>
	<LocalizedParagraph fragments={$LL.portfolio.sokoban.h} as="h3" />
	<LocalizedParagraph fragments={$LL.portfolio.sokoban.p} />
</section>
