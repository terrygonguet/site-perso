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
			page: "cv"
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
		title: "Super 3D Retro",
		slug: "super-3d-retro",
		date: "2017-05-12",
	}
]

export const alive = [
	{
		title: "I made an e-commerce website from scratch",
		slug: "e-commerce-from-scratch",
		displayDate: "Middle of 2019",
	},
	{
		title: "Let's be an entrepreneur",
		slug: "lets-be-an-entrepreneur",
		displayDate: "September 2019",
	},
]

export const cv = {
	experiences: [
		{
			title: "I made an e-commerce website from scratch",
			slug: "e-commerce-from-scratch",
			displayDate: "Middle of 2019",
		},
		{
			title: "Let's be an entrepreneur",
			slug: "lets-be-an-entrepreneur",
			displayDate: "September 2019",
		},
		{
			title: "I like teaching",
			slug: "i-like-teaching",
			displayDate: "2016 till now",
		},
		{
			title: "Telligo and summer camps",
			slug: "colos-telligo",
			displayDate: "April and July 2019",
		},
		{
			title: "Internship at Alpes Contrôles",
			slug: "stage-alpes-controles",
			displayDate: "April 2016",
		},
	],
	studies: [
		{
			title: "Diplôme Étudiant Entrepreneur - Lyon 3",
			slug: "d2e",
			displayDate: "2019 till now",
		},
		{
			title: "DUETI + Bachelor in Computing - IT Tallaght",
			slug: "dueti-bachelor",
			displayDate: "2016-2018",
		},
		{
			title: "DUT Informatique - Université Savoie Mt. Blanc",
			slug: "dut-info",
			displayDate: "2014-2016",
		},
		{
			title: "BAC S - St Julien en Genevois",
			slug: "bac-s",
			displayDate: "2014",
		},
	]
}

export const experiment = {
	url: "https://next.interestingby.design/",
	description: `The next website for <a href="https://interestingby.design/" target="_blank" class="a">Interesting By Design</a>`
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