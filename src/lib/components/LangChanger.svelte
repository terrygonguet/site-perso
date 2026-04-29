<script lang="ts">
	import { page } from "$app/state"

	interface Props {
		class?: string
	}

	let { class: wrapper_classes = "" }: Props = $props()

	let { i18n } = $derived(page.data)

	function set_lang(new_lang: string) {
		document.startViewTransition(async () => {
			await i18n.setLang(new_lang)
			await cookieStore.set("override-lang", new_lang)
		})
	}
</script>

<div id="lang-changer" class={wrapper_classes}>
	<input
		type="radio"
		id="lang-changer-en"
		name="lang"
		value="en"
		checked={i18n.lang == "en"}
		onchange={() => set_lang("en")}
	/>
	<label for="lang-changer-en">English</label>
	<input
		type="radio"
		id="lang-changer-fr"
		name="lang"
		value="fr"
		checked={i18n.lang == "fr"}
		onchange={() => set_lang("fr")}
	/>
	<label for="lang-changer-fr">Français</label>
</div>

<style lang="postcss">
	@reference "@appcss";

	:where(#lang-changer) {
		@apply flex border-2 border-amber-600;
		view-transition-name: lang-changer;

		&:has(input:focus-visible) {
			@apply outlined;
		}
	}

	label {
		@apply flex-1 cursor-pointer px-2 py-1 text-center transition-colors;

		input:checked + & {
			@apply bg-amber-600 text-black dark:bg-amber-600;
		}
	}

	input {
		position: absolute;
		clip-path: circle(0);
	}
</style>
