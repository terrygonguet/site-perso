export type Translations = typeof translations

export const translations = {
	title: "Portfolio",

	section_title_pro: "Professional experience",
	section_subtitle_pro: "The lucrative ones",
	section_title_volonteer: "Volunteering",
	section_subtitle_volonteer: "Other things that people use, but for free",
	section_title_experimental: "Experiments",
	section_subtitle_experimental: "Learning through making games",

	pro_1_title: "Gapsmoov (2020 - now)",
	pro_1_alt: "A screenshot of the home page of Gapsmoov's Culture Decoder",
	pro_1_p1: /* html */ `In summer of 2020, with the help of two of my friends, I was contracted by two long time consultants turned entrepreneurs to build an e-learning app from scratch. They come from the world of business-focused cultural training and identified (correctly) that the existing solutions were old and painful to use so together we built <a href="https://gapsmoov.com" target="_blank" class="anchor">The Culture Decoder</a>.`,
	pro_1_p2: /* html */ `They contracted the original design from someone else but I build the entire app solo with <a href="https://sapper.svelte.dev" target="_blank" class="anchor">Sapper</a> and <a href="https://v5.keystonejs.com/" target="_blank" class="anchor">KeystoneJS</a>. I would be lying if I said that the code is perfect but we haven't felt the need to increase the team even though we're still adding features often!`,

	pro_2_title: "Get Munch (2019)",
	pro_2_alt: "A screenshot of the home page of GetMunch.ie",
	pro_2_p1: /* html */ `Two Irish friends and I started a late night snack delivery business in the suburbs of Dublin before it was cool (I swear we had the idea much before those apps became ubiquitous). I built the entire app out of <a href="https://v2.vuejs.org/" target="_blank" class="anchor">Vue 2</a>, <a href="https://stripe.com/en-ie" target="_blank" class="anchor">Stripe</a> & <a href="https://www.mongodb.com/" target="_blank" class="anchor">MongoDB</a> and my friends handled the marketing like champs. Sadly we didn't manage to stay alive on account of us being young, poor and bad at business.`,

	vol_1_title: "Repair Café Frangy",
	vol_1_alt: "A screenshot of the home page of the Repair Café Frangy",
	vol_1_p1: /* html */ `Repairing things is really fun, stimulating, sometimes surprisingly easy and it's even better when we do it together! Makes you wonder why we don't do it all the time. Weird. <a href="https://www.repaircafe.org/en/" target="_blank" class="anchor">Repair Café</a> is an organisation that helps local groups of people to repair their stuff together, and because online life is real life too, they needed a website so <a href="http://repair-cafe-frangy.fr/" target="_blank" class="anchor">I made one</a>!`,
	vol_1_p2: /* html */ `Then we noticed that keeping track of all those broken/fixed/dismantled gizmos is hard so now that website is also kind of a barebones, purpose built CMS built with <a href="https://svelte.dev" target="_blank" class="anchor">SvelteKit</a> and <a href="https://www.postgresql.org" target="_blank" class="anchor">PostgreSQL</a>.`,

	vol_2_title: "Browser extensions",
	vol_2_alt: "A screenshot of a page listing my YouTube extensions",
	vol_2_p1: /* html */ `One of the core reasons I love the web is that it is open and editable by default. Every website's UI and UX are ultimately just suggestions and with enough effort we can make it whatever we went it to be. Crucially, it can and probably should be different for every person. I'm going to make my modifications anyway, so I might as well make them <a href="https://youtube-extensions.gonguet.com" target="_blank" class="anchor">available</a> for everyone too.`,
}
