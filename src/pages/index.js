import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import baseballHero from "../images/bw-baseball.jpg"

const Hero = styled.div`
	height: 500px;
	width: 100%;
	background-image: url(${baseballHero});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;

	h1 {
		margin-top: 100px;
		text-align: center;
		font-size: 64px;
		color: #ffffff;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.9);
	}
`

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Hello" />
			<Hero>
				<h1>A baseball blog. And shop. And podcast.</h1>
			</Hero>
		</Layout>
	)
}

export default IndexPage
