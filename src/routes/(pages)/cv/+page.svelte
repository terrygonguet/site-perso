<script lang="ts">
	import { LL } from "$i18n"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.cv())}</title>
</svelte:head>

<div id="cv" class="max-w-prose m-auto grid gap-8 text-lg text-justify print:mt-0">
	<div class="flex flex-col gap-3 items-center">
		<h1 class="text-2xl md:text-5xl font-bold">Terry Gonguet</h1>
		<h2 class="text-lg md:text-2xl">
			<span class="text-orange-600 dark:text-amber-600 print:!text-stone-700"
				>{$LL.home.jobTitle()}</span
			>
			- <A href="mailto:terry@gonguet.com" class="text-center">terry@gonguet.com</A>
		</h2>
		<LocalizedParagraph fragments={$LL.cv.print} class="print:hidden" />
	</div>
	<LocalizedParagraph fragments={$LL.cv.p1} />
	<LocalizedParagraph fragments={$LL.cv.p2} />
	<LocalizedParagraph fragments={$LL.cv.p3} />
</div>
