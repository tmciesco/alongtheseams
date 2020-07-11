import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { BlogCard } from "../components/BlogCard"

const BlogRollContainer = styled.div`
	width: 960px;
	margin: 50px auto;
`

const BlogPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	return (
		<Layout>
			<SEO title="Blog" />
			<BlogRollContainer>
				<div style={{ display: "grid", gridTemplateColumns: "1fr", gridRowGap: "50px" }}>
					{posts.map(({ node }) => {
						return (
							<BlogCard
								title={node.frontmatter.title}
								description={node.frontmatter.description}
								author={node.frontmatter.author}
								date={node.frontmatter.date}
								link={node.frontmatter.slug}
								img={
									<Img
										className="card-img"
										fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
									/>
								}
							/>
						)
					})}
				</div>
			</BlogRollContainer>
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
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "blog-post" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						type
						slug
						title
						description
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`
