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
		let blogdata = await fs.readFile(`src/blogdata/${slug}.json`)
		let blog = JSON.parse(blogdata)
		if (!blog.visible) {
			throw { code: "ENOENT", message: "Blog post is not visible" }
		} else {
			res.setHeader("Content-Type", "application/json")
			delete blog.visible
			res.end(JSON.stringify(blog))
		}
	} catch (err) {
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
