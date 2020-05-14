import { createMachine, assign } from "@xstate/fsm"
import { menus as radialNavData } from "~data"

export const currencyFormatter = new Intl.NumberFormat(undefined, {
	style: "currency",
	currency: "EUR"
})

export const dateFormatter = new Intl.DateTimeFormat(undefined, {
	year: "numeric",
	month: "long",
	day: "2-digit"
})

/**
 * Returns a promise wich resolves with an Image
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
export function getUISprite(src) {
	return new Promise((resolve, reject) => {
		let img = new Image()
		img.onload = () => resolve(img)
		img.onerror = reject
		img.src = src
	})
}

export const radialNavMachine = createMachine({
	id: "RadialNavigation",
	initial: "closed",
	context: { history: [radialNavData] },
	states: {
		closed: {
			on: {
				ACTIVATE: "opening"
			}
		},
		opening: {
			on: { ANIMATION_DONE: "open" }
		},
		open: {
			on: {
				CLOSE: "closing",
				NAVIGATE: {
					target: "navigating",
					actions: assign({
						history: ({ history }, ev) => [
							history[0].children[ev.value],
							...history
						]
					})
				},
				BACK: {
					target: "navigating",
					actions: assign({
						history: ({ history }, ev) =>
							history.filter((_, i) => i != 0)
					})
				}
			}
		},
		navigating: {
			on: { ANIMATION_DONE: "open" }
		},
		closing: {
			on: { ANIMATION_DONE: "closed" }
		}
	}
})

/**
 * Returns an iterator going from `from` to `to` or over the length
 * of the array if it is the only parameter
 * @param {number|any[]} from start of the range or an array
 * @param {number=} to end of the range (inclusive, optional)
 * @param {number=} step defaults to 1
 */
export function* range(from, to, step = 1) {
	let isarray = Array.isArray(from),
		f = isarray ? 0 : from,
		t = isarray ? from.length - 1 : to
	for (let i = f; i <= t; i += step) yield isarray ? [from[i], i] : i
}

/**
 * Computes your current age. Warning: month is 0 based
 * @param {number[]} dateOfBirth A [day,month,year] array. Warning: month is 0 based
 */
export function computeAge(dateOfBirth) {
	const now = new Date()
	let age = now.getFullYear() - dateOfBirth[2]

	// if we're before our birthday we're 1 year younger
	if (
		now.getMonth() < dateOfBirth[1] ||
		(now.getMonth() == dateOfBirth[1] && now.getDate() < dateOfBirth[0])
	)
		age--

	return age
}
