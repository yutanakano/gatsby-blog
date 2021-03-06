import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const CategoryList = () => (
  <StaticQuery
    query = {
      graphql`
        query {
          allMdx(limit: 2000) {
            group(field: frontmatter___category) {
              fieldValue
              totalCount
            }
          }
        }
      `
    }
    render={data => (
      <nav>
        <h1>カテゴリ一覧</h1>
        <ul>
          {data.allMdx.group.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
)

export default CategoryList