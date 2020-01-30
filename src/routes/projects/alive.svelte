<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import BlogLink from "../../components/BlogLink";
  import Back from "../../components/Back"
  import { alive as blogs } from "../../data/data"
</script>

<main
  class="overflow-auto flex justify-center items-stretch md:items-center flex-col"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 md:w-2/3 max-h-full text-justify">
    <p class="my-4">
      These are projects that are either completed or still in operation. They might not all be software
      or sofware-related but they are what I do and I'm pretty proud of most of them. I made them into
      blog posts for linkability and organisation.
    </p>
    {#each blogs as blog}
      <BlogLink {...blog} />
    {/each}
    <Back />
  </div>
</main>
