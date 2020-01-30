<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;
    const res = await this.fetch(`blog/${slug}.json`);
    const blog = await res.json();

    if (res.ok) {
      return blog;
    } else this.error(res.status, new Error(blog.message))
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { dateFormatter } from "../../tools";
  import Back from "../../components/Back"

  export let title = "Missing blog data"
  export let date = "0001-01-01"
  export let content = "<p>Missing blog data</p>"
  export let tags = []
  export let displayDate = false

  $: dateText = displayDate || dateFormatter.format(new Date(date))
</script>

<main
  class="overflow-auto flex-center flex-col"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 md:w-2/3 max-h-full">
    <h1 class="text-4xl">{title}</h1>
    <h3 class="text-accent-light text-base">{dateText}</h3>
    <article class="mt-8">
      {@html content}
    </article>
    <Back />
  </div>
</main>
