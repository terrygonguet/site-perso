<script>
	let inpt = "", konami
	function handleKeyDown(e) {
		inpt = (inpt + e.key).slice(-100)
		if (inpt.endsWith("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) {
			import("../components/KonamiCanvas").then(k => (konami = k.default))
		}
	}
</script>

<style global type="text/postcss">
@tailwind base;

@tailwind components;

@tailwind utilities;

* {
	scrollbar-color: var(--color-radial-bg-light) var(--color-bg);
	scrollbar-width: thin;
}
</style>

<svelte:window on:keydown={handleKeyDown}/>

<slot />
{#if konami}
	<svelte:component this={konami} />
{/if}
