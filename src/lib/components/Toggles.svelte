<script lang="ts">
	import { page } from "$app/state"
	import Toggle from "$lib/components/Toggle.svelte"
	import { Theme } from "$lib/theme"

	let { t, i18n } = $derived(page.data)

	function onToggleLang(evt: Event) {
		evt.preventDefault()
		document.startViewTransition(async () => {
			await i18n.setLang(i18n.lang == "fr" ? "en" : "fr")
			await cookieStore.set("override-lang", i18n.lang)
		})
	}

	function onToggleTheme(evt: Event) {
		evt.preventDefault()
		document.startViewTransition(async () => {
			Theme.toggle()
			await cookieStore.set("override-theme", Theme.current)
		})
	}
</script>

<aside class="grid grid-cols-[auto_auto_auto] gap-x-2 gap-y-4">
	<label class="col-span-3 grid cursor-pointer grid-cols-subgrid items-center">
		<span class="text-end">English</span>
		<Toggle checked={i18n.lang == "fr"} onclick={onToggleLang} />
		<span>Français</span>
	</label>

	<label id="theme" class="col-span-3 grid cursor-pointer grid-cols-subgrid items-center">
		<span class="text-end">{@html t("general", "mode_light")}</span>
		<Toggle checked={Theme.current == "dark"} onclick={onToggleTheme} />
		<span>{@html t("general", "mode_dark")}</span>
	</label>
</aside>

<style lang="postcss">
	@reference "@appcss";

	label#theme {
		--color-toggle-track-on: theme(--color-stone-700);
		--color-toggle-track-off: theme(--color-stone-400);
	}
</style>
