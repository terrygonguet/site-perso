import { navigating } from "$app/stores"
import { derived } from "svelte/store"

let spinnerTimeoutId: number
export const showLoadingSpinner = derived(
	navigating,
	($nav, set) => {
		if ($nav) {
			spinnerTimeoutId = setTimeout(() => set(true), 250)
		} else {
			set(false)
			clearTimeout(spinnerTimeoutId)
		}
	},
	true,
)
