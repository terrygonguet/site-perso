<script lang="ts">
	import ArrowLeft from "virtual:icons/ri/arrow-left-s-line"
	import ArrowRight from "virtual:icons/ri/arrow-right-s-line"
	import Close from "virtual:icons/ri/close-line"

	interface Props {
		id?: string
		class?: string
		dialogId?: string
		dialogClass?: string
		thumbnail: string
		alt: string
		images: { src: string; alt: string }[]
	}

	let default_id = $props.id()
	let { id = default_id, class: btn_classes, dialogClass: dialog_classes, thumbnail, alt, images }: Props = $props()

	let js_enabled = $state(false)
	let dialog_el = $state<HTMLDialogElement>()
	let last_focused_idx = $state(0)

	let dialog_id = $derived(id + "-carousel-img")
	let img_id = $derived(id + "-carousel-thumbnail")
	let show_arrow = $derived({
		left: last_focused_idx > 0,
		right: js_enabled && last_focused_idx < images.length - 1,
	})

	function on_thumb_click() {
		document.startViewTransition(() => {
			dialog_el?.showModal()
			dialog_el?.focus()
		})
	}

	function on_dialog_cancel(evt: Event) {
		evt.preventDefault()
		document.startViewTransition(() => {
			dialog_el?.close()
		})
	}

	function on_dialog_scroll() {
		const { scrollLeft: scroll_left = 0, offsetWidth: offset_width = 0 } = dialog_el ?? {}
		last_focused_idx = Math.round(scroll_left / offset_width)
	}

	function on_arrow_click(this: HTMLButtonElement, evt: Event) {
		evt.stopPropagation()
		const dir = (this.dataset.direction ?? "right") as "left" | "right"
		switch (dir) {
			case "left":
				dialog_el?.scrollBy({ left: -innerWidth })
				break
			case "right":
				dialog_el?.scrollBy({ left: innerWidth })
				break
		}
	}

	// disable the command if JS is enabled so we can trigger view transitions
	$effect(() => {
		js_enabled = true
	})
</script>

<button
	data-component="carousel"
	data-role="thumbnail"
	{id}
	type="button"
	class={btn_classes}
	aria-labelledby={img_id}
	command={js_enabled ? undefined : "show-modal"}
	commandfor={dialog_id}
	onclick={on_thumb_click}
>
	<enhanced:img
		id={img_id}
		src={thumbnail}
		{alt}
		sizes="min(1280px, 100vw)"
		style:--view-transition-name="{default_id}-img-{last_focused_idx}"
	/>
</button>

<dialog
	data-component="carousel"
	data-role="dialog"
	bind:this={dialog_el}
	id={dialog_id}
	class={dialog_classes}
	onclick={() => dialog_el?.requestClose()}
	oncancel={on_dialog_cancel}
	onscroll={on_dialog_scroll}
	autofocus
>
	{#each images as { src, alt }, i}
		<div data-component="carousel" data-role="image" class="grid min-h-0 snap-center snap-always place-items-center">
			<enhanced:img
				{src}
				{alt}
				sizes="min(1280px, 100vw)"
				loading={i == 0 ? "eager" : "lazy"}
				style:--view-transition-name="{default_id}-img-{i}"
			/>
		</div>
	{/each}
	{#if show_arrow.left}
		<button
			data-component="carousel"
			data-role="arrow"
			data-direction="left"
			type="button"
			tabindex="-1"
			onclick={on_arrow_click}
		>
			<ArrowLeft class="h-24 w-24" />
		</button>
	{/if}
	{#if show_arrow.right}
		<button
			data-component="carousel"
			data-role="arrow"
			data-direction="right"
			type="button"
			tabindex="-1"
			onclick={on_arrow_click}
		>
			<ArrowRight class="h-24 w-24" />
		</button>
	{/if}
	<button
		data-component="carousel"
		data-role="close"
		type="button"
		class="fixed top-0 right-0 grid aspect-square w-1/12 cursor-pointer place-items-center focus-visible:outlined"
		command="request-close"
		commandfor={dialog_id}
		onclick={evt => evt.stopPropagation()}
	>
		<Close class="h-20 w-20" />
	</button>
</dialog>

<style lang="postcss">
	@reference "@appcss";

	[data-role="thumbnail"] {
		@apply cursor-pointer;

		&:focus-visible {
			@apply outlined outline-offset-4;
		}

		@variant motion-safe {
			enhanced\:img {
				view-transition-name: var(--view-transition-name);
			}

			&:has(~ dialog[open]) enhanced\:img {
				view-transition-name: none;
			}
		}
	}

	[data-role="dialog"] {
		all: unset;
		view-transition-name: match-element;
		@apply fixed inset-0 hidden scrollbar-thin overflow-x-auto scroll-smooth text-stone-300;

		&[open] {
			@apply grid snap-mandatory;
			@variant max-md {
				@apply snap-y grid-flow-row auto-rows-[30%];
			}
			@variant md {
				@apply snap-x auto-cols-[100%] grid-flow-col;
			}
		}

		enhanced\:img {
			view-transition-class: carousel-img;
			view-transition-name: var(--view-transition-name);
			@apply max-h-4/5 min-h-0 max-w-4/5 min-w-0 object-contain;
		}

		&::backdrop {
			view-transition-name: carousel-backdrop;
			@apply -z-10 bg-stone-950/70;
		}

		[data-role="arrow"] {
			@apply fixed top-1/2 grid h-1/2 w-1/12 -translate-y-1/2 cursor-pointer place-items-center;

			&[data-direction="left"] {
				@apply left-0;
			}
			&[data-direction="right"] {
				@apply right-0;
			}
		}
	}

	::view-transition-group(.carousel-img) {
		@apply z-10;
	}
</style>
