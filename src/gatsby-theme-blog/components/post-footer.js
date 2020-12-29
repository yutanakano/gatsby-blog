import React from "react"
import { Link } from "gatsby"
import { css, Styled, Flex } from "theme-ui"

import Bio from "../components/bio"

const PostFooter = ({ previous, next }) => (
  <footer className='flex justify-center'>
    <Styled.hr />
    <Bio />
    <div>
      {(previous || next) && (
        <Flex
          as="ul"
          css={css({
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          })}
        >
          <li>
            {previous && (
              <Styled.a as={Link} to={previous.slug} rel="prev">
                ← {previous.title}
              </Styled.a>
            )}
          </li>
          <li>
            {next && (
              <Styled.a as={Link} to={next.slug} rel="next">
                {next.title} →
              </Styled.a>
            )}
          </li>
        </Flex>
      )}
    </div>
  </footer>
)

export default PostFooter
