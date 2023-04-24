<script lang="ts">
	export let appearance: "button" | "anchor" = "button"
</script>

<button data-appearance={appearance} {...$$props} on:click><slot /></button>

<style lang="postcss">
	button {
		@apply transition-colors;
	}

	button[data-appearance="button"] {
		@apply bg-orange-600 text-white px-2 py-1 text-lg cursor-pointer;
	}
	button[data-appearance="button"]:hover {
		@apply bg-orange-500;
	}
	:is(.dark button[data-appearance="button"]) {
		@apply bg-amber-600;
	}
	:is(.dark button[data-appearance="button"]:hover) {
		@apply bg-amber-500;
	}

	button[data-appearance="anchor"] {
		@apply text-orange-600;
	}
	button[data-appearance="anchor"]:hover {
		@apply text-orange-500 underline;
	}
	:is(.dark button[data-appearance="anchor"]) {
		@apply text-amber-600;
	}
	:is(.dark button[data-appearance="anchor"]:hover) {
		@apply text-amber-500;
	}

	@media print {
		button[data-appearance="button"] {
			@apply bg-stone-700;
		}
		button[data-appearance="anchor"] {
			@apply !text-stone-700 underline;
		}
	}
</style>
