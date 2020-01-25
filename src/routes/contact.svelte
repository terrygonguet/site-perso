<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Terry Gonguet - Contact</title>
</svelte:head>

<main
  class="overflow-hidden flex-center relative flex-col text-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <h1 class="text-2xl md:text-4xl my-4">
    Don't hesitate to contact me for absolutely anything ✉👍🏻
  </h1>
  <a href="mailto:terry@gonguet.com" target="_blank" class="my-4 a md:text-2xl">
    terry@gonguet.com
  </a>
  <h2 class="text-2xl md:text-4xl my-2">Other platforms</h2>
  <p class="m-2">
    I host most of my code on
    <a href="https://github.com/terrygonguet?tab=repositories" class="a">
      Github
    </a>

  </p>
  <p class="m-2">
    Sometimes I try to make
    <a href="https://www.mozilla.org/firefox/" class="a">my browser</a>
    do more things and put these addons on
    <a href="https://addons.mozilla.org/en-US/firefox/user/13343330/" class="a">
      addons.mozilla.org
    </a>

  </p>
  <a href="." class="back">Back</a>
</main>
