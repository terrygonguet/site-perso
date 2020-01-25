<script>
  import { fly } from "svelte/motion";
  export let data = [];
</script>

<ul
  in:fly={{ x: -100, duration: 300 }}
  out:fly={{ x: 100, duration: 300, delay: 300 }}>
  {#each data as item}
    <li>{item.label}</li>
  {/each}
</ul>
