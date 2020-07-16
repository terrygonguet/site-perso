<script>
	import { fade } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { dateFormatter } from "~tools"
	import Back from "~components/Back.svelte"
	

	export const tags = ["project","3D","retro","abandonned","tech","français"]
	export let original = "super-3d-retro"
	

	const dev = process.env.NODE_ENV == "development"
</script>

<svelte:head>
	<title>Terry Gonguet - Blog - Super 3D Retro</title>
</svelte:head>

<main
	class="overflow-auto flex-center flex-col"
	in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
	out:fade={{ easing: cubicInOut, duration: 200 }}>
	<article class="m-4 max-w-1k max-h-full text-justify">
		<h1 class="text-4xl">Super 3D Retro</h1>
		<h3 class="text-accent-light text-base">May 2017</h3>
		{#if original}
			<p class="text-base">This blog is derived from <a href="blog/{original}" class="a">this one</a>.</p>
		{/if}
		
		<div class="mb-8" />

		<p class="my-4">Un jour de mai, lors de ma première année <a href="blog/2-years-in-ireland" class="a">en Irlande</a>, j’ai commencé à réfléchir aux systèmes 3D ; pas particulièrement sur la gestion de collision mais sur l’affichage (par des wireframe très simples) des graphiques 3D. Je n’avais aucune idée de comment ajouter efficacement des textures différentes des couleurs plates sur les polygones ni comment gérer la lumière, mais j’avais étudié les mathématiques des vecteurs 3D à l’école et je me souvenais que ce n’était pas si complexe - du moins pas plus que sur les modèles de vecteurs 2D que j’utilisais déjà lorsque je créais des jeux.</p><p class="my-4">Alors, au lieu de partir chercher toutes les informations du sujet sur Internet, j’ai essayé de créer un petit jeu avec des graphiques de wireframe retro 3D à partir de rien. J’étais déjà tellement fan du concept du web que pour le coup j’étais parti à faire tout en JS et l’appliquer sur un canevas.</p><p class="my-4">Comme on peut s’y attendre, ça n’a pas marché à la perfection et j’ai fatalement abandonné mon projet lorsque je me suis rendu compte que pour le faire fonctionner il aurait fallu que je ré-écrive tout depuis le début à cause d’une erreur fondamentale de ma part. En vérité, cela fonctionne proprement sur les objets, mais comme je ne connaissait pas les <a href="https://en.wikipedia.org/wiki/Projection_matrix" target="_blank" class="a">matrices de projections</a> à l’époque, les bords de l’écran sont courbés comme à travers une lentille <a href="https://fr.wikipedia.org/wiki/Objectif_fisheye" target="_blank" class="a">"fish eye"</a>.</p><p class="my-4">Néanmoins, mis à part ce problème de caméra, les graphiques 3D très basiques sont en fait assez simples. Cela se corse de manière exponentielle si on a besoin de plus de features (textures, lumières, fondu…) mais j’ai beaucoup appris et m’amuse beaucoup à faire tourner mon propre moteur de rendus. Je pense que j’ai écrit mes propres fonctions mathématiques de vecteurs aussi.</p><p class="my-4">Le prototype est toujours disponible <a href="https://terry.gonguet.com/super3dretro" target="_blank" class="a">here</a>. Le répo Github est <a href="https://github.com/terrygonguet/super3DRetro" target="_blank" class="a">ici</a>.</p><p class="my-4 text-base">Traduit par <a href="https://www.deviantart.com/little-marylis" target="_blank" class="a">Marylis</a>.</p>
		<Back />
		{#if dev}
			<a href="editor?blog=super-3d-retro-fr" class="btn absolute mx-8 my-4 top-0 right-0">Editor</a>
		{/if}
	</article>
</main>
