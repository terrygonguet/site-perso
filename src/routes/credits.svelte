<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<main
  class="flex-center flex-col text-lg"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <p class="m-5">Content and radial navigation by Terry Gonguet.</p>
  <p class="m-5">
    This website has been made with the help of
    <a href="https://sapper.svelte.dev/" class="a">Sapper</a>
    , a really cool framework!
  </p>
  <p class="m-5">
    Icons made by
    <a href="https://www.flaticon.com/authors/chanut" title="Chanut" class="a">
      Chanut
    </a>
    from
    <a href="https://www.flaticon.com/" title="Flaticon" class="a">
      www.flaticon.com
    </a>
  </p>
</main>
