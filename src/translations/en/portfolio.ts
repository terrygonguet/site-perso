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
	pro_1_alt1: "A screenshot of the home page of Gapsmoov's Culture Decoder",
	pro_1_alt2:
		"A screenshot of the comparator feature, comparing Terry Gonguet, Bruce Wayne and the countries of Algeria and Argentina",
	pro_1_alt3: "A screenshot of the page listing virtual classes",
	pro_1_alt4: "A screenshot of the video capsule about giving a presentation in France",
	pro_1_alt5: "A screenshot of the French Culturosity online board game",
	pro_1_p1:
		"In summer of 2020, with the help of two of my friends, I was contracted by two long time consultants turned entrepreneurs to build an e-learning app from scratch. They come from the world of business-focused cultural training and identified (correctly) that the existing solutions were old and painful to use so together we built [$link https://gapsmoov.com]The Culture Decoder[/link].",
	pro_1_p2:
		"They contracted the original design from someone else but I build the entire app solo with [$link https://sapper.svelte.dev]Sapper[/link] and [$link https://v5.keystonejs.com/]KeystoneJS[/link]. I would be lying if I said that the code is perfect but we haven't felt the need to increase the team even though we're still adding features often!",

	pro_2_title: "Get Munch (2019)",
	pro_2_alt1: "A screenshot of the home page of GetMunch.ie",
	pro_2_alt2: "A screenshot of part of the menu",
	pro_2_alt3: "A screenshot of the cart view",
	pro_2_p1:
		"Two Irish friends and I started a late night snack delivery business in the suburbs of Dublin before it was cool (I swear we had the idea much before those apps became ubiquitous). I built the entire app out of [$link https://v2.vuejs.org/]Vue 2[/link], [$link https://stripe.com/en-ie]Stripe[/link] & [$link https://www.mongodb.com/]MongoDB[/link] and my friends handled the marketing like champs. Sadly we didn't manage to stay alive on account of us being young, poor and bad at business.",

	vol_1_title: "Repair Café Frangy",
	vol_1_alt1: "A screenshot of the home page of the Repair Café Frangy",
	vol_1_alt2: "A screenshot of the list of things waiting to be fixed in the backend",
	vol_1_alt3: "A screenshot of the form representing fixing a thing",
	vol_1_p1:
		"Repairing things is really fun, stimulating, sometimes surprisingly easy and it's even better when we do it together! Makes you wonder why we don't do it all the time. Weird. [$link https://www.repaircafe.org/en/]Repair Café[/link] is an organisation that helps local groups of people to repair their stuff together, and because online life is real life too, they needed a website so [$link http://repair-cafe-frangy.fr/]I made one[/link]!",
	vol_1_p2:
		"Then we noticed that keeping track of all those broken/fixed/dismantled gizmos is hard so now that website is also kind of a barebones, purpose built CMS built with [$link https://svelte.dev]SvelteKit[/link] and [$link https://www.postgresql.org]PostgreSQL[/link].",

	vol_2_title: "Browser extensions",
	vol_2_alt: "A screenshot of a page listing my YouTube extensions",
	vol_2_p1:
		"One of the core reasons I love the web is that it is open and editable by default. Every website's UI and UX are ultimately just suggestions and with enough effort we can make it whatever we went it to be. Crucially, it can and probably should be different for every person. I'm going to make my modifications anyway, so I might as well make them [$link https://youtube-extensions.gonguet.com]available[/link] for everyone too.",

	expe_1_title: "Webcells",
	expe_1_alt1: "A screenshot of the home page of Webcells",
	expe_1_alt2: "A screenshot of the start of a level",
	expe_1_alt3: "A screenshot of a level in the classic Hexcells color scheme",
	expe_1_p1:
		"[$link https://store.steampowered.com/sub/50074/]Hexcells[/link] is a trilogy of hexagonal puzzle games that captivated in my partner and I for a while. I liked the mechanics so much that I tried to make [$link https://webcells.gonguet.com/]a web version[/link] with really polished UI/UX. Life happened and it's not entirely finished but I'm pretty proud of what came of it, especially the tutorial and the indications.",

	expe_2_title: "Multisweeper",
	expe_2_alt: "A screenshot of a game of Multisweeper",
	expe_2_p1:
		"What if Minesweeper but the mines have a color? Turns out it's quite fun! I'm pretty proud of the UX of [$link https://multisweeper.gonguet.com/]this prototype[/link] (try clicking on cells that have the requisite amount of flags around them but still uncovered cells) even though the flagging is a bit rough with 4 colors.",

	expe_3_title: "Naga",
	expe_3_alt: "A screenshot in the middle of the dungeon",
	expe_3_p1:
		"What if Snake, but it's a dungeon crawler? The idea is so absurd I had to see if I could make [$em]anything[/em] out of it. Turns out there may be something there but the [$link https://gonguet.com/terry/naga/]prototype[/link]'s code got really annoying so I stopped. [$link https://www.pixijs.com/]PIXI.js[/link] is cool though.",

	expe_4_title: "Sokoban",
	expe_4_alt1: "A screenshot of the start of a Sokoban level",
	expe_4_alt2: "A screenshot of the level editor",
	expe_4_p1:
		"Sokoban is that genre of puzzles where a guy pushes boxes onto objectives. I wanted to get better at animating grid aligned movement and other stuff on the web so I made [$link https://sokoban.gonguet.com/]a very barebones prototype[/link]. Also it has a level editor but now way to play the levels 🤷‍♂️.",

	expe_5_title: "Vitruvius",
	expe_5_alt: "A screenshot in the middle of a game of Vitruvius",
	expe_5_p1:
		"What if two games, but [$em]at the same time[/em]? One player plays Tetris on one side and the other plays Breakout next to it. The catch is that they're both playing [$em]on the same board[/em]: the Tetris blocks (called minos) can be broken by the Breakout ball from underneath. The goal is to get the ball from the bottom of the Breakout board all the way to the top of the Tetris one without losing first. [$link https://vitruvius.gonguet.com]Link[/link]",
	expe_5_p2:
		"The name comes from the fact that you're only handling circles and squares and that reminded me of that famous [$link https://en.wikipedia.org/wiki/Vitruvian_Man]drawing of a man[/link]. I also discovered that every single thing about Tetris is designed and guidelined in excruciating detail in [$link https://www.dropbox.com/s/g55gwls0h2muqzn/tetris%20guideline%20docs%202009.zip?dl=0&file_subpath=%2F2009+Tetris+Design+Guideline.pdf#]a surprisingly long document[/link].",

	expe_6_title: "Calibron 12",
	expe_6_alt1: "A screenshot of the calibron puzzle unmade",
	expe_6_alt2: "A screenshot of the calibron puzzle completed",
	expe_6_p1:
		"One day I found [$link https://www.youtube.com/watch?v=f6tHqOmIj1E&t=1278s]a video about an old puzzle[/link]. It linked to [$link https://www.gathering4gardner.org/g4g12gift/Miller_Baxter-Mystery_of_the_Calibron.pdf]a very extensive document[/link] about that puzzle. I like making puzzles so now [$link https://calibron12.gonguet.com/]a barebones version[/link] is on the internet. The video (and its author) and the document are amazing and I'm not going to even try explain it better.",

	expe_7_title: "Solitaire",
	expe_7_alt: "A screenshot in the middle of a Solitaire game",
	expe_7_p1:
		"I wanted to learn [$link https://v2.vuejs.org/]Vue 2[/link] and I love making puzzle games. [$link https://gonguet.com/terry/solitaire/]This one[/link] is pretty straight forward. Three friends and I lost 3 hours one evening just playing Solitaire to test this.",
}
