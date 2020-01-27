import { promises as fs } from "fs"
import { IncomingMessage, ServerResponse } from "http"

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 */
export async function get(req, res, next) {
	try {
		let files = await fs.readdir("blogdata")
		let blogsdata = await Promise.all(
			files.map(f =>
				fs.readFile(`blogdata/${f}`).then(data => ({
					slug: f.replace(".json", ""),
					blog: JSON.parse(data)
				}))
			)
		)
		let blogs = blogsdata
			.filter(data => data.blog.visible)
			.map(({ blog: { title, date, tags }, slug }) => ({
				title,
				date,
				slug,
				tags
			}))
		res.setHeader("Content-Type", "application/json")
		res.end(JSON.stringify(blogs))
	} catch (err) {
		res.writeHead(500, { "Content-Type": "application/json" })
		res.end(`{ "message": "Something went wrong" }`)
	}
}
