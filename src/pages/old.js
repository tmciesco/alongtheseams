// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export const OldPage = ({ data }) => {
// 	const { allMarkdownRemark } = data
// 	return (
// 		<Layout>
// 			<SEO title="Shop" />
// 			<h1>Along the Seams Gear</h1>
// 			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center" }}>
// 				{allMarkdownRemark.map((product) => {
// 					return (
// 						<div key={product.frontmatter.id}>
// 							<p>{product.frontmatter.id}</p>
// 							<p>{product.frontmatter.price}</p>
// 							<p>{product.frontmatter.description}</p>
// 						</div>
// 					)
// 				})}
// 			</div>
// 		</Layout>
// 	)
// }

// export const pageQuery = graphql`
// 	{
// 		allMarkdownRemark(frontmatter: { id: { eq: "6543" } }) {
// 			edges {
// 				node {
// 					id
// 					frontmatter {
// 						id
// 						slug
// 						price
// 						description
// 					}
// 				}
// 			}
// 		}
// 	}
// `
