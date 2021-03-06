<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["project","svelte","development","web","game"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Weird small games</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Weird small games</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2020-03-31"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">If anybody bothered to look through my (public) Github repos, one thing would becom pretty clear: I'm pretty bad at finishing things (and I <em>really</em> like JavaScript). There are a few attempts at games and tools in there that got a few weeks of attention at most then perished a slow death. Maybe I should archive them. Lately I've been trying much harder to finish whatever I start or at least get them to a "ok prototype" state, meaning that I'm not embarassed to show it to somebody with programming experience but it's in no way <em>finished</em>. The fact that I'm starting to get professional projects where it actually matters wether I finish them or not helps to develop this habit and it already resulted in two <a href="https://vitruvius.gonguet.com/" target="_blank" class="a">weird</a> and <a href="https://calibron12.gonguet.com/" target="_blank" class="a">small</a> games.</p>	<h2 class="text-2xl font-semibold mt-8">Project Vitruvius</h2>	<p class="my-4">The basic idea of <a href="https://vitruvius.gonguet.com/" target="_blank" class="a">this one</a> is: "What if two games, but <em>at the same time</em>?". I'm not crazy enough<sup><a href="blog/vitruvius#footnote-1" id="citation-1" class="a">[1]</a></sup> to make one person play two games at once so it's a coop game. One player plays Tetris on one side and the other plays Breakout next to it. I'm not going to explain how to play the games, that's what YouTube is for (among other less useful uses). The catch is that they're both playing on the <em>same</em> board: the Tetris blocks (called minos) can be broken by the Breakout ball from underneath. The goal is to get the ball from the bottom of the Breakout board all the way to the top of the Tetris one without losing first. I didn't test it properly with multiple people yet so it's most likely either impossible or trivial but I had fun making it and that's the main goal of most of my side projects.</p>	<p class="my-4">The name comes from the fact that you're only handling circles and squares and that reminded me of <a href="https://en.wikipedia.org/wiki/Vitruvian_Man" target="_blank" class="a">that drawing of a man</a> by <a href="https://en.wikipedia.org/wiki/Leonardo_da_Vinci" target="_blank" class="a">some guy</a>. I also discovered that <strong><em>every single thing about Tetris</em></strong> is designed and guidelined to death in <a href="https://www.dropbox.com/s/g55gwls0h2muqzn/tetris%20guideline%20docs%202009.zip?dl=0&file_subpath=%2F2009+Tetris+Design+Guideline.pdf#" target="_blank" class="a">an astonishly long document</a> and that was both helpful and a hindrance when making the game. My Tetris gameplay is undeniably better than it would have been but it's also about 17x more complicated.</p>	<p class="my-4">When it came time to make a user interface and menu, I obviously turned to HTML, there's no way I'm doing that with PIXI.js<sup><a href="blog/vitruvius#footnote-2" id="citation-2" class="a">[2]</a></sup>. I've wanted to properly learn <a href="https://reactjs.org/" target="_blank" class="a">React</a> for a while now so I tried to just put it in to control the menu navigation and in-game UI and it worked ok enough (helped by the fact that this project is using Babel for a completely unrelated reason) but as soon as I started writing it I gave up. I've been spoiled by <a href="https://vuejs.org/" target="_blank" class="a">Vue</a> and <a href="https://svelte.dev/" target="_blank" class="a">Svelte</a>, writing JSX after using those feels like using vanilla JS in the 2010's instead of JQuery: yes it works but it's so much more annoying. I did a quick estimate and realized that even if I kept React it wouldn't be anywhere near complex enough to really learn the tool so I just switched it up for Svelte and finished it in 2 evenings. I had to compile the <code class="inline-code">.svelte</code> files by hand but it's pretty easy and much more explicit than React's magic JSX that becomes JS. The Svelte UI also is about 5x smaller than just the React bundle.</p>	<h2 class="text-2xl font-semibold mt-8">The Calibron 12 puzzle</h2>	<p class="my-4">If you are reading this and not aware of the <a href="https://www.youtube.com/user/Vsauce" target="_blank" class="a">VSauce</a> YouTube channel you should drop everything and spend 1-2 days watching a weird man ramble on about fascinating things. Michael, the host, also makes videos on other channels like <a href="https://www.youtube.com/channel/UClq42foiSgl7sSpLupnugGA" target="_blank" class="a">D!NG</a> that are well worth your time as well. All that to say that at the end of <a href="https://www.youtube.com/watch?v=f6tHqOmIj1E&t=1278s" target="_blank" class="a">this video</a> he talks about the Calibron 12 puzzle and links <a href="https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf" target="_blank" class="a">a very extensive document</a> about it in the description. If you're at all interested by this you should watch his explanation about the puzzle, I won't do a better job. So I made <a href="https://calibron12.gonguet.com/" target="_blank" class="a">a web version</a> in a day because I enjoy making puzzles much <em>much</em> more than I enjoy solving them. There's not much more to say about it other than it was done pretty quickly and so the code isn't very clean.</p>	<p class="my-2 mt-16 text-base" id="footnote-1"><a href="blog/vitruvius#citation-1" class="a">[1]</a>: I'm not done making games yet, there's no telling what the future holds...</p>	<p class="my-2 text-base" id="footnote-2"><a href="blog/vitruvius#citation-2" class="a">[2]</a>: Incidentally this is one of my main gripes with using big engines like Unity or UE4, they have to have their own way of doing UI and it can't be as powerful or easy to use as HTML. I'm aware that embedding an entire layout engine in games just to display some pieces of text and health bars is not desirable (although that didn't stop some games from trying it out) but because I'm already on the web I can take advantage of it as much as I want!</p>
		<Back />
		{#if dev}
			<a href="editor?blog=vitruvius" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
