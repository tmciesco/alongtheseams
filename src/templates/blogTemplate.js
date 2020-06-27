import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogPostContainer = styled.div`
	.blog-post {
		width: 80%;
		margin: 0 auto;
	}

	img {
		height: 350px;
		width: auto;
	}
`

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<BlogPostContainer>
				<div className="blog-post">
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<img src={frontmatter.thumbnail} alt={frontmatter.title} />
					<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
				</div>
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
				thumbnail
			}
		}
	}
`
