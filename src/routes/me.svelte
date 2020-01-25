<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<main
  class="overflow-hidden flex-center relative flex-col text-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <a href="." class="back">Back</a>
</main>
