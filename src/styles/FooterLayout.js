import styled from "styled-components"

const StyledFooter = styled.header`
  width: 100%;
  line-height: 80px;
  height: 80px !important;
  display: flex;
  box-shadow: 0 0 transparent, 0 0 transparent, 0 5px 5px -4px rgb(0 0 0 / 10%);
  align-items: center;
  justify-content: center;

  background-color: grey;
`
const FooterSpan = styled.span`
  max-width: 1200px;
  margin: auto;
  display: block;
  box-sizing: border-box;
  color: white;
`
export { StyledFooter, FooterSpan }
