<script>
  import RadialNavigation from "../components/RadialNavigation";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

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

<main
  class="overflow-hidden flex-center relative"
  in:fly={{ easing: cubicInOut, duration: 200, delay: 200, y: -500 }}
  out:fly={{ easing: cubicInOut, duration: 200, y: -500 }}>
  <RadialNavigation />
  <a
    class="text-center absolute text-gray-700"
    style="bottom:1rem;"
    href="credits">
    Credits
  </a>
</main>
