<script lang="ts">
	import { page } from "$app/state"
	import Toggle from "$lib/components/Toggle.svelte"

	interface Props {
		class?: string
	}

	let { class: class_list = "" }: Props = $props()
	let { i18n } = $derived(page.data)

	function onToggle(evt: Event) {
		evt.preventDefault()
		document.startViewTransition(async () => {
			await i18n.setLang(i18n.lang == "fr" ? "en" : "fr")
			await cookieStore.set("override-lang", i18n.lang)
		})
	}
</script>

<label class={class_list}>
	English <Toggle id="lang" checked={i18n.lang == "fr"} onclick={onToggle} /> Français
</label>

<style lang="postcss">
	@reference "@appcss";

	label {
		@apply flex cursor-pointer items-center gap-2;
		@variant motion-safe {
			view-transition-name: toggle-lang;
		}
	}
</style>
