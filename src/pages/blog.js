import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const BlogPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Blog Gatsby Page Works</h1>
		<Link to="/blog/purple">Purple</Link>
	</Layout>
)

export default BlogPage
