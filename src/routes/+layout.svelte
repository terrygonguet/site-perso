<script lang="ts">
	import "@appcss"
	import "@fontsource-variable/open-sans"
	import { onNavigate } from "$app/navigation"

	let { children } = $props()

	onNavigate(navigation => {
		if (!document.startViewTransition) return

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

{@render children()}
