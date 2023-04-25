<script lang="ts">
	import type { LocalizedString } from "typesafe-i18n"
	import Printer from "~icons/ri/printer-line"

	type Text = () => LocalizedString
	type Link = { html: Text; href: Text }
	type Button = { html: Text; button: Text }
	type Fragment = Text | Link | Button

	type Block =
		| { type: "html"; html: string }
		| { type: "link"; html: string; href: string }
		| { type: "button"; appearance: "button" | "anchor"; html: string }
		| { type: "print"; html: string }

	export let fragments: { [i: number]: Fragment }
	export let as = "p"

	$: arr = Object.values(fragments)
	$: blocks = arr.flatMap(fragment2block)

	function fragment2block(fragment: Fragment): Block[] {
		if ("href" in fragment)
			return [{ type: "link", html: fragment.html(), href: fragment.href() }]
		if ("button" in fragment) {
			const button = fragment.button()
			switch (button) {
				case "print":
					return [{ type: "print", html: fragment.html() }]
				case "anchor":
					return [{ type: "button", html: fragment.html(), appearance: "anchor" }]
				default:
					return [{ type: "button", html: fragment.html(), appearance: "button" }]
			}
		}
		return [{ type: "html", html: fragment() }]
	}
</script>

<svelte:element this={as} {...$$props}>
	{#each blocks as block}
		{#if block.type == "link"}
			<A href={block.href}>{@html block.html}</A>
		{:else if block.type == "button"}
			<Button on:click appearance={block.appearance}>{@html block.html}</Button>
		{:else if block.type == "print"}
			<Button on:click appearance="anchor" on:click={() => print()}
				><Printer /> {@html block.html}</Button
			>
		{:else if block.type == "html"}
			{@html block.html}
		{/if}
	{/each}
</svelte:element>
