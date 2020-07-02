import styled from "styled-components"
import { Box } from "../Box/Box"

export const FlexCol = styled(Box)`
	border: 1px solid red;
	height: ${props => 12.5 * props.height}%;
`
