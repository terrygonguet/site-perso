<script lang="ts">
	import { LL } from "$i18n"
	import Printer from "~icons/ri/printer-line"
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
		<p class="print:hidden">
			This page can also be <Button appearance="anchor" on:click={() => window.print()}
				><Printer /> printed</Button
			> if you need a paper or PDF version.
		</p>
	</div>
	<p>
		I am a fullstack web developer from France. I'm competent with most front and back end web
		technologies though I prefer (and have the most experience with) Svelte and SvelteKit. I
		specialize in the technical aspect of development; I will make it work, whatever "it" may
		be. This is helped by my lifelong passion for learning and continually improving my skills.
	</p>
	<p>
		You can find my professional experience in <A href="/portfolio">my portfolio</A>. I have a
		Bachelor of Science (Honours) in Computing from the Institute of Technology Tallaght.
	</p>
	<p>Outside of work, my interest include making and playing videogames, swimming and brevity.</p>
</div>
