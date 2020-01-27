import { promises as fs } from "fs"
import { IncomingMessage, ServerResponse } from "http"

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 */
export async function get(req, res, next) {
	const { slug } = req.params

	try {
		let blog = await fs.readFile(`blogdata/${slug}.json`)
		res.setHeader("Content-Type", "application/json")
		delete blog.visible
		res.end(blog)
	} catch (err) {
		console.error(err)
		let message = "Something went wrong",
			code = 500
		if (err.code == "ENOENT") {
			message = `Blog post '${slug}' not found`
			code = 404
		}
		res.writeHead(code, { "Content-Type": "application/json" })
		res.end(`{ "message": "${message}" }`)
	}
}
