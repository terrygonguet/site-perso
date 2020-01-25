<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
</script>

<main
  class="overflow-hidden flex-center relative flex-col text-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <p class="m-4">Content and radial navigation by Terry Gonguet.</p>
  <p class="m-4">
    This website has been made with the help of
    <a href="https://sapper.svelte.dev/" class="a">
      a really cool framework named Sapper
    </a>
    !
  </p>
  <p class="m-4">
    Some icons made by
    <a
      href="https://www.flaticon.com/authors/chanut"
      title="Chanut"
      target="_blank"
      class="a">
      Chanut
    </a>
    from
    <a
      href="https://www.flaticon.com/"
      title="Flaticon"
      target="_blank"
      class="a">
      Flaticon
    </a>
  </p>
  <a href="." class="back">Back</a>
</main>
