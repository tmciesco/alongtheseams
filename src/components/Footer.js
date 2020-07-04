import React from "react"
import styled from "styled-components"
import { Text } from "../bruin"

const StyledFooter = styled.footer`
	padding: ${(props) => props.theme.spaces["hu"]};
	margin-top: ${(props) => props.theme.spaces["hu"]};
	text-align: center;
	background-color: ${(props) => props.theme.colors["info"]["dark"]};
`

const Footer = () => {
	return (
		<StyledFooter>
			<Text fontWeight="bold" shade="light">
				&copy; 2020 Along the Seams
			</Text>
		</StyledFooter>
	)
}

export { Footer }
