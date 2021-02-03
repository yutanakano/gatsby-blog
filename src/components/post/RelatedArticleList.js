import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RelatedArticleList = ({ post }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query{
        allMdx {
          nodes {
            id
            slug
            frontmatter {
              category
              tags
              title
            }
          }
        }
      }
    `
  );
  return (
    <nav>
      <h1>関連記事</h1>
      <ul>
        {
          allMdx.nodes.map(node => {
            const relatedArticle = filter(node, post)
            if (relatedArticle.length) {
              return(getLink(relatedArticle))
            }
          })
        }
      </ul>
    </nav>
  );
};

function filter(node, post) {
  const relatedArticle = [];
  for(let i = 0; i < post.tags.length; i++) {
    // 一致するタグを含んでいる && relatedArticleが空 && 同じ記事ではない
    if (node.frontmatter.tags?.includes(post.tags[i]) && !relatedArticle.length && !(`/${ node.slug }` === post.slug)) {
      relatedArticle.push(node)
    }
  }
  return(relatedArticle)
}

function getLink(relatedArticle) {
  return(
    relatedArticle.map(node=>{
      return(
        <li key={ node.id }>
          <Link to={ `/${ node.slug }` }>
            { node.frontmatter.title }
          </Link>
        </li>
      )
    })
  )
}
export default RelatedArticleList
