<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back"
</script>

<main
  class="overflow-hidden flex-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 md:w-2/3 max-h-full overflow-auto text-justify">
    <p class="my-4">
      This is the page where all the information only relevant to you hiring me are.
      If what you're looking for isn't here it might be somewhere else on this site,
      you can look for it using my <a href="." class="a">amazing main menu</a>! If you can't do that
      you can always <a href="contact" class="a">ask me directly</a>, I respond pretty fast.
    </p>
    <Back />
  </div>
</main>
