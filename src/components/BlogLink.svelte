<script>
  import { dateFormatter } from "../tools"

  export let title = "Missing title"
  export let date = "0001-01-01"
  export let slug = "missing-slug"

  let w
</script>

<style>
  a {
    background: var(--radial-bg-dark);
    display: grid;
    grid-template-columns: auto;
    grid-template-areas: "title" "date";
  }

  a:hover {
    background: var(--radial-bg-light);
  }

  .big {
    grid-template-columns: 1fr auto;
    grid-template-areas: "title date";
  }
</style>

<a href="blog/{slug}" class="p-4 m-2 items-center" bind:clientWidth={w} class:big={w > 700}>
  <span class="text-xl" style="grid-area:title">{title}</span>
  <span class="text-base text-accent-light" style="grid-area:date">{dateFormatter.format(new Date(date))}</span>
</a>