<script>
  const birth = [11, 3, 1996]; // month is 0 based !!
  const now = new Date();
  let age = now.getFullYear() - birth[2];

  // if we're before our birth day we're 1 year younger
  if (
    now.getMonth() < birth[1] ||
    (now.getMonth() == birth[1] && now.getDate() < birth[0])
  )
    age--;
</script>

<svelte:head>
  <title>Terry Gonguet - Home</title>
</svelte:head>

<main class="overflow-hidden">yo</main>
