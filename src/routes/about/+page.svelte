<script lang="ts">
	import { LL, toArray } from "$i18n"
	import Footer from "$lib/comp/Footer.svelte"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.about())}</title>
</svelte:head>

<main class="grid place-items-center gap-6 p-4">
	<section class="max-w-prose grid gap-4 text-lg">
		<LocalizedParagraph fragments={toArray($LL.about.p1)} />
		<LocalizedParagraph
			fragments={toArray($LL.about.p2)}
			links={{
				1: ["https://goo.gl/maps/fcsMFHbRMq1cSYta9", true],
				3: ["https://www.youtube.com/watch?v=SbO0tqH8f5I", true],
				5: [
					"https://rkvalley.files.wordpress.com/2010/04/kernighan_ritchie_language_c.pdf",
					true,
				],
			}}
		/>
		<LocalizedParagraph
			fragments={toArray($LL.about.p3)}
			links={{
				1: ["https://www.datprotocol.com/", true],
				3: ["https://ipfs.io/", true],
			}}
		/>
		<LocalizedParagraph
			fragments={toArray($LL.about.p4)}
			links={{
				1: ["https://caniuse.com/#feat=gamepad", true],
				3: ["https://developer.mozilla.org/docs/WebAssembly/Concepts", true],
			}}
		/>
		<LocalizedParagraph fragments={toArray($LL.about.p5)} />
	</section>
	<Footer />
</main>
