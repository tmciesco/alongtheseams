import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Hello" />
			<div
				style={{
					width: "100%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<h1>Along the Seams</h1>
				<h2>~ A Baseball Blog ~</h2>
				<h3>Coming soon.</h3>
				<Link to="/blog">Blog</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/podcast">Podcast</Link>
				<Link to="/about">About</Link>
			</div>
		</Layout>
	)
}

export default IndexPage
