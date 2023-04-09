import { browser } from "$app/environment"
import { writable } from "svelte/store"

const store = writable<"light" | "dark">("light")

export function initDarkMode() {
	if (!browser) return () => {}
	const stored = localStorage.getItem("mode")
	if (stored) store.set(stored as any)
	else if (window.matchMedia("(prefers-color-scheme: dark)").matches) store.set("dark")
	return store.subscribe(mode => {
		switch (mode) {
			case "light":
				document.documentElement.classList.remove("dark")
				break
			case "dark":
				document.documentElement.classList.add("dark")
				break
		}
	})
}

export const mode = {
	subscribe: store.subscribe,
	toggle() {
		store.update(mode => {
			const next = mode == "dark" ? "light" : "dark"
			localStorage.setItem("mode", next)
			return next
		})
	},
	set(mode: "light" | "dark") {
		localStorage.setItem("mode", mode)
		store.set(mode)
	},
}
