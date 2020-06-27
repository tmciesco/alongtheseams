import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogPostContainer = styled.div``
const TopImg = styled.div`
	height: 360px;
	width: 100%;
	background-image: url(${(props) => props.bgImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`
const BlogPost = styled.div`
	width: 850px;
	margin: 0 auto;
	position: absolute;
	background: #ffffff;
	top: 250px;
	left: calc(50% - 450px);
	padding: 25px;
	border-radius: 10px;
`

const BlogTitle = styled.h1`
	text-align: center;
	font-size: 48px;
`
const BlogDate = styled.p`
	text-align: center;
`

const BlogContent = styled.div`
	padding: 15px;
`
export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<BlogPostContainer>
				<TopImg bgImg={frontmatter.thumbnail}>
					<BlogPost>
						<BlogTitle>{frontmatter.title}</BlogTitle>
						<BlogDate>{frontmatter.date}</BlogDate>
						<hr />
						<BlogContent dangerouslySetInnerHTML={{ __html: html }} />
					</BlogPost>
				</TopImg>
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
