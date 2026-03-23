<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { nanoid } from "nanoid"

	let { checked = $bindable(false), id = nanoid(), ...props }: HTMLInputAttributes = $props()
</script>

<div id="toggle-track" style:view-transition-name="toggle-track-{id}">
	<input type="checkbox" class="hidden" bind:checked {...props} />
	<div id="toggle-thumb" style:view-transition-name="toggle-thumb-{id}"></div>
</div>

<style lang="postcss">
	@reference "@appcss";

	#toggle-track {
		background-color: var(--color-toggle-track-off, theme(--color-stone-400));
		@apply flex h-4 w-9 rounded-full;

		&:has(input:checked) {
			background-color: var(--color-toggle-track-on, theme(--color-amber-500));
			@apply justify-end;
		}
	}

	#toggle-thumb {
		box-shadow: 0 0 0.25rem var(--color-toggle-thumb, theme(--color-stone-600));
		@apply -m-0.5 h-5 w-5 rounded-full bg-stone-300;
	}
</style>
