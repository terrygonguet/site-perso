/**
 * @typedef {Object} MenuItem
 * @property {string} label
 * @property {string} icon
 * @property {MenuItem[]=} children
 * @property {string=} page
 */

/** @type {MenuItem} */
export const menus = {
	label: "Base",
	icon: "",
	children: [
		{
			label: "Me",
			icon: "user",
			page: "me"
		},
		{
			label: "Blog",
			icon: "blog",
			page: "blog"
		},
		{
			label: "Projects",
			icon: "code",
			children: [
				{
					label: "Alive",
					icon: "checkmark",
					page: "projects/alive"
				},
				{
					label: "Abandonned",
					icon: "cobweb",
					page: "projects/abandonned"
				},
				{
					label: "Experiment",
					icon: "science",
					page: "projects/experiment"
				}
			]
		},
		{
			label: "CV",
			icon: "cv",
			page: "cv-hr"
		},
		{
			label: "Contact",
			icon: "link",
			page: "contact"
		}
	]
}

export const icons = getIconsFromMenu(menus)

export const abandonned = [
	{
		title: "Flashcards",
		slug: "flashcards",
		displayDate: "June 2019"
	},
	{
		title: "Auto subs",
		slug: "auto-subs",
		displayDate: "January 2019"
	},
	{
		title: "Project Naga",
		slug: "naga",
		displayDate: "December 2018"
	},
	{
		title: "Super 3D Retro",
		slug: "super-3d-retro",
		displayDate: "May 2017"
	}
]

export const alive = [
	{
		title: "I made an e-commerce website from scratch",
		slug: "e-commerce-from-scratch",
		displayDate: "Middle of 2019"
	},
	{
		title: "Let's be an entrepreneur",
		slug: "lets-be-entrepreneur",
		displayDate: "September 2019"
	},
	{
		title: "Project Hestia web extension",
		slug: "hestia",
		displayDate: "Started June 2018"
	}
]

export const completed = [
	{
		title: "Two small games",
		slug: "vitruvius",
		date: "2020-03-31"
	},
	{
		title: "IBD's website v2",
		slug: "move-it-move-it",
		date: "2020-03-18"
	},
	{
		title: "Solitaire",
		slug: "solitaire",
		date: "2018-10-28"
	}
]

export const cv = {
	experiences: [
		{
			title: "I made an e-commerce website from scratch",
			slug: "e-commerce-from-scratch",
			displayDate: "Middle of 2019"
		},
		{
			title: "Let's be an entrepreneur",
			slug: "lets-be-entrepreneur",
			displayDate: "September 2019"
		},
		{
			title: "I like teaching",
			slug: "i-like-teaching",
			displayDate: "2016 till now"
		},
		{
			title: "Telligo and summer camps",
			slug: "colos-telligo",
			displayDate: "April and July 2019"
		},
		{
			title: "Internship at Alpes Contrôles",
			slug: "stage-alpes-controles",
			displayDate: "April 2016"
		}
	],
	studies: [
		{
			title: "Diplôme Étudiant Entrepreneur - Lyon 3",
			slug: "d2e",
			displayDate: "2019 till now"
		},
		{
			title: "DUETI + Bachelor in Computing - IT Tallaght",
			slug: "dueti-bachelor",
			displayDate: "2016-2018"
		},
		{
			title: "DUT Informatique - Université Savoie Mt. Blanc",
			slug: "dut-info",
			displayDate: "2014-2016"
		},
		{
			title: "BAC S - St Julien en Genevois",
			slug: "bac-s",
			displayDate: "2014"
		}
	]
}

export const experiment = {
	url: "https://games-bar.herokuapp.com/",
	description: `A collection of multiplayer enabled small tabletop-style games.`
}

/**
 * Returns an array containing the icons of the menu item
 * and all its children recursively
 * @param {MenuItem} menu
 * @returns {string[]}
 */
function getIconsFromMenu(menu) {
	let ret = []
	if (menu.icon) ret.push(menu.icon)
	if (menu.children) ret.push(...menu.children.flatMap(getIconsFromMenu))
	return ret
}

export const blogs = [
	{
		title: "2 ans en Irlande",
		date: "2018",
		slug: "2-ans-en-irlande",
		displayDate: "2016-2018",
		visible: false
	},
	{
		title: "2 years in Ireland",
		date: "2018",
		slug: "2-years-in-ireland",
		displayDate: "2016-2018",
		visible: true
	},
	{
		title: "Auto Subs",
		date: "2019-01-26",
		slug: "auto-subs",
		displayDate: "January 2019",
		visible: true
	},
	{
		title: "BAC S",
		date: "2014",
		slug: "bac-s",
		displayDate: "2014",
		visible: false
	},
	{
		title: "Telligo and summer camps",
		date: "2019-06",
		slug: "colos-telligo",
		displayDate: "April and August 2019",
		visible: true
	},
	{
		title: "D2E",
		date: "2019",
		slug: "d2e",
		displayDate: "2019 to now",
		visible: false
	},
	{
		title: "DUETI + Bachelor",
		date: "2016",
		slug: "dueti-bachelor",
		displayDate: "2016-2018",
		visible: false
	},
	{
		title: "DUT INFO",
		date: "2014",
		slug: "dut-info",
		displayDate: "2014-2016",
		visible: false
	},
	{
		title: "So I made an e-commerce website from scratch",
		date: "2019-09",
		slug: "e-commerce-from-scratch",
		displayDate: "Summer and Fall 2019",
		visible: true
	},
	{
		title: "Flashcards",
		date: "2019-06-09",
		slug: "flashcards",
		displayDate: "June 2019",
		visible: true
	},
	{
		title: "Project Hestia",
		date: "2018-06-17",
		slug: "hestia",
		displayDate: "June 2018 till now",
		visible: true
	},
	{
		title: "I like teaching",
		date: "2020",
		slug: "i-like-teaching",
		displayDate: "2016 till now",
		visible: true
	},
	{
		title: "I made a new website for myself",
		date: "2020-02-14",
		slug: "i-made-a-website",
		displayDate: false,
		visible: true
	},
	{
		title: "Let's be an entrepreneur!",
		date: "2019-09-12",
		slug: "lets-be-entrepreneur",
		displayDate: false,
		visible: true
	},
	{
		title: "I like to move it move it",
		date: "2020-03-18",
		slug: "move-it-move-it",
		displayDate: false,
		visible: true
	},
	{
		title: "Project Naga",
		date: "2018-12-03",
		slug: "naga",
		displayDate: "December 2018",
		visible: true
	},
	{
		title: "Solitaire",
		date: "2018-10-28",
		slug: "solitaire",
		displayDate: false,
		visible: false
	},
	{
		title: "My first and only internship to date",
		date: "2016-04-04",
		slug: "stage-alpes-controles",
		displayDate: false,
		visible: false
	},
	{
		title: "Super 3D Retro",
		date: "2017-05-12",
		slug: "super-3d-retro-fr",
		displayDate: "May 2017",
		visible: false
	},
	{
		title: "Super 3D Retro",
		date: "2017-05-12",
		slug: "super-3d-retro",
		displayDate: "May 2017",
		visible: true
	},
	{
		title: "title",
		date: "2020-01-27",
		slug: "template",
		displayDate: false,
		visible: false
	},
	{
		title: "Weird small games",
		date: "2020-03-31",
		slug: "vitruvius",
		displayDate: false,
		visible: true
	},
	{
		title: "What is beauty?",
		date: "2020-07-16",
		slug: "what-is-beauty",
		displayDate: false,
		visible: true
	}
]
