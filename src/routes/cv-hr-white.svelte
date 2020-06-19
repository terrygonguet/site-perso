<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { computeAge } from "~tools"

	let age = computeAge([11,3,1996])
</script>

<style>
a::after {
	display: none !important;
}

:global(:root) {
	--color-bg: #FFFFFF;
}
</style>

<svelte:head>
	<title>Terry Gonguet - CV Short</title>
</svelte:head>

<main
	class="overflow-auto flex-center text-black text-base bg-white" id="cv"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200, delay: 0 }}>
	<div class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-3xl font-semibold text-center my-4">CV</h1>
		<p class="my-4 text-xl font-semibold text-center">
			This is the version of my CV that is optimized for speed and brevity, if you want (much)
			more details you can follow <a href="cv" rel="prefetch" class="a">this link</a>.
		</p>
		<p class="my-4">
			My name is <a href="/me" rel="prefetch" class="a">Terry Gonguet</a>, I am {age} and I currently live in
			<a href="https://goo.gl/maps/2zJpbBUmVaWYa5xT9" class="a" target="_blank">Lyon</a>. I have a driving license but no car at hand.
			French<span class="md:hidden">🇫🇷</span> is my native tongue but I also am fluent in English<span class="md:hidden">🇬🇧</span>.
		</p>
		<div class="flex flex-col md:flex-row justify-around">
			<div class="my-4">
				<h2 class="text-xl md:text-2xl font-semibold my-2">Technologies I know</h2>
				<ul class="list-disc pl-4">
					<li>HTML/CSS</li>
					<li>JavaScript / NodeJS / <a href="https://www.typescriptlang.org/" target="_blank" class="a">TypeScript</a></li>
					<li>
						<a href="https://www.mongodb.com/" target="_blank" class="a">MongoDB</a> /
						<a href="https://expressjs.com/" target="_blank" class="a">Express</a>
					</li>
					<li><a href="https://vuejs.org/" target="_blank" class="a">VueJS</a></li>
					<li>
						<a href="https://svelte.dev/" target="_blank" class="a">Svelte</a> /
						<a href="https://sapper.svelte.dev/" target="_blank" class="a">Sapper</a>
					</li>
					<li><a href="https://www.pixijs.com/" target="_blank" class="a">PIXI.js</a></li>
					<li><a href="https://graphql.github.io/" target="_blank" class="a">GraphQL</a></li>
				</ul>
			</div>
			<div class="my-4">
				<h2 class="text-xl md:text-2xl font-semibold my-2">Experience</h2>
				<h3 class="text-lg md:text-xl">I made these websites/apps</h3>
				<ul class="list-disc pl-4">
					<li><a href="https://www.getmunch.ie/" target="_blank" class="a">getMunch.ie</a> (e-commerce)</li>
					<li><a href="https://interestingby.design/" target="_blank" class="a">IBD</a> (entrepreneurship)</li>
					<li>multiple personalised websites</li>
					<li>4 months internship at <a href="https://www.alpes-controles.fr/" target="_blank" class="a">Alpes Contrôles</a></li>
				</ul>
			</div>
		</div>
		<div class="py-4 flex flex-col md:items-center">
			<h2 class="text-xl md:text-2xl font-semibold my-2">Studies</h2>
			<ul class="list-disc pl-4">
				<li>
					<a href="img/xl/bachelor-honours.jpg" class="a">Bachelor of Science (honours)</a>
					computing in <a href="https://www.it-tallaght.ie/" target="_blank" class="a">IT Tallaght</a></li>
				<li>
					<a href="img/xl/license.jpg" class="a">License computing</a>
					in <a href="https://www.univ-smb.fr/" target="_blank" class="a">Université Savoie Mt Blanc</a>
				</li>
				<li>
					<a href="img/xl/dut.jpg" class="a">DUT INFO</a>
					in <a href="https://www.univ-smb.fr/" target="_blank" class="a">Université Savoie Mt Blanc</a>
				</li>
			</ul>
		</div>
		<p class="my-4">
			I consider myself a "junior full stack engineer". Junior only because I have yet to work in
			a company for multiple years, and full stack because in all my projects (alone or in a team)
			I take care of the back end, front end and deployment architectures. I take good pride in my
			technical skills and spend a good amount of time keeping them sharp but I think my best skill is learning.
			I <strong class="underline">love</strong> to learn new things all the time, especially if they can help
			me to do my job better or more efficiently.
		</p>
		<p class="my">
			Once again, this CV is left intentionally brief, if you want to learn more about me you can do so <a href="cv" rel="prefetch" class="a">here</a>.
		</p>
	</div>
</main>
