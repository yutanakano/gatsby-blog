import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../../node_modules/gatsby-theme-blog/src/components/layout"
import SEO from "../../../node_modules/gatsby-theme-blog/src/components/seo"
import PostTitle from "../../../node_modules/gatsby-theme-blog/src/components/post-title"
import PostDate from "../../../node_modules/gatsby-theme-blog/src/components/post-date"
import PostFooter from "../../../node_modules/gatsby-theme-blog/src/components/post-footer"
import PostHero from "../../../node_modules/gatsby-theme-blog/src/components/post-hero"


const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <main className='container mx-auto flex-grow p-4'>
      <article>
        <header>
          <PostHero post={post} />
          <PostDate>{post.date}</PostDate>
          <PostTitle>{post.title}</PostTitle>
        </header>
        <section className='p-4'>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
      <PostFooter {...{ previous, next }} />
    </main>
  </Layout>
)

export default Post
