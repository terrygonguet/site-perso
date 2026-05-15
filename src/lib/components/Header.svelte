<script lang="ts">
	import { page } from "$app/state"
	import Home from "virtual:icons/ri/home-2-fill"

	interface Props {
		title: string
		viewTransitionName?: string
	}

	let { title, viewTransitionName }: Props = $props()
	let { t } = $derived(page.data)
</script>

<header class="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 pt-8 text-2xl md:text-4xl">
	<a href="/" aria-label={await t("general", "title_home")} class="anchor"><Home /></a>
	<h1 class="text-4xl font-bold md:text-6xl" style:view-transition-name={viewTransitionName}>
		{@html title}
	</h1>
</header>
