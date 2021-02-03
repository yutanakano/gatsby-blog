import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RelatedArticle = ({ post }) => {
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
            const relatedArticle = getTagWithArticle(node, post)
            if (relatedArticle.length) {
              return(createLink(relatedArticle))
            }
          })
        }
      </ul>
    </nav>
  );
};

function getTagWithArticle(node, post) {
  const relatedArticle = [];
  for(let i = 0; i < post.tags.length; i++) {
    // 一致するタグを含んでいる && relatedArticleが空 && 同じ記事ではない
    if (node.frontmatter.tags?.includes(post.tags[i]) && !relatedArticle.length && !(createPath(node.slug) === post.slug)) {
      relatedArticle.push(node)
    }
  }
  return(relatedArticle)
}

function createPath(slug) {
  return(`/${ slug }`)
}

function createLink(relatedArticle) {
  return(
    relatedArticle.map(node=>{
      return(
        <li key={ node.id }>
          <Link to={ createPath(node.slug) }>
            { node.frontmatter.title }
          </Link>
        </li>
      )
    })
  )
}
export default RelatedArticle
