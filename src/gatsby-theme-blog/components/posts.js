import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"
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
