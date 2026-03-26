<script lang="ts">
	import { page } from "$app/state"
	import { Theme } from "$lib/theme"
	import Toggle from "$lib/components/Toggle.svelte"

	interface Props {
		class?: string
	}

	let { class: class_list = "" }: Props = $props()
	let { t } = $derived(page.data)

	function onToggle(evt: Event) {
		evt.preventDefault()
		document.startViewTransition(async () => {
			Theme.toggle()
			await cookieStore.set("override-theme", Theme.current)
		})
	}
</script>

<label class={class_list}>
	{@html t("general", "mode_light")}
	<Toggle id="theme" checked={Theme.current == "dark"} onclick={onToggle} />
	{@html t("general", "mode_dark")}
</label>

<style lang="postcss">
	@reference "@appcss";

	label {
		--color-toggle-track-on: theme(--color-stone-700);
		--color-toggle-track-off: theme(--color-stone-400);
		@apply flex cursor-pointer items-center gap-2;
		@variant motion-safe {
			view-transition-name: toggle-theme;
		}
	}
</style>
