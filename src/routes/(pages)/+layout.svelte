<script>
	import Footer from "$lib/components/Footer.svelte"
	import { fade } from "svelte/transition"
</script>

<main class="grid grid-rows-[1fr_auto] gap-6 p-4" transition:fade={{ duration: 200 }}>
	<slot />
	<Footer />
</main>
