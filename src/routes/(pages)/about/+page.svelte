<script lang="ts">
	import { LL } from "$i18n"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.about())}</title>
</svelte:head>

<section class="max-w-prose grid gap-4 text-lg m-auto">
	<LocalizedParagraph fragments={$LL.about.p1} />
	<LocalizedParagraph fragments={$LL.about.p2} />
	<LocalizedParagraph fragments={$LL.about.p3} />
	<LocalizedParagraph fragments={$LL.about.p4} />
	<LocalizedParagraph fragments={$LL.about.p5} />
</section>
