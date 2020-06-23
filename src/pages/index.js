import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
		</div>
	</Layout>
)

export default IndexPage
