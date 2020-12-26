import React from "react"

import Layout from "./../../../node_modules/gatsby-theme-blog/src/components/layout"
import SEO from "./../../../node_modules/gatsby-theme-blog/src/components/seo"
import Footer from "./../../../node_modules/gatsby-theme-blog/src/components/home-footer"
import PostList from "./../../../node_modules/gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main className='container mx-auto flex-grow'>
      <PostList posts={posts} />
    </main>
    <Footer/>
  </Layout>
)

export default Posts
