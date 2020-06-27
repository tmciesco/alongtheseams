import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import styled from "styled-components"
import "./index.css"
import cart from "../images/cart.svg"

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
		<>
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
							<h1
								style={{
									margin: "0",
									padding: "0",
									textAlign: "center",
									color: "darkred",
								}}
							>
								Along the Seams
							</h1>
						</Link>
					</div>
					<CartButton className="snipcart-checkout">
						<img src={cart} alt="cart" />
						{cartQuantity ? <CartQtyDisplay>{cartQuantity}</CartQtyDisplay> : ""}
					</CartButton>
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
