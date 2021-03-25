import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

type Props = Required<{
  previous: any
  next: any
}> | undefined

const PreviousNext: React.FC<Props> = (pagination) => {
  console.log(pagination)
  return(
    <>
      {(pagination.previous || pagination.next) && (
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
            {pagination.previous && (
              <Styled.a as={Link} to={pagination.previous.slug} rel="prev">
                ← {pagination.previous.title}
              </Styled.a>
            )}
          </li>
          <li className='flex justify-end mt-4'>
            {pagination.next && (
              <Styled.a as={Link} to={pagination.next.slug} rel="next">
                {pagination.next.title} →
              </Styled.a>
            )}
          </li>
        </div>
      )}
    </>
  );
}

export default PreviousNext;