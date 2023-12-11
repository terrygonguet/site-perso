export async function load({ locals: { locale } }) {
	return { serverLocale: locale }
}
