<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;
    const res = await this.fetch(`blog/${slug}.json`);
    const blog = await res.json();

    if (res.ok) {
      return { ...blog, slug };
    } else this.error(res.status, new Error(blog.message))
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { dateFormatter } from "../../tools";
  import Back from "../../components/Back"

  export let slug = "missing"
  export let title = "Missing blog data"
  export let date = "0001-01-01"
  export let content = "<p>Missing blog data</p>"
  export let tags = []
  export let displayDate = false

  $: dateText = displayDate || dateFormatter.format(new Date(date))

  let dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
  <title>Terry Gonguet - Blog - {title}</title>
</svelte:head>

<main
  class="overflow-auto flex-center flex-col"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <article class="m-4 max-w-1k max-h-full text-justify">
    <h1 class="text-4xl">{title}</h1>
    <h3 class="text-accent-light text-base mb-8">{dateText}</h3>
    {@html content}
    <Back />
    {#if dev}
      <a href="editor?blog={slug}" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
    {/if}
  </article>
</main>
