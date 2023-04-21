import type { Translation } from "$i18n/i18n-types"

const html = String.raw

const fr = {
	title: {
		base: "Terry Gonguet - {0}",
		home: "Accueil",
		about: "À propos de moi",
		cv: "Curiculum Vitae",
		portfolio: "Portfolio",
	},
	home: {
		jobTitle: "Développeur web",
		about: "À propos de moi",
		cv: "CV",
		portfolio: "Portfolio",
		blog: "Blog",
		wip: "En construction",
	},
	about: {
		p1: ["Salut !"],
		p2: [
			html`Je m'appelle Terry Gonguet, développeur "fullstack" né en `,
			{ html: "Haute Savoie", href: "https://goo.gl/maps/fcsMFHbRMq1cSYta9" },
			html`. Vers mes 12 ans j'ai découvert `,
			{
				html: "la Redstone dans Minecraft",
				href: "https://www.youtube.com/watch?v=SbO0tqH8f5I",
			},
			html` et le `,
			{
				html: "langage C",
				href: "https://rkvalley.files.wordpress.com/2010/04/kernighan_ritchie_language_c.pdf",
			},
			html` (rude introduction, je sais) et ça m'a passionné instantanément. Depuis je passe
				un temps <s>dé</s>raisonnable chaque jour soit à essayer de dompter des bouts de
				silicone enchantés, soit à en apprendre plus sur la discipline.`,
		],
		p3: [
			html`J'ai toujours pensé qu'il serait une bonne idée de `,
			{ html: "décentraliser", href: "https://www.datprotocol.com/" },
			html`
				le web mais les récents efforts me semblent... égarés. Séparer les monopoles de la
				tech et donner une voix à tout le monde sont des fins nobles et j'espère que
			`,
			{ html: "la technologie", href: "https://ipfs.io/" },
			html` devienne utilisable pour être adoptée à grande échelle.`,
		],
		p4: [
			html`La plupart du code que j'écrit ces temps ci est pour le web car je trouve beaucoup
			de ses propriétés importantes (comme les liens, la rétro compatibilité etc). Je suis
			surtout intéressé par la création de jeux directement faits pour le web, maintenant que
			la majorité des navigateurs peuvent gérer des graphismes 2D, 3D et `,
			{ html: "utiliser des manettes", href: "https://caniuse.com/#feat=gamepad" },
			html` (entre autres `,
			{
				html: "capacités exitantes",
				href: "https://developer.mozilla.org/docs/WebAssembly/Concepts",
			},
			html`).`,
		],
		p5: [
			html`J'espère un jour pouvoir vivre de la création de jeux fun et intéressants, mais en
			attendant, je suis ravi de rendre l'internet encore plus génial, un site à la fois !`,
		],
	},
	footer: {
		home: "Accueil",
		altHome: "Icône accueil",
	},
	locale: {
		toggleLabel: "Langage",
	},
	mode: {
		dark: "Sombre",
		light: "Clair",
	},
	ariaExternalLink: "Icône lien externe",
} satisfies Translation

export default fr
