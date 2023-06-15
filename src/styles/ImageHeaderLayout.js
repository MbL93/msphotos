import styled from "styled-components"

const ImageHeaderDiv = styled.div`
  min-height: 10vh;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  font-weight: 400;
`
const ImageHeaderWrapper = styled.div`
display: ${props => (props.isVisible ? `block` : `none`)};`

const ImageHeading1 = styled.h1`
  font-weight: 400;
`

export { ImageHeaderDiv, ImageHeading1, ImageHeaderWrapper }
