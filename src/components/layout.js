import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"

const Layout = ({ children }) => {
	const { state } = useContext(SnipcartContext)
	const { cartQuantity } = state

	return (
		<>
			<div>
				<header>
					<div
						style={{
							width: "50%",
							margin: "0 auto",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Link to="/">Home</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/podcast">Podcast</Link>
						<Link to="/about">About</Link>
						<button className="snipcart-checkout">
							Cart (<span>{cartQuantity}</span>)
						</button>
					</div>
				</header>
				<main>{children}</main>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
