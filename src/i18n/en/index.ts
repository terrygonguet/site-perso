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
