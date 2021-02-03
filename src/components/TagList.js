import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const TagList = () => (
  <StaticQuery
    query = {
      graphql`
        query {
          allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `
    }
    render={data => (
      <nav>
        <h1>タグ一覧</h1>
        <ul>
          {data.allMdx.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
)

export default TagList