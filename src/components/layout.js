import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import styled from "styled-components"
import "./index.css"

const Header = styled.header`
	padding: 10px;
	background: #4f4789;
`

const NavContainer = styled.nav`
	width: 50%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	a {
		color: #ffffff;
		text-decoration: none;
	}
`

const Layout = ({ children }) => {
	const { state } = useContext(SnipcartContext)
	const { cartQuantity } = state

	return (
		<>
			<div>
				<Header>
					<NavContainer>
						<Link to="/">Home</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/podcast">Podcast</Link>
						<Link to="/about">About</Link>
						<button className="snipcart-checkout">
							Cart (<span>{cartQuantity}</span>)
						</button>
					</NavContainer>
				</Header>
				<main>{children}</main>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
