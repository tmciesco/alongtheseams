// Initialize dotenv
require("dotenv").config({
	//path: `.env.${process.env.NODE_ENV}`, // or '.env'
	path: `.env`, // or '.env'
})

module.exports = {
	siteMetadata: {
		title: `Along the Seams`,
		description: `A baseball blog.`,
		author: `@tmciesco`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/_data`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					"gatsby-remark-relative-images",
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-source-printify`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
			},
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				enableIdentityWidget: false,
			},
		},
		{
			resolve: "gatsby-plugin-snipcart-advanced",
			options: {
				apiKey: process.env.GATSBY_SNIPCART_API_KEY,
				openCartOnAdd: false,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
