import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
	const { allMarkdownRemark } = data
	return (
		<Layout>
			<SEO title="Shop" />
			<h1>Along the Seams Gear</h1>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center" }}>
				{allMarkdownRemark.map((product) => {
					return (
						<div key={product.frontmatter.id}>
							<p>{product.frontmatter.id}</p>
							<p>{product.frontmatter.price}</p>
							<p>{product.frontmatter.description}</p>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	{
		allMarkdownRemark(filter: { frontmatter: { type: { eq: "product" } } }) {
			edges {
				node {
					id
					frontmatter {
						productID
						type
						slug
						price
						description
					}
				}
			}
		}
	}
`
