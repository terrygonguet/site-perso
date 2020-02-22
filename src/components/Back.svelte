<script>
export let _style = ""
</script>

<!-- TODO: Prefetch ? -->
<span style={_style} class="back">
  <span class="a cursor-pointer" on:click={() => history.back()}>Back</span>
  -
  <a href="." class="a">Home</a>
</span>