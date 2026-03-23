import { browser } from "$app/environment"
import { createSubscriber } from "svelte/reactivity"

let initial_value = "dark"
if (browser) initial_value = document.documentElement.dataset.theme ?? initial_value

export class Theme {
	static #subscribe = createSubscriber(update => (this.#update = update))
	static #update = () => {}

	static #current = initial_value as "light" | "dark"
	static get current() {
		this.#subscribe()
		return this.#current
	}
	static set current(value) {
		if (browser) document.documentElement.dataset.theme = value
		this.#current = value
		this.#update()
	}

	static toggle() {
		this.current = this.#current == "light" ? "dark" : "light"
	}
}
