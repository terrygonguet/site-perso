const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const scrollbars = require("postcss-scrollbar")

const config = {
	plugins: [tailwindcss(), scrollbars({ width: "6px" }), autoprefixer],
}

module.exports = config
