<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import Back from "~components/Back.svelte"
	import { experiment } from "~data"

	const { url, description } = experiment
	let showIframe = false
</script>

<style>
main {
	display: grid;
	grid-template-rows: 1fr auto;
	grid-gap: 1rem;
}
</style>

<main
	class="overflow-hidden p-4"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	{#if showIframe}
		<div>
			<iframe
				src={url}
				title="Current experiment"
				class="bg-white border border-gray-500 w-full h-full"
				in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
				out:fade={{ easing: cubicInOut, duration: 200 }}></iframe>
		</div>
	{:else}
		<div 
			class="flex-center flex-col max-w-1k m-auto text-center"
			in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
			out:fade={{ easing: cubicInOut, duration: 200 }}
		>
			<p class="my-4">This is my current experiment, it might be weird, it might be broken or it might be boring but here it is.</p>
			<p class="my-4">{@html description}</p>
			<button class="my-4 btn" on:click={() => (showIframe = true)}>SHOW</button>
		</div>
	{/if}
	<Back _style="margin: 0" />
</main>
