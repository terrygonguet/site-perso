<script>
  import RadialNavigation from "../components/RadialNavigation";

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

<main class="overflow-hidden flex-center">
  <RadialNavigation />
  <!-- Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
</main>
