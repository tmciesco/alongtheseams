import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import { Heading } from "../bruin"

const BlogPostContainer = styled.div`
	.top-img {
		height: 360px;
		width: 100%;
		z-index: -1;
	}
`
const BlogPost = styled.div`
	width: 850px;
	margin: 0 auto;
	margin-top: -150px;
	background: #ffffff;
	padding: 25px;
	border-radius: 10px;
`

const BlogTitle = styled(Heading)`
	text-align: center;
	font-size: 48px;
`

const BlogPostInfo = styled.p`
	text-align: center;
	margin-bottom: 10px;
`

const BlogAuthor = styled.span`
	font-weight: 700;
`
const BlogDate = styled.span``

const BlogContent = styled.div`
	padding: 15px;

	p {
		font-size: 18px;
	}
`
export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	console.log(frontmatter)
	return (
		<Layout>
			<BlogPostContainer>
				<Img className="top-img" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
				<BlogPost>
					<BlogTitle>{frontmatter.title}</BlogTitle>
					<BlogPostInfo>
						<BlogAuthor>{frontmatter.author}</BlogAuthor> - <BlogDate>{frontmatter.date}</BlogDate>
						<p style={{ marginTop: "10px", marginBottom: "10px" }}>
							{frontmatter.tags.map((tag) => {
								return (
									<span
										key={tag}
										style={{
											background: "lightgrey",
											borderRadius: "10px",
											padding: "2px 5px",
											marginLeft: "5px",
											fontWeight: "700",
											textTransform: "uppercase",
											fontSize: "12px",
										}}
									>
										{tag}
									</span>
								)
							})}
						</p>
					</BlogPostInfo>
					<hr />
					<BlogContent dangerouslySetInnerHTML={{ __html: html }} />
				</BlogPost>
			</BlogPostContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				thumbnail {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
				author
				tags
			}
		}
	}
`
