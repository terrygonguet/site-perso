<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<main
  class="flex-center flex-col text-lg"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <a href=".">Back</a>
</main>
