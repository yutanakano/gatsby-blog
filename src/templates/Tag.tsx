import React from "react"

import { graphql, Link } from "gatsby";
import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "../gatsby-theme-blog/components/seo"
import TwitterCard from "../../content/assets/icon.png"

const Tag = ({ location, pageContext, data }: { location: any; pageContext: any; data: any; }) => {
  const { tag } = pageContext;
  const { edges } = data.allMdx;

  return (
    <Layout>
      <SEO location={location} title={`${tag}の記事一覧`} imageSource={TwitterCard}/>
      <main className='container mx-auto flex-grow'>
        {tag}の記事一覧
        {
          edges.map((edge:any) => {
            return(
              <div key={`${edge.node.frontmatter.id}`}>
                <Link to={`/${edge.node.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </div>
            )
          })
        }
      </main>
    </Layout>
  );
};

export const query = graphql`
query ($tag: [String]) {
    allMdx(
      filter: { frontmatter: { tags: { in: $tag } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            category
            date(formatString: "YYYY/MM/DD")
            tags
          }
        }
      }
    }
  }
`

export default Tag;
