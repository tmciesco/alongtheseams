import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import { BlogCard } from "../components/BlogCard"
import { Heading, Text, Box, Button } from "../bruin"

const Hero = styled.div`
	height: 700px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	h1 {
		font-size: 64px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		color: #ffffff;
		text-align: center;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9),
			0 7px 5px rgba(109, 30, 24, 0.8);
	}
`

const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 100px;
`

const CategoryNavContainer = styled.div`
	width: 100%;
	height: 70px;
	background: ${(props) => props.theme["colors"]["info"]["dark"]};
	z-index: -1;
	position: absolute;
`
const CategoryNav = styled.ul`
	width: 75%;
	display: flex;
	margin: 0 auto;
	justify-content: space-around;
	padding: 20px;

	.selected {
		font-weight: 700;
		background: darkred;
		border-radius: 10px;
	}
`

const CategoryNavItem = styled.li`
	list-style: none;
	cursor: pointer;
	color: white;
	padding: 5px;
`

const FancyHeading = styled.h3`
	font-size: 48px;
	text-align: center;
	margin: ${(props) => props.theme["spaces"]["hu"]} auto;
	border-bottom: 20px solid ${(props) => props.theme["colors"]["info"]["t3"]};
	line-height: 0.4;
	width: 40%;
`
const IndexPage = ({ data }) => {
	const [postCategory, setPostCategory] = useState("Featured")

	function handleCategoryNavItemClick(category) {
		setPostCategory(category)
	}

	const posts = data.allMarkdownRemark.edges
	const heroPostContent = posts.filter(({ node }) => node.frontmatter.hero === true)
	const heroPost = heroPostContent[0].node.frontmatter
	return (
		<Layout>
			<SEO title="Hello" />
			<Hero>
				<Img
					style={{ position: "absolute", zIndex: "-2", height: "100%", width: "100%" }}
					fluid={heroPost.thumbnail.childImageSharp.fluid}
				/>
				<HeroContent>
					<Heading>{heroPost.title}</Heading>
					<Heading as="h3" fontSize="xs" fontWeight="light" style={{ fontStyle: "italic" }}>
						{heroPost.author}
					</Heading>
					<Text fontSize="sm" pb="md">
						{heroPost.date}
					</Text>
					<Text style={{ width: "50%", margin: "0 auto" }}>{heroPost.description}</Text>
					<Link to={`${heroPost.slug}`} style={{ margin: "30px auto" }}>
						<Button
							style={{
								width: "250px",
								fontWeight: "700",
								letterSpacing: "1px",
							}}
							mode="info"
							shade="s1"
						>
							Read More
						</Button>
					</Link>
				</HeroContent>
			</Hero>
			<CategoryNavContainer></CategoryNavContainer>
			{/* possible categories: players you don't remember, games from the time capsule,
				stories/longform narrative, pitcher analysis, batter analysis, predictions, extremes, player
				profiles, projections, prospects, rankings, what ifs, research */}
			<div
				style={{ display: "grid", gridTemplateColumns: "75% 1fr", width: "80%", margin: "0 auto" }}
			>
				<div>
					<CategoryNav>
						<CategoryNavItem
							className={postCategory === "Featured" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("Featured")}
						>
							Featured
						</CategoryNavItem>
						<CategoryNavItem
							className={postCategory === "Analysis" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("Analysis")}
						>
							Analysis
						</CategoryNavItem>
						<CategoryNavItem
							className={postCategory === "Predictions" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("Predictions")}
						>
							Predictions
						</CategoryNavItem>
						<CategoryNavItem
							className={postCategory === "Research" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("Research")}
						>
							Research
						</CategoryNavItem>
						<CategoryNavItem
							className={postCategory === "What If" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("What If")}
						>
							What If
						</CategoryNavItem>
						<CategoryNavItem
							className={postCategory === "Player Profiles" ? "selected" : ""}
							onClick={() => handleCategoryNavItemClick("Player Profiles")}
						>
							Player Profiles
						</CategoryNavItem>
					</CategoryNav>
					<FancyHeading>
						{postCategory}
						{postCategory === "Featured" ? " Posts" : ""}
					</FancyHeading>
					<div style={{ display: "grid", gridTemplateColumns: "1fr", gridRowGap: "50px" }}>
						{posts.map(({ node }) => {
							if (node.frontmatter.tags.includes(postCategory)) {
								return (
									<BlogCard
										key={node.frontmatter.slug}
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
							}
						})}
					</div>
				</div>
				<Box mt="md" shade="light" style={{ borderRadius: "10px", alignSelf: "start" }}>
					<div
						style={{
							borderRadius: "10px",
							marginBottom: "35px",
							height: "250px",
							textAlign: "center",
							padding: "10px",
						}}
					>
						<Heading as="h4" fontSize="sm" pb="sm">
							Latest Podcast Episode
						</Heading>
						<Heading as="h5" fontSize="ti" pb="sm">
							Podcast Episode #26
						</Heading>
						<Text pb="lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, non nihil
							repudiandae deserunt veniam nemo sit quasi tempora rem unde?
						</Text>
						<Button level="other" style={{ fontWeight: "700" }}>
							Listen to Episode
						</Button>
					</div>
					<hr />
					<div
						style={{
							borderRadius: "10px",
							marginBottom: "35px",
							height: "250px",
							textAlign: "center",
							padding: "10px",
						}}
					>
						<Heading as="h4" fontSize="ti" pb="sm">
							Featured Item
						</Heading>
						<Text pb="lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, non nihil
							repudiandae deserunt veniam nemo sit quasi tempora rem unde?
						</Text>
						<Button level="other">Go to Shop</Button>
					</div>
					<hr />
					<div
						style={{
							borderRadius: "10px",
							marginBottom: "35px",
							height: "250px",
							textAlign: "center",
							padding: "10px",
						}}
					>
						<Heading as="h4" fontSize="ti" pb="sm">
							Player of the Day
						</Heading>
						<Text pb="lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, non nihil
							repudiandae deserunt veniam nemo sit quasi tempora rem unde?
						</Text>
						<Button level="other">Learn More</Button>
					</div>
					<hr />
					<div
						style={{
							borderRadius: "10px",
							marginBottom: "35px",
							height: "250px",
							textAlign: "center",
							padding: "10px",
						}}
					>
						<Heading as="h4" fontSize="ti" pb="sm">
							Random Stat of the Day
						</Heading>
						<Text pb="lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, non nihil
							repudiandae deserunt veniam nemo sit quasi tempora rem unde?
						</Text>
					</div>
					<hr />
					<div
						style={{
							background: "lightgray",
							borderRadius: "10px",
							marginBottom: "35px",
							height: "250px",
						}}
					>
						<h4>Social and sign up for newsletter</h4>
					</div>
				</Box>
			</div>
		</Layout>
	)
}

export default IndexPage

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
						hero
						slug
						title
						author
						thumbnail {
							childImageSharp {
								fluid(maxWidth: 1200, maxHeight: 700) {
									...GatsbyImageSharpFluid
								}
							}
						}
						description
						tags
					}
				}
			}
		}
	}
`
