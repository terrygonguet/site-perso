<script lang="ts">
	import { tweened } from "svelte/motion"
	import Close from "~icons/ri/close-fill"
	import ArrowRight from "~icons/ri/arrow-right-s-line"
	import ArrowLeft from "~icons/ri/arrow-left-s-line"

	export let images: { src: string; alt: string }[] = []

	let open = false
	let dialog: HTMLDialogElement
	let miniature: HTMLImageElement
	let gallery: HTMLElement

	$: first = images[0]
	$: hasMultiple = images.length > 1

	const scale = tweened<{ x: number; y: number }>({ x: 1, y: 1 }, { duration: 200 })
	const translate = tweened<{ x: number; y: number }>({ x: 0, y: 0 }, { duration: 200 })

	function show() {
		document.body.style.top = -window.scrollY + "px"
		document.body.classList.add("noscroll")
		dialog.showModal()
		gallery.scrollTo({ left: 0, behavior: "instant" as any })
		const miniatureRect = miniature.getBoundingClientRect()
		const imageRect = gallery.querySelector("img")!.getBoundingClientRect()
		scale.set(
			{
				x: miniatureRect.width / imageRect.width,
				y: miniatureRect.height / imageRect.height,
			},
			{ duration: 0 },
		)
		translate.set(
			{
				x: miniatureRect.x - imageRect.x,
				y: miniatureRect.y - imageRect.y,
			},
			{ duration: 0 },
		)
		open = true
		$scale = { x: 1, y: 1 }
		$translate = { x: 0, y: 0 }
	}

	async function close() {
		const miniatureRect = miniature.getBoundingClientRect()
		const { width } = gallery.getBoundingClientRect()
		const index = Math.round(gallery.scrollLeft / width)
		const image = gallery.querySelectorAll("img")[index]
		if (!image) return
		const imageRect = image.getBoundingClientRect()
		$scale = {
			x: miniatureRect.width / imageRect.width,
			y: miniatureRect.height / imageRect.height,
		}
		await translate.set({
			x: miniatureRect.x - imageRect.x,
			y: miniatureRect.y - imageRect.y,
		})
		dialog.close()
		// reset
		$scale = { x: 1, y: 1 }
		$translate = { x: 0, y: 0 }
	}

	function onClose() {
		open = false
		const scrollY = parseInt(document.body.style.top)
		document.body.classList.remove("noscroll")
		window.scrollTo({ top: -scrollY || 0, behavior: "instant" as any })
	}

	function onKeydown(evt: KeyboardEvent) {
		switch (evt.key) {
			case "Escape":
				evt.preventDefault()
				close()
				break
			case "ArrowLeft":
				prev()
				break
			case "ArrowRight":
				next()
				break
		}
	}

	function next() {
		if (hasMultiple) {
			const scrollX = gallery.scrollLeft
			const { width } = gallery.getBoundingClientRect()
			gallery.scrollTo({ left: scrollX + width })
		} else close()
	}

	function prev() {
		if (hasMultiple) {
			const scrollX = gallery.scrollLeft
			const { width } = gallery.getBoundingClientRect()
			gallery.scrollTo({ left: scrollX - width })
		} else close()
	}
</script>

<button class="{$$props.class} relative" on:click={show}>
	<img bind:this={miniature} src={first.src} alt={first.alt} />
</button>

<dialog bind:this={dialog} on:close={onClose} class:!bg-opacity-75={open} on:keydown={onKeydown}>
	<button class="flex-1" style:grid-area="space " on:click={close}><span /></button>
	<button id="prev" style:grid-area="prev" on:click={prev}>
		{#if hasMultiple}<ArrowLeft />{:else}<span />{/if}
	</button>
	<div
		class="grid overflow-x-auto snap-x snap-mandatory p-2 lg:p-0 gap-2"
		style:grid-template-columns="repeat({images.length},100%)"
		style:grid-area="image"
		bind:this={gallery}
	>
		{#each images as { src, alt }, i (src)}
			<div class="relative snap-center">
				<img
					loading={i == 0 ? "eager" : "lazy"}
					style:--tw-scale-x={$scale.x}
					style:--tw-scale-y={$scale.y}
					style:--tw-translate-x="calc({$translate.x}px - 50%)"
					style:--tw-translate-y="calc({$translate.y}px - 50%)"
					{src}
					{alt}
				/>
			</div>
		{/each}
	</div>
	<button id="next" style:grid-area="next" on:click={next}>
		{#if hasMultiple}<ArrowRight />{:else}<span />{/if}
	</button>
	<button class="flex-1 justify-center" style:grid-area="close" on:click={close}>
		<Close />
	</button>
</dialog>

<style lang="postcss">
	dialog {
		@apply absolute top-0 left-0 p-0 m-auto w-screen h-full max-w-full max-h-full;
		@apply text-white bg-black bg-opacity-0 transition-colors duration-200 overflow-hidden;
	}
	dialog[open] {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr auto auto;
		grid-template-areas:
			"space space"
			"image image"
			"prev next"
			"close close";
	}

	dialog img {
		@apply transform-gpu absolute top-1/2 left-1/2 max-w-full max-h-full;
		transform-origin: top left;
	}

	dialog button {
		@apply p-4 grid items-center;
	}
	dialog button > :global(*) {
		@apply w-12 h-12 transform transition opacity-50;
	}
	dialog button:hover > :global(*) {
		@apply scale-150 opacity-100;
	}

	#prev {
		@apply justify-end;
		padding-inline-start: 2rem;
	}
	#next {
		@apply justify-start;
		padding-inline-end: 2rem;
	}

	@screen lg {
		dialog[open] {
			grid-template-columns: minmax(auto, 15rem) 1fr minmax(auto, 15rem);
			grid-template-rows: minmax(auto, 5rem) 1fr minmax(auto, 5rem);
			grid-template-areas:
				"space space space"
				"prev  image next"
				"close close close";
		}
	}

	:global(body.noscroll) {
		@apply fixed left-0 w-full overflow-hidden;
	}
</style>
