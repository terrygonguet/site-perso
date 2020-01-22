<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>EMO Kebab - Error {status}</title>
</svelte:head>

<h1 class="m-10 text-2xl font-bold text-center">{status}</h1>

<p class="m-10 text-xl font-semibold text-center">{error.message}</p>

{#if dev && error.stack}
  <pre class="m-auto">{error.stack}</pre>
{/if}
