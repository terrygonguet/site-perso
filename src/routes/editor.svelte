<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back"
  import { tick, onMount } from "svelte"

  let content, textarea

  onMount(async () => {
    let url = new URL(location)
    let toLoad = url.searchParams.get("blog")
    if (toLoad && confirm("Overwrite current contents ?")) {
      try {
        let blog = await fetch(`blog/${toLoad}.json`).then(r => r.json())
        let sanitized = blog.content
          .replace(/\\"/g, '"')
          .replace(/  /g, "\n  ")
          .replace(/(\S)(<p)/g, "$1\n<p")
        content = sanitized
      } catch (err) {
        content = localStorage.getItem("blog") || `<p class="my-4"></p>`
      } finally {
        url.searchParams.delete("blog")
        history.replaceState(null, "", url)
      }
    } else
      content = localStorage.getItem("blog") || `<p class="my-4"></p>`
  })

  async function onkeydown(e) {
    let arr = content.split("")
    let { selectionStart: ss, selectionEnd: se } = textarea
    let nextPlace = ss, toInsert = ""

    if (e.key == "Tab") { // Tab
      e.preventDefault()
      toInsert = "  "
      nextPlace = ss + 2
    } else if (e.key == `"`) { // "
      e.preventDefault()
      if (arr[ss] != `"`)
        toInsert = `""`
      nextPlace = ss + 1
    } else if (e.key == "<" && e.ctrlKey) { // Ctrl-<
      e.preventDefault()
      toInsert = "<></>"
      nextPlace = ss + 1
    } else if (e.key.toLowerCase() == "a" && e.altKey) { // Alt-A
      e.preventDefault()
      toInsert = `<a href=\"\" ${e.shiftKey ? 'target="_blank" ' : ""}class=\"a\"></a>`
      nextPlace = ss + 9
    } else if (e.key.toLowerCase() == "c" && e.altKey) { // Alt-C
      e.preventDefault()
      toInsert = `<code class="inline-code"></code>`
      nextPlace = ss + 26
    } else if (e.key == "i" && e.ctrlKey) { // Ctrl-I
      e.preventDefault()
      toInsert = "<em></em>"
      nextPlace = ss + 4
    } else if (e.key == "s" && e.ctrlKey) { // Ctrl-S
      e.preventDefault()
      toInsert = "<strong></strong>"
      nextPlace = ss + 8
    } else if (e.key == "p" && e.ctrlKey) { // Ctrl-P
      e.preventDefault()
      toInsert = `<picture>\n  <source srcset="" type="" />\n  <img src="" alt="" />\n</picture>`
      nextPlace = ss + 53
    } else if (e.key == "Enter" && e.ctrlKey) { // Ctrl-Enter
      e.preventDefault()
      toInsert = `\n<p class="my-4"></p>`
      nextPlace = ss + 17
    } else if (e.key == "e" && e.ctrlKey) { // Ctrl-E
      e.preventDefault()
      let sanitized = content.replace(/\t|\n/g, "").replace(/"/g, "\\\"")
      navigator.clipboard.writeText(sanitized).then(() => alert("Copied !")).catch(alert)
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
  grid-template-areas: "editor" "preview" "back";
  grid-gap: 1rem;
}

textarea {
  resize: none;
}

@media (min-width: 768px) {
  main {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "editor preview"
      "back   back";
  }
}
</style>

<main
  class="overflow-auto p-4"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <textarea
    bind:value={content}
    class="bg-dark border border-gray-900 p-2 font-mono"
    on:keydown={onkeydown}
    bind:this={textarea}
    style="grid-area:editor;min-height:15rem;" />
  <div class="overflow-auto border border-gray-900 text-justify" style="grid-area:preview">
    {@html content}
  </div>
  <Back _style="grid-area:back;margin:0" />
</main>
