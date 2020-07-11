const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node)
}
// Commenting out until I decide to use Printify's API directly
// const config = require("gatsby-plugin-config").default
// const fetch = require("node-fetch")
// const getProductData = async () => {
// 	try {
// 		const response = await fetch("https://api.printify.com/v1/shops/1786556/products.json", {
// 			method: "GET",
// 			headers: {
// 				Authorization: `Bearer ${config.PRINTIFY_API_KEY}`,
// 			},
// 		})
// 		const json = await response.json()
// 		const products = json.data
// 		return products
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)
	const productTemplate = path.resolve(`./src/templates/productTemplate.js`)
	const result = await graphql(`
		{
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				edges {
					node {
						id
						frontmatter {
							slug
							type
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

	const allEdges = result.data.allMarkdownRemark.edges
	const blogEdges = allEdges.filter(({ node }) => node.frontmatter.type === "blog-post")
	const productEdges = allEdges.filter(({ node }) => node.frontmatter.type === "product")

	blogEdges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogPostTemplate,
			context: {
				slug: node.frontmatter.slug,
			},
		})
	})

	productEdges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: productTemplate,
			context: {
				slug: node.frontmatter.slug,
			},
		})
	})

	// Commenting out until I decide to use printify's API directly

	// const products = await getProductData()

	// createPage({
	// 	path: `/shop`,
	// 	component: path.resolve("./src/templates/AllProductsTemplate.js"),
	// 	context: { products },
	// })

	createPage({
		path: `/shop`,
		component: path.resolve("./src/templates/AllProductsTemplate.js"),
	})
}
