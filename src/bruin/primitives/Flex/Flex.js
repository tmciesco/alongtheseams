import styled from "styled-components"
import { Box } from "../Box/Box"

export const Flex = styled(Box)`
	display: flex;
	flex-direction: ${props => (props.direction ? props.direction : "row")};
	width: ${props => (props.width ? props.width : "1140px")};
	height: ${props => (props.height ? props.height : "auto")};
	margin: 0 auto;
	justify-content: ${props => (props.justifyContent ? props.justifyContent : "space-evenly")};
	flex-wrap: ${props => (props.wrap ? props.wrap : "wrap")};
`
