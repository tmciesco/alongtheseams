import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"
import styled from "styled-components"
import "./index.css"
import cart from "../images/cart.svg"

const Header = styled.header`
	padding: 15px;
	background: #4f4789;
	display: grid;
	grid-template-columns: 300px 1fr 300px;
	align-items: center;
	justify-items: center;
`

const NavContainer = styled.nav`
	width: 80%;
	display: flex;
	justify-content: space-around;

	a {
		color: #ffffff;
		text-decoration: none;
	}
`

const CartButton = styled.div`
	cursor: pointer;
	height: 30px;
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
					<div>
						<Link to="/" style={{ textDecoration: "none" }}>
							<h1
								style={{
									margin: "0",
									padding: "0",
									textAlign: "center",
									color: "orange",
								}}
							>
								Along the Seams
							</h1>
						</Link>
					</div>
					<NavContainer>
						<Link to="/blog">Blog</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/podcast">Podcast</Link>
						<Link to="/about">About</Link>
					</NavContainer>
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
