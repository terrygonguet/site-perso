import type { Translation } from "$i18n/i18n-types"

const html = String.raw

const fr = {
	title: {
		base: "{0} - Terry Gonguet",
		home: "Accueil",
		about: "À propos de moi",
		cv: "CV",
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
	portfolio: {
		headings: {
			pro: "Expérience professionnelle",
			volonteer: "Bénévolat",
			experiments: "Laboratoire",
		},
		subtitles: {
			pro: "Les plus importantes",
			volonteer: "D'autres choses utiles, mais gratuites",
			experiments: "Apprendre via la création de jeux",
		},
		gapsmoov: {
			h: [html`Gapsmoov (2020 - maintenant)`],
			p1: [
				html`Dans l'été 2020, deux de mes amis et moi avons été contactés par deux
				consultants de longue date devenus entrepreneurs pour créer une application
				d'e-learning à partir de zéro. Ils viennent du monde de la formation culturelle axée
				sur les entreprises et ont identifié (à juste titre) que les solutions existantes
				étaient anciennes et pénibles à utiliser. Ensemble, nous avons alors construit `,
				{ html: "Gapsmoov", href: "https://app.gapsmoov.com" },
				html`.`,
			],
			p2: [
				html`Ils ont confié le design original à `,
				{
					html: "quelqu'un d'autre",
					href: "https://www.dd-pardi.com/reference/gapsmoov-references/",
				},
				html`, mais j'ai développé l'intégralité de l'application en solo avec `,
				{ html: "Sapper", href: "https://sapper.svelte.dev/" },
				html` et `,
				{ html: "KeystoneJS", href: "https://v5.keystonejs.com/" },
				html`. Je mentirais si je disais que le code est parfait mais nous n'avons pas
				ressenti le besoin d'agrandir l'équipe alors que nous ajoutons encore régulièrement
				des fonctionnalités !`,
			],
		},
		getmunch: {
			h: [html`Get Munch (2019)`],
			p: [
				html`Deux amis irlandais et moi avons lancé une entreprise de livraison de snacks
				nocturne dans la banlieue de Dublin avant que ça soit cool (je vous jure on a eu
				l'idée avant que ce genre d'app ne deviennent omniprésentes). J'ai développé toute
				l'application avec `,
				{ html: "Vue 2", href: "https://v2.vuejs.org/" },
				html`, `,
				{ html: "Stripe", href: "https://stripe.com/en-ie" },
				html` & `,
				{ html: "MongoDB", href: "https://www.mongodb.com/" },
				html` et mes amis ont géré le marketing comme des champions. Malheureusement, nous
				n'avons pas réussi à rester en business à cause de notre jeuness, manque de fonds et
				manque d'expérience.`,
			],
		},
		repaircafe: {
			h: [html`Repair Café Frangy`],
			p1: [
				html`Réparer n'importe quoi est vraiment amusant, stimulant, parfois étonnamment
				facile et c'est encore mieux quand on le fait ensemble ! À se demander pourquoi on
				ne le fait pas tout le temps. Bizarre. `,
				{ html: "Repair Café", href: "https://www.repaircafe.org/en/" },
				html`
					est une organisation qui aide des groupes locaux de personnes à réparer leurs
					affaires ensemble, et parce que la vie en ligne c'est aussi la vraie vie, il
					leur fallait un site Web, alors je l'eur en ai
				`,
				{ html: "créé un", href: "http://repair-cafe-frangy.fr/" },
				html` !`,
			],
			p2: [
				html`Ensuite, nous avons observé à quel point il est difficile de garder une trace
				de tous ces gadgets cassés/réparés/démantelés. Maintenant, ce site Web est également
				une sorte de système de gestion d'inventaire simple spécialement conçu pour leur
				usage. Les données sont stockées chez `,
				{ html: "Notion", href: "https://www.notion.so" },
				html` pour avoir un tas de fonctionnalités pratiques gratuitement.`,
			],
		},
		webexts: {
			h: [html`Extensions de navigateur`],
			p: [
				html`L'une des principales raisons pour lesquelles j'aime le web est que c'est
					ouvert <em>et modifiable</em> par défaut. L'interface utilisateur et l'UX de
					chaque site Web ne sont en fait que des suggestions qu'on peut ignorer et, avec
					suffisamment d'efforts, dont on peut faire ce qu'on veut. Surtout, ce qu'on en
					fait peut (et devrait probablement) être différent pour chaque personne. Je vais
					faire mes modifications de toute façon, autant les polir et `,
				{ html: "les", href: "https://youtube-extensions.gonguet.com/" },
				html``,
				{ html: "rendre", href: "https://addons.mozilla.org/en-US/firefox/addon/hestia/" },
				html``,
				{
					html: "disponibles",
					href: "https://www.google.com/search?hl=en&q=web0.cc%20extension",
				},
				html` pour tout le monde.`,
			],
		},
		webcells: {
			h: [html`Webcells`],
			p: [
				{ html: "Hexcells", href: "https://store.steampowered.com/sub/50074/" },
				html`
					est une trilogie de jeux de puzzle hexagonaux qui a happé ma partenaire et moi
					pendant un moment. J'ai tellement aimé la mécanique de jeu que j'ai tenté de
				`,
				{ html: "créer une version web", href: "https://webcells.gonguet.com/" },
				html` avec une interface utilisateur / UX vraiment soignée. Les circonstances m'ont
				forcé à laisser ce projet inachevé (pour l'instant !) mais je suis assez fier de ce
				qui en est ressorti.`,
			],
		},
		sokoban: {
			h: [html`Sokoban`],
			p: [
				html`Sokoban est ce genre de puzzles où un gars pousse des boîtes sur des objectifs.
				Je voulais m'améliorer dans l'animation de choses qui bougent sur le Web, donc j'ai
				créé `,
				{ html: "un prototype très simple", href: "https://sokoban.gonguet.com/" },
				html`. Il y a également un éditeur mais c'est impossible de jouer aux niveaux créés
				🤷‍♂️.`,
			],
		},
		multisweeper: {
			h: [html`Multisweeper`],
			p: [
				html`Imaginez un Démineur, mais les mines ont aussi une couleur. Apparemment c'est
				assez amusant ! Je suis assez fier de l'UX `,
				{ html: "du prototype", href: "https://multisweeper.gonguet.com/" },
				html` (essayez de cliquer sur les cellules qui ont le nombre requis de drapeaux
				autour d'elles mais qui en ont encore des couvertes autours) même si placer les
				drapeaux est un peu agaçant avec 4 couleurs.`,
			],
		},
		vitruvius: {
			h: [html`Vitruvius`],
			p1: [
				html`Imaginez jouer à deux jeux, mais en même temps. Un joueur joue à Tetris d'un
				côté et l'autre joue à Breakout de l'autre. Le hic, c'est qu'ils jouent tous les
				deux sur le même plateau : les blocs de Tetris (appelés minos) peuvent être brisés
				par la balle de Breakout depuis en dessous. Le but est de faire passer la balle du
				bas du plateau de Breakout jusqu'en haut de celui de Tetris sans perdre. `,
				{ html: "Lien", href: "https://vitruvius.gonguet.com/" },
			],
			p2: [
				html`Le nom vient du fait que le jeu ne contient que des cercles et des carrés et ça
				m'a rappelé `,
				{
					html: "ce dessin d'un homme",
					href: "https://en.wikipedia.org/wiki/Vitruvian_Man",
				},
				html` par `,
				{ html: "un type", href: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci" },
				html`. J'ai également découvert que absolument tout à propos de Tetris est designé
				et guidé dans le moindre détails dans `,
				{
					html: "un document étonnamment long",
					href: "https://www.dropbox.com/s/g55gwls0h2muqzn/tetris%20guideline%20docs%202009.zip?dl=0&file_subpath=%2F2009+Tetris+Design+Guideline.pdf#",
				},
				html`.`,
			],
		},
		calibron: {
			h: [html`Calibron 12`],
			p: [
				html`Un jour, j'ai trouvé `,
				{ html: "une vidéo", href: "https://www.youtube.com/watch?v=f6tHqOmIj1E&t=1278s" },
				html` sur un vieux puzzle. `,
				{
					html: "Un document très complet",
					href: "https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf",
				},
				html`
					sur ce puzzle se trouve dans la description. J'aime fabriquer des puzzles donc
					maintenant
				`,
				{ html: "ça existe", href: "https://calibron12.gonguet.com/" },
				html` sur internet. La vidéo (et `,
				{ html: "son auteur", href: "https://www.youtube.com/user/Vsauce" },
				html`) et le document sont incroyables, je ne vais même pas essayer de mieux les
				expliquer que lui.`,
			],
		},
		naga: {
			h: [html`Naga`],
			p: [
				html`Et si Snake était un donjon crawler ? L'idée est tellement absurde que j'ai
				étéobligé de tester si je pouvais en tirer quelque chose. Il y a peut-être quelque
				chose d'intéressant, mais le code du `,
				{ html: "prototype", href: "https://terry.gonguet.com/naga" },
				html` est devenu vraiment bordélique, alors j'ai arrêté. `,
				{ html: "PIXI.js", href: "https://www.pixijs.com/" },
				html` est super cool par contre.`,
			],
		},
		solitaire: {
			h: [html`Solitaire`],
			p: [
				html`Je voulais apprendre `,
				{ html: "Vue 2", href: "https://v2.vuejs.org/" },
				html` et j'adore fabriquer des puzzles. `,
				{ html: "Celui là", href: "https://terry.gonguet.com/solitaire" },
				html`est assez simple. Trois amis et moi avons perdu 3 heures un soir à juste jouer
				au Solitaire pour le tester`,
			],
		},
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
