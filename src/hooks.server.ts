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
