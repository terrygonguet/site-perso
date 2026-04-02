import { browser } from "$app/environment"
import { on } from "svelte/events"

export const user_presence = $state({ has_interacted: false })

if (browser && !user_presence.has_interacted) {
	function user_interaction() {
		user_presence.has_interacted = true
		keydown_off()
		pointermove_off()
		wheel_off()
	}

	const keydown_off = on(document, "keydown", user_interaction)
	const pointermove_off = on(document, "pointermove", user_interaction)
	const wheel_off = on(document, "wheel", user_interaction)
}
