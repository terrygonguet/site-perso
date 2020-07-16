<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["dev","project","game","2D","abandonned"]
	
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Project Naga</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Project Naga</h1>
		<h3 class="text-accent-light text-base">December 2018</h3>
		
		
		<div class="mb-8" />

		<blockquote class="my-4 mx-auto md:w-2/3 p-4 bg-radial-dark">  <p>Ok hear me out: what if Snake... but it's a <a href="https://en.wikipedia.org/wiki/Dungeon_crawl#Video_games" target="_blank" class="a">dungeon crawler</a>.</p>  <footer class="text-right">— My brain, out of nowhere</footer></blockquote><p class="my-4">Sounds good right? It does take a bit of imagination to mix all the concepts of the two styles but I bet you can already see it in your head. Someone already had the idea to combine <a href="https://www.youtube.com/watch?v=E4vzdt4wTXc" target="_blank" class="a">Snake and Bus Simulator</a> so it can't be <em>that bad</em>.</p><p class="my-4">So I tried to make it, or at least a prototype.</p><p class="my-4">My plan was to make one "normal" level and a <a href="https://music.youtube.com/channel/UCDG_B8qavMbSkvwHLeDjC2Q" target="_blank">boss fight</a>. The game is grid-based with a very simple dungeon layout and an even simpler art style from a sprite sheet I found on <a href="https://itch.io/" target="_blank" class="a">Itch.io</a> and slightly modified. I use <a href="https://www.pixijs.com/" target="_blank" class="a">PIXI.js</a> for the graphics and a few other packages for things like vector math and stuff. Here's the first problem I had with this project: at the time, I couldn't find a robust, maintained and well documented <a href="https://en.wikipedia.org/wiki/Entity_component_system" target="_blank" class="a">ECS</a> librairy. They were all deal-breakingly lacking in some aspect so I ended up using a <a href="https://www.npmjs.com/package/geotic" target="_blank" class="a">random one</a> that at least managed to document all of its functionalities but at the time it wasn't the best idea I had (although it seems to have progressed a bit since then).</p><p class="my-4">Now let's talk gameplay. I couldn't just copy the mechanics of Snake exactly and build a dungeon around it (although I thought of trying that at first but it wouldn't be a dungeon crawler, just a weird Snake). My Snake doesn't die instanly when hitting his tail or a wall, he will first try to turn away from the obstacle even without player input; and if he is blocked on all sides he will lose some tail length and become ghostly for a little while to allow the player to get out of the problematic situation. Similarly, being attacked by enemies shortens the snake's tail until there is no more tail left, at wich point you will die. Otherwise the other rules of Snake apply: you can't stop and have to eat things (enemies) to grow longer. I'm actually pretty happy with how the snake behaves in my game but it wasn't the hardest part. Here's what it looks like.</p><picture>  <source srcset="img/md/naga.webp" type="image/webp" />  <img class="m-auto" src="img/md/naga.png" alt="A screenshot of the game" /></picture><p class="my-4">Turns out it's pretty hard to design enemies and environments for a movement system from 1976 and keep it fun. Maybe I could have done it if I kept at it (and I had a decent idea for a boss) but by then a few bad decisions from the start of the project were starting to become really annoying. I think the game feels too slow but speeding it up makes it almost uncontrolable so I decided to stop working on it. It was pretty fun while it lasted.</p><p class="my-4">Of course, all the code is on <a href="https://github.com/terrygonguet/naga" target="_blank" class="a">Github</a> and you can play it <a href="https://terry.gonguet.com/naga" target="_blank" class="a">here</a>. It might crash, I'm not entirely sure where I stopped.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=naga" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
