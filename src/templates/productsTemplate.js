import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { products } }) => {
	return (
		<Layout>
			<SEO title="Shop" />
			<h1>Shop Gatsby Page Works</h1>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", justifyItems: "center" }}>
				{/* <div>
					<h2 style={{ textAlign: "center" }}>Test</h2>
					<button
						style={{ margin: "0 auto", display: "block" }}
						className="snipcart-add-item"
						data-item-id="test-product-id"
						data-item-price="42.00"
						data-item-url="/shop"
						data-item-name="Test"
						data-item-custom1-name="Color"
						data-item-custom1-options="Solid White|Solid Black|Heather Grey|Solid Red"
						data-item-custom1-value="Solid Red"
						data-item-custom2-name="Size"
						data-item-custom2-options="XS|SM|MD|LG|XL|2XL"
						data-item-custom2-value="MD"
					>
						Add to cart
					</button>
				</div> */}
				{products.map((product) => {
					return (
						<div key={product.id}>
							<img
								src={product.images[0].src}
								alt={product.title}
								style={{ height: "250px", width: "auto", margin: "0 auto", display: "block" }}
							/>
							<h2 style={{ textAlign: "center" }}>{product.title}</h2>
							<button
								style={{ margin: "0 auto", display: "block" }}
								className="snipcart-add-item"
								data-item-id={product.id}
								data-item-price={product.variants[0].price * 0.01}
								data-item-url="/shop"
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
			</div>
		</Layout>
	)
}
