<script>
  export let data = { label: "No data" };
</script>

{#if data.children}
  <span class="text-xl">{data.label}</span>
  <ul class="pl-4">
    {#each data.children as item}
      <li>
        <svelte:self data={item} />
      </li>
    {/each}
  </ul>
{:else}
  <a href={data.page} class="underline text-xl">{data.label}</a>
{/if}
