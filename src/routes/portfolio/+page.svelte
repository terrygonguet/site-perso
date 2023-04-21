<script lang="ts">
	import { LL } from "$i18n"
	import Footer from "$lib/comp/Footer.svelte"
	import { fade } from "svelte/transition"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.portfolio())}</title>
</svelte:head>

<main class="grid grid-rows-[1fr_auto] gap-6 p-4" transition:fade={{ duration: 200 }}>
	<div class="max-w-prose m-auto grid gap-8 text-lg text-justify">
		<div class="heading">
			<h2>Professional experience</h2>
			<h3>The important ones</h3>
		</div>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[
					{ src: "/gapsmoov-explore.png", alt: "Placeholder" },
					{ src: "/gapsmoov-compare.png", alt: "Placeholder" },
					{ src: "/gapsmoov-evaluate.png", alt: "Placeholder" },
				]}
			/>
			<h3>Gapsmoov (2020 - now)</h3>
			<p>
				In summer of 2020, with the help of two of my friends, I was contracted by two long
				time consultants turned entrepreneurs to build an e-learning app from scratch. They
				came from the world of business-focused cultural training and identified (correctly)
				that the existing solutions were old and painful to use so together we built
				Gapsmoov.
			</p>
			<p>
				They contracted the original design from someone else but I build the entire app
				solo with Sapper and KeystoneJS. I would be lying if I said that the code turned out
				perfect but we haven't felt the need to increase the team even though we're still
				adding features regularly!
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4 border border-stone-500"
				images={[
					{ src: "/munch-home.png", alt: "Placeholder" },
					{ src: "/munch-menu.png", alt: "Placeholder" },
					{ src: "/munch-checkout.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Get Munch (2019)</h3>
			<p>
				Two Irish friends and I started a late night snack delivery business in the suburbs
				of Dublin before it was cool (I swear we had the idea much before those apps became
				ubiquitous). I built the entire app out of Vue, Stripe & MongoDB and my friends
				handled the marketing like champs. Sadly we didn't manage to stay alive on account
				of us being young, poor and bad at business.
			</p>
		</section>

		<div class="heading">
			<h2>Volonteering</h2>
			<h3>Stuff that people actually use</h3>
		</div>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[
					{ src: "/repaircafe-home.png", alt: "Placeholder" },
					{ src: "/repaircafe-list.png", alt: "Placeholder" },
					{ src: "/repaircafe-form.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Repair Café Frangy</h3>
			<p>
				Repairing things is really fun, stimulating, sometimes surprisingly easy and it's
				even better when we do it together! Makes you wonder why we don't do it all the
				time. Weird. Repair Café is an organisation that helps local groups of people to
				repair their stuff together, and because online life is real life too that one
				needed a website so I made one!
			</p>
			<p>
				Then we noticed that keeping track of all those broken/fixed/dismantled gizmos is
				hard so now that website is also kind of a barebones, purpose built CMS. Data is
				currently stored in Notion so that we get a bunch of features for free.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[
					{ src: "/webext-home.png", alt: "Placeholder" },
					{ src: "/webext-playlist.png", alt: "Placeholder" },
					{ src: "/webext-interact.png", alt: "Placeholder" },
					{ src: "/webext-web0cc.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Browser extensions</h3>
			<p>
				One of the core reasons I love the web is that it is open <em>and editable</em> by default.
				Every website's UI and UX are ultimately just suggestions and with enough effort we can
				make it whatever we went it to be. Crucially, it can and probably should be different
				for every person. I'm going to make my modifications anyway, so I might as well make
				them available for everyone too.
			</p>
		</section>

		<div class="heading">
			<h2>Experiments</h2>
			<h3>Learning through making games</h3>
		</div>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[
					{ src: "/webcells-home.png", alt: "Placeholder" },
					{ src: "/webcells-butterfly.png", alt: "Placeholder" },
					{ src: "/webcells-hex.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Webcells</h3>
			<p>
				Hexcells is a trilogy of hexagonal puzzle games that sucked in my partner and I for
				a while. I liked the mechanics so much that I tried to make a web version with
				really polished UI/UX. Life happened and it's not entirely finished (yet!) but I'm
				pretty proud of what came of it.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[
					{ src: "/sokoban-game.png", alt: "Placeholder" },
					{ src: "/sokoban-edit.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Sokoban</h3>
			<p>
				Sokoban is that genre of puzzles where a guy pushes boxes onto objectives. I wanted
				to get better at animating things moving on the web so I made a very barebones
				prototype. Also it has a level editor but now way to play the levels 🤷‍♂️.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4 border border-stone-500"
				images={[{ src: "/multisweeper.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<h3>Multisweeper</h3>
			<p>
				What if Minesweeper but the mines have a color? Turns out it's quite fun! I'm pretty
				proud of the UX of this prototype (try clicking on cells that have the requisite
				amount of flags around them but still uncovered cells) even though the flagging is a
				bit rough with 4 colors.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[{ src: "/vitruvius.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<h3>Vitruvius</h3>
			<p>
				What if two games, but <em>at the same time</em>? One player plays Tetris on one
				side and the other plays Breakout next to it. The catch is that they're both playing
				<em>on the same board</em>: the Tetris blocks (called minos) can be broken by the
				Breakout ball from underneath. The goal is to get the ball from the bottom of the
				Breakout board all the way to the top of the Tetris one without losing first.
			</p>
			<p>
				The name comes from the fact that you're only handling circles and squares and that
				reminded me of that drawing of a man by some guy. I also discovered that <em
					>every single thing</em
				> about Tetris is designed and guidelined in excruciating detail in a surprisingly long
				document.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4 border border-stone-500"
				images={[
					{ src: "/calibron-start.png", alt: "Placeholder" },
					{ src: "/calibron-end.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Calibron 12</h3>
			<p>
				One day I found a video about an old puzzle. It linked to a very extensive document
				about that puzzle. I like making puzzles so now it's on the internet. The video (and
				its author) and the document are amazing and I'm not going to even try explain it
				better.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[{ src: "/naga.webp", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<h3>Naga</h3>
			<p>
				What if Snake, but it's a dungeon crawler? The idea is so absurd I had to see if I
				could make <em>anything</em> out of it. Turns out there may be something there but the
				prototype code got really annoying so I stopped. PIXI.js is cool though.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[{ src: "/solitaire.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<h3>Solitaire</h3>
			<p>
				I wanted to learn Vue 2 and I love making puzzle games. This one is pretty straight
				forward. Three friends and I lost 3 hours one evening just playing Solitaire to test
				this.
			</p>
		</section>
	</div>
	<Footer />
</main>

<style lang="postcss">
	.heading {
		@apply grid gap-2;
	}
	.heading h2 {
		@apply text-5xl text-center mt-8 border-b border-current p-3 w-4/5 mx-auto;
	}
	.heading h3 {
		@apply text-xl text-center text-stone-500;
	}

	section h3 {
		@apply text-xl font-bold;
	}

	p {
		@apply my-3;
	}
</style>
