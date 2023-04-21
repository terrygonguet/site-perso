<script lang="ts">
	import type { LocalizedString } from "typesafe-i18n"

	type Text = () => LocalizedString
	type Link = { html: Text; href: Text }

	export let fragments: { [i: number]: Text | Link } = {}
	export let as = "p"

	$: arr = Object.values(fragments)

	function isLink(fragment: Text | Link): fragment is Link {
		return "href" in fragment && "html" in fragment
	}
</script>

<svelte:element this={as}>
	{#each arr as fragment}
		{#if isLink(fragment)}
			<A href={fragment.href()}>{@html fragment.html()}</A>
		{:else}
			{@html fragment()}
		{/if}
	{/each}
</svelte:element>
