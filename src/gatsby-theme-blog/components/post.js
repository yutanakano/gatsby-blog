import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../../node_modules/gatsby-theme-blog/src/components/layout"
import SEO from "../../../node_modules/gatsby-theme-blog/src/components/seo"
import PostTitle from "../../../node_modules/gatsby-theme-blog/src/components/post-title"
import PostDate from "../../../node_modules/gatsby-theme-blog/src/components/post-date"
import PostFooter from "../../../node_modules/gatsby-theme-blog/src/components/post-footer"
import PostHero from "../../../node_modules/gatsby-theme-blog/src/components/post-hero"

import { Twitter } from 'react-sharingbuttons'
import { Facebook } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'

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
    <main>
      <article>
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </main>
    <Twitter
      url={location.href}
      shareText={post.title}
    />
    <Facebook url={location.href} />
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
