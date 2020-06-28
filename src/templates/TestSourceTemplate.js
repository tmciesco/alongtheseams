import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
	const {
		allMarkdownRemark: { edges },
	} = data
	console.log(edges)
	return (
		<Layout>
			<SEO title="Shop" />
			<h1>Along the Seams Gear</h1>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center" }}>
				{edges.map(({ node: product }) => {
					return (
						<div key={product.frontmatter.productID}>
							<img
								src={product.frontmatter.thumbnail}
								alt={product.frontmatter.name}
								style={{ height: "250px", width: "auto", margin: "0 auto", display: "block" }}
							/>
							<h2 style={{ textAlign: "center" }}>{product.frontmatter.name}</h2>
							<button
								style={{ margin: "0 auto", display: "block" }}
								className="snipcart-add-item"
								data-item-id={product.frontmatter.productID}
								data-item-price={product.frontmatter.price}
								data-item-url="/test"
								data-item-description={product.frontmatter.description}
								data-item-image={product.frontmatter.thumbnail}
								data-item-name={product.frontmatter.name}
								data-item-custom1-name="Color"
								data-item-custom1-options={product.frontmatter.colors}
								data-item-custom1-value="White"
								data-item-custom2-name="Size"
								data-item-custom2-options={product.frontmatter.sizes}
								data-item-custom2-value="MD"
							>
								Add to cart
							</button>
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
						name
						price
						description
						thumbnail
						colors
						sizes
					}
				}
			}
		}
	}
`
