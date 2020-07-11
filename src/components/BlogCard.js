import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Heading, Text, Button } from "../bruin"

const StyledBlogCard = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;

	.card-img {
		width: 350px;
		height: inherit;
		position: relative;
		border-radius: 10px;
	}
`
const ContentContainer = styled.div`
	padding: 20px 20px 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const ReadMoreContainer = styled.div`
	align-self: flex-end;
	margin-right: ${(props) => props.theme["spaces"]["hu"]};
`
const BlogCard = ({ title, date, description, link, author, img }) => {
	return (
		<StyledBlogCard>
			{img}
			<ContentContainer>
				<Heading as="h2">{title}</Heading>
				<Heading as="h5" fontSize="ti" pl="md" pb="sm" fontWeight="light" shade="t1">
					{author} - {date}
				</Heading>
				<Text pt="xs" pb="lg" pl="sm" pr="sm">
					{description}
				</Text>
				<ReadMoreContainer>
					<Link to={link}>
						<Button level="other" mode="info">
							Read More
						</Button>
					</Link>
				</ReadMoreContainer>
			</ContentContainer>
		</StyledBlogCard>
	)
}

export { BlogCard }
