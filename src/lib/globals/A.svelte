<script lang="ts">
	import { LL } from "$i18n"

	export let href: string

	$: isExternal = $$props.target == "_blank" || href.startsWith("http")
</script>

<a {...$$props} {href}
	><slot />{#if isExternal}<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			aria-label={$LL.ariaExternalLink()}
			><g
				><path
					d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414l4.95-4.95Z"
				/><path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4v-2Z" /></g
			></svg
		>{/if}</a
>

<style lang="postcss">
	a {
		@apply text-orange-600 transition-colors;
	}
	a:hover {
		@apply text-orange-500 underline;
	}

	:is(.dark a) {
		@apply text-amber-600;
	}
	:is(.dark a:hover) {
		@apply text-amber-500;
	}

	svg {
		fill: black;
		width: 0.8em;
		height: 0.8em;
		display: inline-block;
		content: " ";
		background-size: contain;
		vertical-align: text-top;
		margin: 1px;
	}
	:is(.dark svg) {
		fill: white;
	}

	@media print {
		a {
			@apply !text-stone-700 underline;
		}
	}
</style>
