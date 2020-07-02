import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const ProductContainer = styled.div`
	padding: 20px;
	width: 80%;
	margin: 0 auto;
`
const ProductImg = styled.img`
	height: 250px;
	width: auto;
`
const ProductPost = styled.div``

const ProductTitle = styled.h1``
const ProductDescription = styled.p``

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter } = markdownRemark
	const [colors, setColors] = useState([])
	const [selectedColor, setSelectedColor] = useState("")
	const [sizes, setSizes] = useState([])
	const [selectedSize, setSelectedSize] = useState("")
	const [qty, setQty] = useState(1)

	useEffect(() => {
		setColors(frontmatter.colors.split("|"))
		setSizes(frontmatter.sizes.split("|"))
	}, [frontmatter.colors, frontmatter.sizes])

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
	}

	const handleSizeChange = (event) => {
		setSelectedSize(event.target.value)
	}

	const handleQtyChange = (event) => {
		setQty(event.target.value)
	}

	return (
		<Layout>
			<ProductContainer>
				<ProductImg src={frontmatter.thumbnail} alt={frontmatter.name} />
				<ProductPost>
					<ProductTitle>{frontmatter.name}</ProductTitle>
					<ProductDescription>{frontmatter.description}</ProductDescription>
					<select defaultValue={selectedColor} onBlur={handleColorChange}>
						{colors.map((color) => {
							return (
								<option key={color} value={color}>
									{color}
								</option>
							)
						})}
					</select>
					<select defaultValue={selectedSize} onBlur={handleSizeChange}>
						{sizes.map((size) => {
							return (
								<option key={size} value={size}>
									{size}
								</option>
							)
						})}
					</select>
					<label htmlFor="qty">Qty</label>
					<input
						type="number"
						aria-label="qty"
						name="qty"
						defaultValue={qty}
						onBlur={handleQtyChange}
						min="1"
					/>
					<button
						style={{ margin: "0 auto", display: "block" }}
						className="snipcart-add-item"
						data-item-id={frontmatter.productID}
						data-item-price={frontmatter.price}
						data-item-url={frontmatter.slug}
						data-item-description={frontmatter.description}
						data-item-image={frontmatter.thumbnail}
						data-item-name={frontmatter.name}
						data-item-quantity={qty}
						data-item-custom1-name="Color"
						data-item-custom1-options={frontmatter.colors}
						data-item-custom1-value={selectedColor}
						data-item-custom2-name="Size"
						data-item-custom2-options={frontmatter.sizes}
						data-item-custom2-value={selectedSize}
					>
						Add to cart
					</button>
				</ProductPost>
			</ProductContainer>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				productID
				description
				slug
				name
				price
				thumbnail
				colors
				sizes
			}
		}
	}
`
