import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import styled from "styled-components"
import "./index.css"
import cart from "../images/cart.svg"
//import atsLogo from "../images/ats-logo.svg"
import atsLogo from "../images/ats-duo-logo.svg"
//import atsLogo from "../images/ats-tricolor-logo.svg"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "../bruin/themes"
import { Footer } from "./Footer"

const Header = styled.header`
	padding: 20px 35px;
	background: #ffffff;
	display: grid;
	grid-template-columns: 400px 1fr 400px;
	align-items: center;
`

const NavContainer = styled.nav`
	width: 80%;
	display: flex;
	justify-content: space-around;

	a {
		color: #333333;
		text-decoration: none;
	}
`

const CartButton = styled.div`
	justify-self: end;
	cursor: pointer;
	height: 25px;
	width: auto;
	position: relative;

	img {
		height: 100%;
	}
`

const CartQtyDisplay = styled.span`
	position: absolute;
	font-size: 12px;
	font-weight: 700;
	left: -7px;
	top: -5px;
	padding: 2px 5px;
	border-radius: 25px;
	background: lightseagreen;
	color: darkblue;
`

const Layout = ({ children }) => {
	const { state } = useContext(SnipcartContext)
	const { cartQuantity } = state

	return (
		<ThemeProvider theme={standard}>
			<GlobalStyle />
			<div>
				<Header>
					<NavContainer>
						<Link to="/blog">Blog</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/podcast">Podcast</Link>
						<Link to="/about">About</Link>
					</NavContainer>
					<div>
						<Link to="/" style={{ textDecoration: "none" }}>
							<img
								src={atsLogo}
								alt="logo"
								style={{
									display: "block",
									margin: "0 auto",
									padding: "0",
									height: "5rem",
								}}
							/>
							<p style={{ margin: "0", fontSize: "10px", textAlign: "center", lineHeight: "4px" }}>
								A BASEBALL BLOG.
							</p>
						</Link>
					</div>
					<CartButton className="snipcart-checkout">
						<img src={cart} alt="cart" />
						{cartQuantity ? <CartQtyDisplay>{cartQuantity}</CartQtyDisplay> : ""}
					</CartButton>
				</Header>
				<main>{children}</main>
				<Footer />
			</div>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
