<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["studies","ireland","school","français"]
	export let original = "2-years-in-ireland"
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - 2 ans en Irlande</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">2 ans en Irlande</h1>
		<h3 class="text-accent-light text-base">2016-2018</h3>
		{#if original}
			<p class="text-base">This blog is derived from <a href="blog/{original}" class="a">this one</a>.</p>
		{/if}
		
		<div class="mb-8" />

		<p class="my-4">Ces deux années ont été très intéressantes et m’ont beaucoup appris, je risque de blablater sur ce post.</p>  <p class="my-4">Commençons par ce que j’ai aimé lors de mon séjour en Irlande. Je sais que cela peut sembler bizarre mais j’aime beaucoup son climat, jamais trop chaud ni trop froid pour sortir quotidiennement, et la bruine fréquente est souvent facile à ignorer. Le pays a subi une “tempête de neige” et une “tempête” pendant que j’y étais - je les mets entre guillemets car elles se sont avérées légèrement au dessus de la moyenne météorologique dans les montagnes où j’ai vécu toute ma vie. Je ne sais pas ce qui cela peut signifier sur la météo des deux endroits mais la tempête de neige était vraiment agréable pour se balader en écoutant des podcasts. </p>  <p class="my-4">Au milieu de l’année 2016, ma famille d’accueil m’a permis de changer de chambre et de déménager dans leur ancien atelier, transformé en studio pour une personne. Même si c’était relié à leur maison, en tout et pour tout je vivais seul et c’était génial ! Il n’y a rien de semblable à vivre seul pour la première fois.</p>  <p class="my-4">Les différences culturelles ont été très intéressantes à observer également, la plupart minime. Même le style des gens semblait légèrement différent de celui de mes compatriotes - et je dois l’avouer, j’aime davantage le style des femmes irlandaises. Mais tout Dublin et sa banlieue peut toujours être décrite comme “une ville européenne avec une plus grande concentration de bars” avec 95% de justesse. </p>  <p class="my-4">Il y a cependant quelques petites choses que j’ai beaucoup moins apprécié en Eire. Premièrement, la plupart des maisons autour de celle où je vivais étaient épouvantables sur à peu près tous les aspects auxquels je peux penser. Mauvaise isolation, moches, simples et ennuyeuses, ayant la plupart de leurs fenêtres donnant sur la rue - de sorte à ce que l’on puisse jamais ouvrir complètement les rideaux. Beaucoup de choses sont chères - en particulier l’alcool - mais je présume que cela vient du fait qu’il s’agit d’une île avec beaucoup d’herbe et de moutons.</p>  <p class="my-4">Une doléance plus subtile est que l’entièreté du pays semble investie d’un sérieux manque d’intérêt à toute forme d’amélioration, que ce soit à l’échelle locale ou nationale, comme si tout allait être “okay” à la fin. Mais ce ne sera pas le cas, si l’on ne prend pas garde aux entreprises et au gouvernement, ils empiètent sur des libertés dans une quête infinie pour le pouvoir et l’argent. Je dois admettre que les Français prennent le concept un peu trop au pied de la lettre avec des manifestations constantes et un fort réflexe à dire “non” avant même d’entendre les arguments, mais le peuple irlandais ne réclame pas assez ses droits et cela peut se voir par de multiples façons. Par exemple le traffic à Dublin est toujours terrible et son système de bus et tram est tristement inadéquat pour une capitale mais cela ne changera pas car ça sera “okay”...</p>  <p class="my-4">Je peux aussi dire beaucoup de choses désagréables sur l’université où j’ai étudié (Institute of Technology Tallagh) mais en tout pour le tout j’ai appris des tas de trucs sur la programmation et l’informatique durant ces deux années. La plupart des enseignements reçus ne provenaient pas de l’école en elle-même mais le résultat final est le même.</p><p class="my-4">Tous les samedis de cette période, j’ai fait du bénévolat pour enseigner le Javascript débutant à des gamins dans le cadre de <a href="https://coderdojo.com/" target="_blank" class="a">CoderDojo</a> et j’ai découvert que <a href="blog/i-like-teaching-fr" class="a">j’aime beaucoup enseigner des trucs</a>.</p>  <p class="my-4">Je ne suis pas sûr de qui va lire ceci mais si vous en faites partie, vous savez maintenant ce que je pense globalement de l’Irlande (de Dublin et ses alentours du moins, le reste du pays est bien moins peuplé et plus beau).</p>  <p class="my-4">Les fish & chips me manquent beaucoup quand même.</p><p class="my-4 text-base">Traduit par <a href="https://www.deviantart.com/little-marylis" target="_blank" class="a">Marylis</a>.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=2-ans-en-irlande" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
