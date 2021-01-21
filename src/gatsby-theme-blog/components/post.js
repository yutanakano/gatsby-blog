import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import PostLayout from "components/post/Layout"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostFooter from "./post-footer"
import PostHero from "./post-hero"

import ShareButton from 'components/post/ShareButton'

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { author, siteUrl, title },
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
    <main className='container mx-auto flex-grow p-4 md:px-72'>
      <article>
        <header>
          <PostHero post={post} />
          <PostDate>{post.date}</PostDate>
          <PostTitle>{post.title}</PostTitle>
        </header>
        <section className='p-4'>
          <MDXProvider components={PostLayout}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
      <ShareButton author={author} siteUrl={siteUrl} slug={post.slug} title={post.title} />
      <PostFooter {...{ previous, next }} />
    </main>
  </Layout>
)

export default Post
