<script lang="ts">
	import { user_presence } from "$lib/state.svelte"

	interface Props {
		user?: string
		sld?: string
		tld?: string
		revealed?: boolean
	}
	let { user = "terry", sld = "gonguet", tld = "com" }: Props = $props()

	let revealed = $derived(user_presence.has_interacted)
	let blanked = $derived(`${"█".repeat(user.length)}@${"█".repeat(sld.length)}.${"█".repeat(tld.length)}`)
	let email = $derived(revealed ? `${user}@${sld}.${tld}` : blanked)
	let mailto = $derived(`mailto:${revealed ? email : "spam@protection.invalid"}`)
</script>

<a href={mailto} class="anchor font-mono">{email}</a>
