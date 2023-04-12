<script lang="ts">
	import type { LocalizedString } from "typesafe-i18n"

	export let fragments: (() => LocalizedString)[] = []
	export let links: { [index: number]: [url: string, target_blank: boolean] } = {}
</script>

<p>
	{#each fragments as fragment, i}
		{@const link = links[i]}
		{#if link}
			<A href={link[0]} target={link[1] ? "_blank" : "_self"}>{@html fragment()}</A>
		{:else}
			{@html fragment()}
		{/if}
	{/each}
</p>
