import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Markdown from "../../components/post/Markdown"

import Layout from "./layout"
import SEO from "../../../node_modules/gatsby-theme-blog/src/components/seo"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostFooter from "./post-footer"
import PostHero from "./post-hero"

import ShareButton from '../../components/ShareButton'

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
          <MDXProvider components={Markdown}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </section>
      </article>
      <ShareButton title={post.title} slug={post.slug}/>
      <PostFooter {...{ previous, next }} />
    </main>
  </Layout>
)

export default Post
