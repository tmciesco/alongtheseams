import styled from "styled-components"
import { Box } from "../Box/Box"

export const FlexRow = styled(Box)`
	border: 1px solid red;
	width: ${props => (props.width ? 12.5 * props.width : 12.5)}%;
`
