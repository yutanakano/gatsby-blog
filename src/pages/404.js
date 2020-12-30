import React from "react"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "../../node_modules/gatsby-theme-blog/src/components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage