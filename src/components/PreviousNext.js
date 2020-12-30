import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

export default ({ previous, next }) => (
  <>
    {(previous || next) && (
      <div
        className="max-w-full mx-auto"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li className="flex justify-start mt-4">
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li className='flex justify-end mt-4'>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </div>
    )}
  </>
)
