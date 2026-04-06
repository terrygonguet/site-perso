<script lang="ts">
	import { page } from "$app/state"
	import Copyright from "$lib/components/Copyright.svelte"
	import Toggles from "$lib/components/Toggles.svelte"

	let { t } = $derived(page.data)
</script>

<svelte:head>
	<title>{await t("general", "title_home")} - Terry Gonguet</title>
</svelte:head>

<header class="flex h-[30dvh] flex-col items-center justify-center gap-4" style:view-transition-name="page-home-header">
	<h1 class="text-4xl font-bold md:text-6xl">Terry Gonguet</h1>
	<h2 class="text-xl text-orange-500 md:text-2xl dark:text-amber-600">
		{@html await t("home", "jobTitle")}
	</h2>
</header>

<main class="grid grid-rows-[2fr_fr] place-items-center px-4">
	<nav class="w-full md:w-auto" style:view-transition-name="page-home-main">
		<ul class="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
			<li>
				<a id="about" href="/about">
					<span>{@html await t("home", "about")}</span>
				</a>
			</li>
			<li>
				<a id="cv" href="/cv">
					<span>{@html await t("home", "cv")}</span>
				</a>
			</li>
			<li>
				<a id="portfolio" href="/portfolio">
					<span>{@html await t("home", "portfolio")}</span>
				</a>
			</li>
			<li>
				<div id="blog">
					<span>{@html await t("home", "blog")}</span>
				</div>
			</li>
		</ul>
	</nav>

	<Toggles />
</main>

<footer class="p-4 text-center">
	<Copyright />
</footer>

<style lang="postcss">
	@reference "@appcss";

	nav a {
		transition-property: transform, background-color;
		@apply grid aspect-square place-items-center bg-stone-300 p-4 text-2xl shadow shadow-stone-600/50 duration-200 hover:scale-105 hover:bg-stone-100 lg:h-52 dark:bg-stone-700 dark:hover:bg-stone-600;
	}

	#about span {
		@variant motion-safe {
			view-transition-name: page-title-about;
		}
	}
	#about:hover {
		color: white;
		background-color: black;
		background-image:
			radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px),
			radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
			radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
			radial-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 2px, transparent 30px);
		background-size:
			100% 100%,
			100% 100%,
			100% 100%,
			100% 100%,
			100% 100%;
		background-position:
			-25px -40px,
			40px 60px,
			130px 60px,
			70px 100px;
	}

	#cv span {
		@variant motion-safe {
			view-transition-name: page-title-cv;
		}
	}
	#cv:hover {
		color: black;
		background-color: #fff;
		background-image:
			linear-gradient(90deg, transparent 39px, #abced4 39px, #abced4 41px, transparent 41px),
			linear-gradient(#eee 0.1em, transparent 0.1em);
		background-size: 100% 1rem;
	}

	#portfolio span {
		@variant motion-safe {
			view-transition-name: page-title-portfolio;
		}
	}
	#portfolio:hover {
		color: white;
		background-color: #269;
		background-image:
			linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px),
			linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
		background-size:
			80px 80px,
			80px 80px,
			16px 16px,
			16px 16px;
		background-position: center;
	}

	#blog {
		@apply relative grid aspect-square place-items-center overflow-hidden bg-stone-300 p-4 text-2xl shadow shadow-stone-600/50 dark:bg-stone-700;
	}
	#blog:after {
		content: "WIP";
		background-image: repeating-linear-gradient(-45deg, transparent, transparent 2rem, black 2rem, black 4rem);
		transform: translate(-100%, -50%);
		transition: transform 0.2s ease-in-out;
		-webkit-text-stroke: 1px black;
		@apply absolute top-1/2 left-0 flex h-12 w-full items-center justify-center bg-yellow-500 font-bold text-white;
	}
	#blog:hover:after {
		transform: translate(0, -50%);
	}

	::view-transition-new(page-home-main),
	::view-transition-new(page-home-header) {
		animation: slide-in 0.2s ease forwards;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	::view-transition-old(page-home-main),
	::view-transition-old(page-home-header) {
		animation: slide-in 0.2s ease reverse forwards;
		@variant motion-reduce {
			animation-name: fade-in;
		}
	}

	@keyframes slide-in {
		from {
			transform: translate(0, -20dvh);
			opacity: 0;
		}
		to {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
