<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import Back from "~components/Back.svelte"
	import { tick, onMount } from "svelte"
	import { dateFormatter } from "~tools";

	let content = "", title = "", textarea,
		preview = false, dateText = dateFormatter.format(new Date())

	onMount(async () => {
		let url = new URL(location.toString())
		let toLoad = url.searchParams.get("blog")
		if (toLoad && confirm("Overwrite current contents ?")) {
			try {
				let blog = await fetch(`blog/${toLoad}.json`).then(r => r.json())
				let str = Array.isArray(blog.content) ? blog.content.join("\n") : blog.content
				content = str
				title = blog.title
			} catch (err) {
				console.error(err)
				content = localStorage.getItem("blog") || `<p class="my-4"></p>`
				title = localStorage.getItem("title")
			} finally {
				url.searchParams.delete("blog")
				history.replaceState(null, "", url.toString())
			}
		} else {
			content = localStorage.getItem("blog") || `<p class="my-4"></p>`
			title = localStorage.getItem("title")
		}
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
		}


		if (e.defaultPrevented) {
			arr.splice(ss, se - ss, toInsert)
			content = arr.join("")
			await tick()
			textarea.selectionStart = textarea.selectionEnd = nextPlace
		}
		localStorage.setItem("blog", content)
	}

	function general(e) {
		if (e.key == " " && e.ctrlKey) {
			e.preventDefault()
			preview = !preview
		} else if (e.key == "e" && e.ctrlKey) { // Ctrl-E
			e.preventDefault()
			const text = JSON.stringify(content.split("\n"))
			navigator.clipboard.writeText(text).then(() => alert("Copied !")).catch(alert)
		}
	}
</script>

<style>
textarea {
	resize: none;
}
</style>

<svelte:window on:keydown={general} />

<main
	class="overflow-auto p-4 flex flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<input
		type="text"
		bind:value={title}
		placeholder="Title"
		class:hidden={preview}
		on:change={() => localStorage.setItem("title", title)}
		class="text-3xl bg-bg text-text my-4" />
	<textarea
		bind:value={content}
		class="bg-bg border border-gray-900 p-2 font-mono flex-1"
		class:hidden={preview}
		on:keydown={onkeydown}
		bind:this={textarea} />
	<div
		class="text-justify flex-1 max-w-1k m-auto"
		class:hidden={!preview} >
		<h1 class="text-4xl">{title || "No title yet"}</h1>
		<h3 class="text-accent-light text-base">{dateText}</h3>
		{@html content}
	</div>
	<Back _style="grid-area:back;margin:0" />
</main>
