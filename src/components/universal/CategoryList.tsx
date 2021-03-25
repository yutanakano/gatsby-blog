import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CategoryList: React.FC = () => {
  const { allMdx } = useStaticQuery(
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
  );
  return(
    <nav>
      <h1>カテゴリ一覧</h1>
      <ul>
        {allMdx.group.map((category: { fieldValue: string | null | undefined; totalCount: React.ReactNode; }) => (
          <li key={category.fieldValue}>
            <Link to={`/categories/${category.fieldValue}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList