import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Blog Gatsby Page Works</h1>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center" }}>
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<article key={node.frontmatter.slug}>
							<Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
								<img
									style={{ width: "150px", height: "auto" }}
									src={node.frontmatter.thumbnail}
									alt={node.frontmatter.title}
								/>
							</Link>
							<header>
								<h3
									style={{
										marginBottom: "10px",
									}}
								>
									<Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
										{title}
									</Link>
								</h3>
								<small>{node.frontmatter.date}</small>
							</header>
							<section>
								<p
									dangerouslySetInnerHTML={{
										__html: node.frontmatter.description || node.excerpt,
									}}
								/>
							</section>
						</article>
					)
				})}
			</div>
		</Layout>
	)
}

export default BlogPage

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
						thumbnail
					}
				}
			}
		}
	}
`
