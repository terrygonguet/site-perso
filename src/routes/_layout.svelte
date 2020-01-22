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

<div class="min-h-screen bg-dark">
  <slot />
</div>
