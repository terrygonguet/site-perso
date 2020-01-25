<script>
  import RadialNavigation from "../components/RadialNavigation";
  import StackNavigation from "../components/StackNavigation";
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  let w = 0;
  $: isSmall = w <= 768;
</script>

<svelte:head>
  <title>Terry Gonguet - Home</title>
</svelte:head>

<main
  class="overflow-hidden flex-center relative"
  in:fly={{ easing: cubicInOut, duration: 200, delay: 200, y: -500 }}
  out:fly={{ easing: cubicInOut, duration: 200, y: -500 }}
  bind:clientWidth={w}>
  {#if isSmall}
    <StackNavigation />
  {:else}
    <RadialNavigation _style="width: 85vmin;height: 85vmin;" />
  {/if}
  <a href="credits" class="absolute m-4 bottom-0 text-center a">Credits</a>
</main>
