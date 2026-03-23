import { env } from "$env/dynamic/private"

export const SUPPORTED_LANGS = env.SUPPORTED_LANGS?.split(/,\s*/) ?? []

export const FALLBACK_LANG = env.FALLBACK_LANG ?? "en"
