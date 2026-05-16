<script lang="ts">
	import { page } from "$app/state"
	import { Theme } from "$lib/theme"

	interface Props {
		class?: string
	}

	let { class: wrapper_classes = "" }: Props = $props()
	let { t } = $derived(page.data)

	function set_theme(theme: (typeof Theme)["current"]) {
		document.startViewTransition(async () => {
			Theme.current = theme
			await cookieStore.set("override-theme", Theme.current)
		})
	}
</script>

<div id="theme-changer" class={wrapper_classes}>
	<input
		type="radio"
		id="theme-changer-light"
		name="theme"
		value="light"
		checked={Theme.current == "light"}
		onchange={() => set_theme("light")}
	/>
	<label for="theme-changer-light">{@html await t("general", "mode_light")}</label>
	<input
		type="radio"
		id="theme-changer-dark"
		name="theme"
		value="dark"
		checked={Theme.current == "dark"}
		onchange={() => set_theme("dark")}
	/>
	<label for="theme-changer-dark">{@html await t("general", "mode_dark")}</label>
</div>

<style lang="postcss">
	@reference "@appcss";

	:where(#theme-changer) {
		@apply flex border-2 border-stone-700 dark:border-stone-400;

		&:has(input:focus-visible) {
			@apply outlined;
		}

		@variant motion-safe {
			view-transition-name: theme-changer;
		}
	}

	label {
		@apply flex-1 cursor-pointer px-2 py-1 text-center transition-colors;

		input:checked + & {
			@apply bg-stone-700 text-white dark:bg-stone-400 dark:text-black;
		}
	}

	input {
		position: absolute;
		clip-path: circle(0);
	}
</style>
