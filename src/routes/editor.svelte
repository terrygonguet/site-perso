<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back"
  import { tick, onMount } from "svelte"

  let content, textarea

  onMount(() => {
    content = localStorage.getItem("blog") || "<article>\n\t\n</article>"
  })

  async function onkeydown(e) {
    let arr = Array.from(content)
    let { selectionStart: ss, selectionEnd: se } = textarea
    let nextPlace = ss, toInsert = e.key

    if (e.key == "Tab") {
      e.preventDefault()
      toInsert = "\t"
      nextPlace = ss + 1
    } else if (e.key == "\"") {
      e.preventDefault()
      toInsert = "\"\""
      nextPlace = ss + 1
    } else if (e.key == "<" && e.ctrlKey) {
      e.preventDefault()
      toInsert = "<>"
      nextPlace = ss + 1
    } else if (e.key == ">" && e.ctrlKey) {
      e.preventDefault()
      toInsert = "</>"
      nextPlace = ss + 2
    }


    if (e.defaultPrevented) {
      arr.splice(ss, se - ss, toInsert)
      content = arr.join("")
      await tick()
      textarea.selectionStart = textarea.selectionEnd = nextPlace
    }
    localStorage.setItem("blog", content)
  }
</script>

<style>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;
}

textarea {
  resize: none;
}
</style>

<main
  class="overflow-auto p-4"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <textarea bind:value={content} class="bg-dark border border-gray-500 p-2" on:keydown={onkeydown} bind:this={textarea} />
  <div class="overflow-auto border border-gray-500">
    {@html content}
  </div>
  <Back _style="grid-column: span 2" />
</main>
