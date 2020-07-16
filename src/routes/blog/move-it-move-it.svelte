<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["project","svelte","entrepreneur","tech","development","web"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - I like to move it move it</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">I like to move it move it</h1>
		<h3 class="text-accent-light text-base">{dateFormatter.format(new Date("2020-03-18"))}</h3>
		
		
		<div class="mb-8" />

		<p class="my-4">I just deployed the <a href="https://interestingby.design/" target="_blank" class="a">new website</a> for Interesting By Design, my <a href="blog/lets-be-entrepreneur" class="a">current entrepreneurial project</a> and I have things to say about it. The development itself was pretty straightforward with only one major rework and a few months of delay because we were bad at prioritizing. As you would guess I did 99% of the code and I had a lot of fun doing it, although I would have liked to work with someone else just for the experience. <a href="https://clement.interestingby.design/" class="a" target="_blank">One partner</a> wrote the content, <a href="https://www.manonhalvadjian.fr/" target="_blank" class="a">a friend</a> helped us design the website and I made it work.</p>	<p class="my-4">Now for the interesting part: I <em>love</em> animating things on a website. It's got all the usual good things of the web like linkability and portability because it's just a website but damn is it a <em>tasty</em> website. The original design was mostly static because making things move is hard so our designer friend just drew up some SVGs to put in sections but I wanted more. I wanted the website to show off what we could do, to vouch for our services even if we don't have a huge portfolio yet. All that animation work was made possible by <a href="https://svelte.dev" target="_blank" class="a">Svelte</a>, my favorite front end framework and the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank" class="a">transition CSS property</a>. Transition is amazing, it takes 90% of the complex work out of animations and allows you to make extremely declarative and performant interfaces. For instance take the following tow buttons:</p>	<div class="flex justify-center flex-col md:flex-row">	 <button class="px-4 py-2 m-8 bg-blue-500 hover:bg-red-500 font-semibold">Example 1</button>	 <button class="px-4 py-2 m-8 bg-blue-500 hover:bg-red-500 font-semibold transition-color duration-500 ease-in-out">Example 2</button>
</div>	<p class="my-4">The only difference between them is that the second has the CSS <code class="inline-code">transition: background-color 0.5s ease-in-out</code> applied to it. This one line makes it <strong><em>so much smoother</em></strong> and easier on the eyes in my opinion, it just makes the whole website look better even if you didn't notice it consciously. The same effect would be possible to make with keyframes but significantly more involved. Other properties you can animate easily for great profit are opacity, any kind of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform" target="_blank" class="a">CSS transform</a>, anything with a color and more!</p>	<div class="flex justify-center flex-col md:flex-row">	 <button class="px-4 py-2 m-8 bg-accent-light hover:opacity-25 font-semibold transition-opacity duration-300 ease-in-out">Opacity</button>	 <button class="px-4 py-2 m-8 bg-accent-light transform hover:-translate-y-1/2 font-semibold transition-transform duration-300 ease-in-out">Translation</button>	 <button class="px-4 py-2 m-8 bg-accent-light transform hover:rotate-180 font-semibold transition-transform duration-300 ease-in-out">Rotation</button>
</div>	<p class="my-4">Couple this power with a declarative reactive framework like Svelte and it become very easy to build jazzy animations that are easy to adapt to all kind of screens. I particularly love Svelte's <code class="inline-code">&lt;svelte:window bind:innerWidth=&#123;w&#125; /&gt;</code>. It does exactly what it says on the tin: it binds the width of the window (in px) to the variable named <code class="inline-code">w</code> so you can use it anywhere in your template or code and it will have the right value. Svelte can bind a whole bunch of properties like that, not only from the <code class="inline-code">window</code> object but from almost any element (notably you can get everything you can think of from the <code class="inline-code">&lt;video&gt;</code> element). If that doesn't sound cool to you it means you haven't suffered through the dark days of jQuery; if it does sound cool you can <a href="https://svelte.dev/tutorial/text-inputs" target="_blank" class="a">read more about it</a>.</p>	<p class="my-4">But enough fangirling over Svelte's <a href="https://everydeveloper.com/developer-experience/" target="_blank" class="a">DX</a>, I got some feedback saying the website was almost <em>too animated</em>, that it was disorienting. I plaid guilty, that's a tradeoff I am willing to make to show off that we can make shiny things. I do feel a bit guilty about that however because nowaday we can detect if the user wants to see flashy animations or not through the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" class="a font-mono">prefers-reduced-motion</a> media query and I <em>could</em> disable most of them according to user preference. I will probably end up implementing it because accessibilty is important and I like to do my job properly. There are other problems with the website but as we all know, a project is never finished.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=move-it-move-it" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
