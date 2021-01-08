import React from "react"

import Layout from "./../../../node_modules/gatsby-theme-blog/src/components/layout"
import SEO from "./../../../node_modules/gatsby-theme-blog/src/components/seo"
import PostList from "./../../../node_modules/gatsby-theme-blog/src/components/post-list"
import TwitterCard from "../../../content/assets/icon.png"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" imageSource={TwitterCard} />
    <main className='container mx-auto flex-grow'>
      <PostList posts={posts} />
    </main>
  </Layout>
)

export default Posts
