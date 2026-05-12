export function stringify_error(error: unknown): string {
	if (Error.isError(error)) {
		if (error.stack?.startsWith(error.name)) return error.stack
		let str = `[${error.name}: ${error.message}]`
		if (error.stack) str += "\n" + error.stack
		return str
	} else return JSON.stringify(error, null, 2)
}
