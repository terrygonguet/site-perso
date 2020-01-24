<script>
  import RadialNavigation from "../components/RadialNavigation";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Terry Gonguet - Home</title>
</svelte:head>

<main
  class="overflow-hidden flex-center relative"
  in:fly={{ easing: cubicInOut, duration: 200, delay: 200, y: -500 }}
  out:fly={{ easing: cubicInOut, duration: 200, y: -500 }}>
  <RadialNavigation />
  <a
    class="text-center absolute text-gray-700"
    style="bottom:1rem;"
    href="credits">
    Credits
  </a>
</main>
