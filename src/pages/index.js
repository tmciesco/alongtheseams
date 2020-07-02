import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import baseballHero from "../images/bw-baseball.jpg"
import attpark from "../images/attpark.jpg"
import dodgerstadium from "../images/dodgerstadium.jpg"
import baseballyard from "../images/baseballyard.jpg"
import { BlogCard } from "../components/BlogCard"
import { Heading, Text, Box, Button } from "../bruin"

const Hero = styled.div`
	height: 700px;
	width: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(${dodgerstadium});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 64px;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9);
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
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9);
	}
`

const HeroContent = styled.div`
	background: radial-gradient(ellipse at center, rgba(109, 30, 24, 0.8) 0, rgba(0, 0, 0, 0) 70%);
	display: flex;
	flex-direction: column;
	padding: 100px;
`

const CategoryNavContainer = styled.div`
	width: 100%;
	background: ${(props) => props.theme["colors"]["neutral"]["s3"]};
`
const CategoryNav = styled.ul`
	width: 50%;
	display: flex;
	margin: 0 auto;
	justify-content: space-around;
	padding: 20px;
`

const CategoryNavItem = styled.li`
	list-style: none;
	cursor: pointer;
	color: white;
`

const FancyHeading = styled.h3`
	font-size: 48px;
	text-align: center;
	margin: ${(props) => props.theme["spaces"]["hu"]} auto;
	border-bottom: 20px solid ${(props) => props.theme["colors"]["info"]["t3"]};
	line-height: 0.4;
	width: 90%;
`
const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Hello" />
			<Hero>
				<HeroContent>
					<Heading>On Shortened Seasons</Heading>
					<Heading as="h3" fontSize="xs" fontWeight="light" style={{ fontStyle: "italic" }}>
						Kyle Ciesco
					</Heading>
					<Text fontSize="sm" pb="md">
						07/14/2020
					</Text>
					<Text style={{ width: "50%", margin: "0 auto" }}>
						Featured Post Description Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Atque modi quos sunt vitae exercitationem pariatur est dolore aspernatur nostrum
						repellat? Praesentium impedit ducimus exercitationem asperiores!
					</Text>
					<Button
						style={{ width: "250px", margin: "30px auto", fontWeight: "700", letterSpacing: "1px" }}
						mode="info"
						shade="s1"
					>
						Read More
					</Button>
				</HeroContent>
			</Hero>
			<CategoryNavContainer>
				<CategoryNav>
					<CategoryNavItem>Featured</CategoryNavItem>
					<CategoryNavItem>Analysis</CategoryNavItem>
					<CategoryNavItem>Predictions</CategoryNavItem>
					<CategoryNavItem>Research</CategoryNavItem>
					<CategoryNavItem>What If</CategoryNavItem>
					<CategoryNavItem>Player Profiles</CategoryNavItem>
				</CategoryNav>
			</CategoryNavContainer>
			{/* possible categories: players you don't remember, games from the time capsule,
				stories/longform narrative, pitcher analysis, batter analysis, predictions, extremes, player
				profiles, projections, prospects, rankings, what ifs, research */}
			<div
				style={{ display: "grid", gridTemplateColumns: "75% 1fr", width: "80%", margin: "0 auto" }}
			>
				<div>
					<FancyHeading>Featured Posts</FancyHeading>
					<div style={{ display: "grid", gridTemplateColumns: "1fr", gridRowGap: "50px" }}>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={baseballHero}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={baseballyard}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={attpark}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={baseballHero}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={baseballyard}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={attpark}
						/>
						<BlogCard
							title="Title of the Interesting Post"
							description="prop description"
							author="Troy Ciesco"
							date="06/22/2020"
							link="/blog"
							img={baseballHero}
						/>
					</div>
				</div>
				<Box mt="hu" shade="light" style={{ borderRadius: "10px" }}>
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
