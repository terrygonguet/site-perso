<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("blogs")
    const blogs = await res.json()

    if (res.ok) return { blogs }
    else this.error(res.status, new Error(blogs.message))
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import BlogLink from "../../components/BlogLink";
  import Back from "../../components/Back"

  export let blogs = []

  $: sortedBlogs =
    blogs
      .map(b => ({ ...b, jsdate: new Date(b.date) }))
      .sort((a, b) => a.jsdate > b.jsdate ? -1 : 1)
  $: first = sortedBlogs[0]
  $: notFirst = sortedBlogs.slice(1)
</script>

<svelte:head>
  <title>Terry Gonguet - Blog</title>
</svelte:head>

<main
  class="overflow-auto flex justify-center items-stretch md:items-center flex-col"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 md:w-2/3 max-h-full">
    <h1 class="text-2xl my-2">Latest</h1>
    <BlogLink {...first} />
    {#if notFirst.length}
      <h1 class="text-2xl mt-4">Older</h1>
      <hr class="mb-4 mt-2">
      {#each notFirst as blog}
        <BlogLink {...blog} />
      {/each}
    {/if}
    <Back />
  </div>
</main>
