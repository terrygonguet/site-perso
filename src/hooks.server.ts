import { dev } from "$app/environment"
import { stringify_error } from "$lib/error"
import { i18nHandle } from "$lib/server/i18n"
import { sequence } from "@sveltejs/kit/hooks"

export const handle = sequence(i18nHandle, ({ event, resolve }) => {
	const theme = event.cookies.get("override-theme") ?? "dark"
	return resolve(event, {
		transformPageChunk({ html }) {
			return html.replace("%theme%", theme)
		},
	})
})

export const handleError = ({ error, event, status, message }) => {
	console.error({ status, message })
	console.error(error)

	if (dev) {
		return {
			message: "Something went wrong",
			code: "unknown",
			cause: stringify_error(error),
		}
	}

	return {
		message: "Something went wrong",
		code: "unknown",
	}
}
