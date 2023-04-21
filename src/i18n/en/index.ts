import type { BaseTranslation } from "../i18n-types"

const html = String.raw

const en = {
	title: {
		base: "Terry Gonguet - {0}",
		home: "Home",
		about: "About me",
		cv: "Curiculum Vitae",
		portfolio: "Portfolio",
	},
	home: {
		jobTitle: "Web developer",
		about: "About me",
		cv: "CV",
		portfolio: "Portfolio",
		blog: "Blog",
		wip: "In progress",
	},
	about: {
		p1: ["Hi!"],
		p2: [
			html`My name is Terry Gonguet, a "fullstack" web developer born in `,
			{ html: "the French Alps", href: "https://goo.gl/maps/fcsMFHbRMq1cSYta9" },
			html` trying to make my way into the world. At around 12 years old I discovered `,
			{ html: "Minecraft's Redstone", href: "https://www.youtube.com/watch?v=SbO0tqH8f5I" },
			html` and the `,
			{
				html: "C programming language",
				href: "https://rkvalley.files.wordpress.com/2010/04/kernighan_ritchie_language_c.pdf",
			},
			html` (pretty harsh introduction, I know) and got hooked instantly. Ever since I've
				spent an <s>un</s>reasonable amount of time every day trying to either make magic
				thinking rocks do my bidding or learn more about the discipline.`,
		],
		p3: [
			html`I've always been a fervent proponent of trying to `,
			{ html: "decentralize", href: "https://www.datprotocol.com/" },
			html`
				the web but recent efforts seem... misguided. Breaking up huge tech monopolies and
				letting everyone have a voice are good goals and I hope
			`,
			{ html: "the tech", href: "https://ipfs.io/" },
			html` becomes viable for broad adoption soon.`,
		],
		p4: [
			html`Most of the code I write these days is for the web because I find many of its
			properties valuable (like linkability, backward compatibility etc). I am especially
			interested in making games explicitely designed for the web now that almost all browsers
			can display 2D and 3D graphics and `,
			{ html: "use gamepads", href: "https://caniuse.com/#feat=gamepad" },
			html` (among other `,
			{
				html: "amazing features",
				href: "https://developer.mozilla.org/docs/WebAssembly/Concepts",
			},
			html`).`,
		],
		p5: [
			html`One day I hope to be able to live from making interesting and fun games but in the
			meantime I'm excited to make the internet slightly more awesome, one website at a time!`,
		],
	},
	portfolio: {
		headings: {
			pro: "Professional experience",
			volonteer: "Volonteering",
			experiments: "Experiments",
		},
		subtitles: {
			pro: "The important ones",
			volonteer: "Other things that people use, but for free",
			experiments: "Learning through making games",
		},
		gapsmoov: {
			h: [html`Gapsmoov (2020 - now)`],
			p1: [
				html`In summer of 2020, with the help of two of my friends, I was contracted by two
				long time consultants turned entrepreneurs to build an e-learning app from scratch.
				They come from the world of business-focused cultural training and identified
				(correctly) that the existing solutions were old and painful to use so together we
				built `,
				{ html: "Gapsmoov", href: "https://app.gapsmoov.com" },
				html`.`,
			],
			p2: [
				html`They contracted the original design from `,
				{
					html: "someone else",
					href: "https://www.dd-pardi.com/reference/gapsmoov-references/",
				},
				html` but I build the entire app solo with `,
				{ html: "Sapper", href: "https://sapper.svelte.dev/" },
				html` and `,
				{ html: "KeystoneJS", href: "https://v5.keystonejs.com/" },
				html`. I would be lying if I said that the code turned out perfect but we haven't
				felt the need to increase the team even though we're still adding features
				regularly!`,
			],
		},
		getmunch: {
			h: [html`Get Munch (2019)`],
			p: [
				html`Two Irish friends and I started a late night snack delivery business in the
				suburbs of Dublin before it was cool (I swear we had the idea much before those apps
				became ubiquitous). I built the entire app out of `,
				{ html: "Vue 2", href: "https://v2.vuejs.org/" },
				html`, `,
				{ html: "Stripe", href: "https://stripe.com/en-ie" },
				html` & `,
				{ html: "MongoDB", href: "https://www.mongodb.com/" },
				html` and my friends handled the marketing like champs. Sadly we didn't manage to
				stay alive on account of us being young, poor and bad at business.`,
			],
		},
		repaircafe: {
			h: [html`Repair Café Frangy`],
			p1: [
				html`Repairing things is really fun, stimulating, sometimes surprisingly easy and
				it's even better when we do it together! Makes you wonder why we don't do it all the
				time. Weird. `,
				{ html: "Repair Café", href: "https://www.repaircafe.org/en/" },
				html`
					is an organisation that helps local groups of people to repair their stuff
					together, and because online life is real life too that one needed a website so
				`,
				{ html: "I made one", href: "http://repair-cafe-frangy.fr/" },
				html`!`,
			],
			p2: [
				html`Then we noticed that keeping track of all those broken/fixed/dismantled gizmos
				is hard so now that website is also kind of a barebones, purpose built CMS. Data is
				currently stored in `,
				{ html: "Notion", href: "https://www.notion.so" },
				html` so that we get a bunch of features for free.`,
			],
		},
		webexts: {
			h: [html`Browser extensions`],
			p: [
				html`One of the core reasons I love the web is that it is open
					<em>and editable</em> by default. Every website's UI and UX are ultimately just
					suggestions and with enough effort we can make it whatever we went it to be.
					Crucially, it can and probably should be different for every person. I'm going
					to make my modifications anyway, so I might as well `,
				{ html: "make", href: "https://youtube-extensions.gonguet.com/" },
				html``,
				{ html: "them", href: "https://addons.mozilla.org/en-US/firefox/addon/hestia/" },
				html``,
				{
					html: "available",
					href: "https://www.google.com/search?hl=en&q=web0.cc%20extension",
				},
				html` for everyone too.`,
			],
		},
		webcells: {
			h: [html`Webcells`],
			p: [
				{ html: "Hexcells", href: "https://store.steampowered.com/sub/50074/" },
				html`
					is a trilogy of hexagonal puzzle games that sucked in my partner and I for a
					while. I liked the mechanics so much that I tried to
				`,
				{ html: "make a web version", href: "https://webcells.gonguet.com/" },
				html` with really polished UI/UX. Life happened and it's not entirely finished
				(yet!) but I'm pretty proud of what came of it.`,
			],
		},
		sokoban: {
			h: [html`Sokoban`],
			p: [
				html`Sokoban is that genre of puzzles where a guy pushes boxes onto objectives. I
				wanted to get better at animating things moving on the web so I made `,
				{ html: "a very barebones prototype", href: "https://sokoban.gonguet.com/" },
				html`. Also it has a level editor but now way to play the levels 🤷‍♂️.`,
			],
		},
		multisweeper: {
			h: [html`Multisweeper`],
			p: [
				html`What if Minesweeper but the mines have a color? Turns out it's quite fun! I'm
				pretty proud of the UX of `,
				{ html: "this prototype", href: "https://multisweeper.gonguet.com/" },
				html` (try clicking on cells that have the requisite amount of flags around them but
				still uncovered cells) even though the flagging is a bit rough with 4 colors.`,
			],
		},
		vitruvius: {
			h: [html`Vitruvius`],
			p1: [
				html`What if two games, but <em>at the same time</em>? One player plays Tetris on
					one side and the other plays Breakout next to it. The catch is that they're both
					playing <em>on the same board</em>: the Tetris blocks (called minos) can be
					broken by the Breakout ball from underneath. The goal is to get the ball from
					the bottom of the Breakout board all the way to the top of the Tetris one
					without losing first. `,
				{ html: "Link", href: "https://vitruvius.gonguet.com/" },
			],
			p2: [
				html`The name comes from the fact that you're only handling circles and squares and
				that reminded me of `,
				{
					html: "that drawing of a man",
					href: "https://en.wikipedia.org/wiki/Vitruvian_Man",
				},
				html` by `,
				{ html: "some guy", href: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci" },
				html`. I also discovered that <em>every single thing</em> about Tetris is designed
					and guidelined in excruciating detail in `,
				{
					html: "a surprisingly long document",
					href: "https://www.dropbox.com/s/g55gwls0h2muqzn/tetris%20guideline%20docs%202009.zip?dl=0&file_subpath=%2F2009+Tetris+Design+Guideline.pdf#",
				},
				html`.`,
			],
		},
		calibron: {
			h: [html`Calibron 12`],
			p: [
				html`One day I found `,
				{ html: "a video", href: "https://www.youtube.com/watch?v=f6tHqOmIj1E&t=1278s" },
				html` about an old puzzle. It linked to `,
				{
					html: "a very extensive document",
					href: "https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf",
				},
				html` about that puzzle. I like making puzzles so now `,
				{ html: "it", href: "https://calibron12.gonguet.com/" },
				html`'s on the internet. The video (and `,
				{ html: "its author", href: "https://www.youtube.com/user/Vsauce" },
				html`) and the document are amazing and I'm not going to even try explain it better.`,
			],
		},
		naga: {
			h: [html`Naga`],
			p: [
				html`What if Snake, but it's a dungeon crawler? The idea is so absurd I had to see
					if I could make <em>anything</em> out of it. Turns out there may be something
					there but the `,
				{ html: "prototype", href: "https://terry.gonguet.com/naga" },
				html`'s code got really annoying so I stopped. `,
				{ html: "PIXI.js", href: "https://www.pixijs.com/" },
				html` is cool though.`,
			],
		},
		solitaire: {
			h: [html`Solitaire`],
			p: [
				html`I wanted to learn `,
				{ html: "Vue 2", href: "https://v2.vuejs.org/" },
				html` and I love making puzzle games. `,
				{ html: "This one", href: "https://terry.gonguet.com/solitaire" },
				html` is pretty straight forward. Three friends and I lost 3 hours one evening just
				playing Solitaire to test this.`,
			],
		},
	},
	footer: {
		home: "Home",
		altHome: "Home icon",
	},
	locale: {
		toggleLabel: "Language",
	},
	mode: {
		dark: "Dark",
		light: "Light",
	},
	ariaExternalLink: "External link icon",
} satisfies BaseTranslation

export default en
