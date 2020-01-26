/**
 * @typedef {Object} MenuItem
 * @property {string} label
 * @property {string} icon
 * @property {MenuItem[]=} children
 * @property {string=} page
 */

/** @type {MenuItem} */
const menus = {
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
					label: "Finished",
					icon: "checkmark",
					page: "projects/done"
				},
				{
					label: "Old or Unfinished",
					icon: "cobweb",
					page: "projects/abandonned"
				},
				{
					label: "Current Experiment",
					icon: "science",
					page: "projects/experiment"
				}
			]
		},
		{
			label: "Contact",
			icon: "link",
			page: "contact"
		}
	]
};

export default menus;

export const icons = getIconsFromMenu(menus);

/**
 * Returns an array containing the icons of the menu item
 * and all its children recursively
 * @param {MenuItem} menu
 * @returns {string[]}
 */
function getIconsFromMenu(menu) {
	let ret = [];
	if (menu.icon) ret.push(menu.icon);
	if (menu.children) ret.push(...menu.children.flatMap(getIconsFromMenu));
	return ret;
}
