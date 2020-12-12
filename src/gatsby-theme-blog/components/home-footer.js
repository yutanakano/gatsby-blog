import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, 
    {` `}
    <Styled.a href="https://yutanakano.net/">yutanakano</Styled.a>
  </footer>
)
export default Footer
