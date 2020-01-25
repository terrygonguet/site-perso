<script>
  export let segment;
</script>

<style>
  /* shimport css */
  div {
    display: grid;
    grid-template-rows: 100%;
  }
</style>

<div class="h-full bg-dark text-white text-lg">
  <slot />
</div>
