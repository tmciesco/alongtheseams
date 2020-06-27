import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShopPage = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("https://api.printify.com/v1/shops/1786556/products.json", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.GATSBY_PRINTIFY_API_KEY}`,
			},
		})
			.then((response) => response.json())
			.then((productArray) => {
				console.log(productArray.data)
				setProducts(productArray.data)
				setLoading(false)
			})
	}, [])

	return (
		<Layout>
			<SEO title="Shop" />
			<h1>Shop Gatsby Page Works</h1>
			{loading ? <h4>loading products...</h4> : ""}
			{products.map((product) => {
				return (
					<div key={product.id}>
						<h2>{product.title}</h2>
						<button
							className="snipcart-add-item"
							data-item-id={product.id}
							data-item-price={product.variants[0].price * 0.01}
							data-item-url="/"
							data-item-description={product.description}
							data-item-image={product.images[0].src}
							data-item-name={product.title}
							data-item-custom1-name="Color"
							data-item-custom1-options="Solid White|Solid Black|Heather Grey|Solid Red"
							data-item-custom1-value="Solid Red"
							data-item-custom2-name="Size"
							data-item-custom2-options="XS|SM|MD|LG|XL|2XL"
							data-item-custom2-value="MD"
						>
							Add to cart
						</button>
					</div>
				)
			})}
		</Layout>
	)
}

export default ShopPage
