const config = require("gatsby-plugin-config").default
const path = require("path")
const fetch = require("node-fetch")

const getProductData = async () => {
	try {
		const response = await fetch("https://api.printify.com/v1/shops/1786556/products.json", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${config.PRINTIFY_API_KEY}`,
			},
		})
		const json = await response.json()
		const products = json.data
		return products
	} catch (error) {
		console.log(error)
	}
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)
	const result = await graphql(`
		{
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)
	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				slug: node.frontmatter.slug,
			},
		})
	})

	const products = await getProductData()

	createPage({
		path: `/products`,
		component: path.resolve("./src/templates/productsTemplate.js"),
		context: { products },
	})
}
