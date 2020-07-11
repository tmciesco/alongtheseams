import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const PodcastRollContainer = styled.div`
	width: 960px;
	margin: 50px auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
`

const PodcastCard = styled.article`
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
	cursor: pointer;
	border-radius: 10px;
`

const PodcastCardImage = styled.div`
	height: 250px;
	width: 300px;
	background-image: url(${(props) => props.srcImg});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	border-radius: 10px 10px 0 0;
`

const PodcastCardContent = styled.div`
	padding: 20px;
	h3 {
		margin: 5px;

		a {
			color: darkred;
		}
	}

	small {
		margin: 10px;
		color: blue;
	}
`

const PodcastPage = ({ data }) => {
	const podcasts = data.allMarkdownRemark.edges
	return (
		<Layout>
			<SEO title="Podcasts" />
			<PodcastRollContainer>
				{podcasts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<Link to={node.frontmatter.slug} style={{ textDecoration: "none" }}>
							<PodcastCard key={node.frontmatter.slug}>
								<PodcastCardImage srcImg={node.frontmatter.thumbnail} />
								<PodcastCardContent>
									<h3>
										<Link style={{ textDecoration: `none` }} to={node.frontmatter.slug}>
											{title}
										</Link>
									</h3>
									<small>{node.frontmatter.date}</small>
									<p>{node.frontmatter.description}</p>
								</PodcastCardContent>
								<div>
									<p
										dangerouslySetInnerHTML={{
											__html: node.frontmatter.description || node.excerpt,
										}}
									/>
								</div>
							</PodcastCard>
						</Link>
					)
				})}
			</PodcastRollContainer>
		</Layout>
	)
}

export default PodcastPage

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			filter: { frontmatter: { type: { eq: "podcast" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						type
						slug
						title
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
						description
					}
				}
			}
		}
	}
`
