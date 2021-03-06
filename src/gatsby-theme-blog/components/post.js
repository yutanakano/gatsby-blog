import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import PostLayout from "components/post/Layout"

import Layout from "./layout"
import SEO from "./seo"
import Bio from "./bio"
import PostTitle from "components/post/Title"
import PostDate from "components/post/Date"
import PostHero from "components/post/Hero"
import ShareButton from 'components/post/ShareButton'
import PreviousNext from 'components/post/PreviousNext'

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
      <footer className='max-w-max'>
        <Bio />
        <PreviousNext previous={previous} next={next}/>
      </footer>
    </main>
  </Layout>
)

export default Post
