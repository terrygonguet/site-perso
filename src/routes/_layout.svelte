<script>
  import Header from "../components/Header";

  export let segment;
</script>

<style>
  /* shimport css */

  div {
    display: grid;
    grid-template-rows: auto 1fr 0;
  }
</style>

<div class="h-screen bg-light">
  <Header {segment} />
  <slot />
</div>
