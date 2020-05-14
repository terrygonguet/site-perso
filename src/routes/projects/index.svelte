<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import Back from "~components/Back.svelte"
</script>

<main
	class="overflow-auto flex-center"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<Back />
</main>
