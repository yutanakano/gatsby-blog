/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author, description },
    },
    avatar,
  } = data

  return (
    <div>
      <BioContent avatar={avatar.childImageSharp.fixed} author={author} description={description}/>
    </div>
  )
}

const bioQuery = graphql`
  query Query {
    site {
      siteMetadata {
        author
        description
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
