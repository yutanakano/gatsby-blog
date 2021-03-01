/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type BlogPost = {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly date: Scalars['Date'];
  readonly tags: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly excerpt: Scalars['String'];
  readonly image: Maybe<File>;
  readonly imageAlt: Maybe<Scalars['String']>;
  readonly imageCaptionText: Maybe<Scalars['String']>;
  readonly imageCaptionLink: Maybe<Scalars['String']>;
  readonly socialImage: Maybe<File>;
};


type BlogPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type BlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BlogPostEdge>;
  readonly nodes: ReadonlyArray<BlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<BlogPostGroupConnection>;
};


type BlogPostConnection_distinctArgs = {
  field: BlogPostFieldsEnum;
};


type BlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BlogPostFieldsEnum;
};

type BlogPostEdge = {
  readonly next: Maybe<BlogPost>;
  readonly node: BlogPost;
  readonly previous: Maybe<BlogPost>;
};

type BlogPostFieldsEnum =
  | 'id'
  | 'title'
  | 'body'
  | 'slug'
  | 'date'
  | 'tags'
  | 'excerpt'
  | 'image.sourceInstanceName'
  | 'image.absolutePath'
  | 'image.relativePath'
  | 'image.extension'
  | 'image.size'
  | 'image.prettySize'
  | 'image.modifiedTime'
  | 'image.accessTime'
  | 'image.changeTime'
  | 'image.birthTime'
  | 'image.root'
  | 'image.dir'
  | 'image.base'
  | 'image.ext'
  | 'image.name'
  | 'image.relativeDirectory'
  | 'image.dev'
  | 'image.mode'
  | 'image.nlink'
  | 'image.uid'
  | 'image.gid'
  | 'image.rdev'
  | 'image.ino'
  | 'image.atimeMs'
  | 'image.mtimeMs'
  | 'image.ctimeMs'
  | 'image.atime'
  | 'image.mtime'
  | 'image.ctime'
  | 'image.birthtime'
  | 'image.birthtimeMs'
  | 'image.blksize'
  | 'image.blocks'
  | 'image.publicURL'
  | 'image.childrenImageSharp'
  | 'image.childrenImageSharp.fixed.base64'
  | 'image.childrenImageSharp.fixed.tracedSVG'
  | 'image.childrenImageSharp.fixed.aspectRatio'
  | 'image.childrenImageSharp.fixed.width'
  | 'image.childrenImageSharp.fixed.height'
  | 'image.childrenImageSharp.fixed.src'
  | 'image.childrenImageSharp.fixed.srcSet'
  | 'image.childrenImageSharp.fixed.srcWebp'
  | 'image.childrenImageSharp.fixed.srcSetWebp'
  | 'image.childrenImageSharp.fixed.originalName'
  | 'image.childrenImageSharp.resolutions.base64'
  | 'image.childrenImageSharp.resolutions.tracedSVG'
  | 'image.childrenImageSharp.resolutions.aspectRatio'
  | 'image.childrenImageSharp.resolutions.width'
  | 'image.childrenImageSharp.resolutions.height'
  | 'image.childrenImageSharp.resolutions.src'
  | 'image.childrenImageSharp.resolutions.srcSet'
  | 'image.childrenImageSharp.resolutions.srcWebp'
  | 'image.childrenImageSharp.resolutions.srcSetWebp'
  | 'image.childrenImageSharp.resolutions.originalName'
  | 'image.childrenImageSharp.fluid.base64'
  | 'image.childrenImageSharp.fluid.tracedSVG'
  | 'image.childrenImageSharp.fluid.aspectRatio'
  | 'image.childrenImageSharp.fluid.src'
  | 'image.childrenImageSharp.fluid.srcSet'
  | 'image.childrenImageSharp.fluid.srcWebp'
  | 'image.childrenImageSharp.fluid.srcSetWebp'
  | 'image.childrenImageSharp.fluid.sizes'
  | 'image.childrenImageSharp.fluid.originalImg'
  | 'image.childrenImageSharp.fluid.originalName'
  | 'image.childrenImageSharp.fluid.presentationWidth'
  | 'image.childrenImageSharp.fluid.presentationHeight'
  | 'image.childrenImageSharp.sizes.base64'
  | 'image.childrenImageSharp.sizes.tracedSVG'
  | 'image.childrenImageSharp.sizes.aspectRatio'
  | 'image.childrenImageSharp.sizes.src'
  | 'image.childrenImageSharp.sizes.srcSet'
  | 'image.childrenImageSharp.sizes.srcWebp'
  | 'image.childrenImageSharp.sizes.srcSetWebp'
  | 'image.childrenImageSharp.sizes.sizes'
  | 'image.childrenImageSharp.sizes.originalImg'
  | 'image.childrenImageSharp.sizes.originalName'
  | 'image.childrenImageSharp.sizes.presentationWidth'
  | 'image.childrenImageSharp.sizes.presentationHeight'
  | 'image.childrenImageSharp.gatsbyImageData'
  | 'image.childrenImageSharp.original.width'
  | 'image.childrenImageSharp.original.height'
  | 'image.childrenImageSharp.original.src'
  | 'image.childrenImageSharp.resize.src'
  | 'image.childrenImageSharp.resize.tracedSVG'
  | 'image.childrenImageSharp.resize.width'
  | 'image.childrenImageSharp.resize.height'
  | 'image.childrenImageSharp.resize.aspectRatio'
  | 'image.childrenImageSharp.resize.originalName'
  | 'image.childrenImageSharp.id'
  | 'image.childrenImageSharp.parent.id'
  | 'image.childrenImageSharp.parent.children'
  | 'image.childrenImageSharp.children'
  | 'image.childrenImageSharp.children.id'
  | 'image.childrenImageSharp.children.children'
  | 'image.childrenImageSharp.internal.content'
  | 'image.childrenImageSharp.internal.contentDigest'
  | 'image.childrenImageSharp.internal.description'
  | 'image.childrenImageSharp.internal.fieldOwners'
  | 'image.childrenImageSharp.internal.ignoreType'
  | 'image.childrenImageSharp.internal.mediaType'
  | 'image.childrenImageSharp.internal.owner'
  | 'image.childrenImageSharp.internal.type'
  | 'image.childImageSharp.fixed.base64'
  | 'image.childImageSharp.fixed.tracedSVG'
  | 'image.childImageSharp.fixed.aspectRatio'
  | 'image.childImageSharp.fixed.width'
  | 'image.childImageSharp.fixed.height'
  | 'image.childImageSharp.fixed.src'
  | 'image.childImageSharp.fixed.srcSet'
  | 'image.childImageSharp.fixed.srcWebp'
  | 'image.childImageSharp.fixed.srcSetWebp'
  | 'image.childImageSharp.fixed.originalName'
  | 'image.childImageSharp.resolutions.base64'
  | 'image.childImageSharp.resolutions.tracedSVG'
  | 'image.childImageSharp.resolutions.aspectRatio'
  | 'image.childImageSharp.resolutions.width'
  | 'image.childImageSharp.resolutions.height'
  | 'image.childImageSharp.resolutions.src'
  | 'image.childImageSharp.resolutions.srcSet'
  | 'image.childImageSharp.resolutions.srcWebp'
  | 'image.childImageSharp.resolutions.srcSetWebp'
  | 'image.childImageSharp.resolutions.originalName'
  | 'image.childImageSharp.fluid.base64'
  | 'image.childImageSharp.fluid.tracedSVG'
  | 'image.childImageSharp.fluid.aspectRatio'
  | 'image.childImageSharp.fluid.src'
  | 'image.childImageSharp.fluid.srcSet'
  | 'image.childImageSharp.fluid.srcWebp'
  | 'image.childImageSharp.fluid.srcSetWebp'
  | 'image.childImageSharp.fluid.sizes'
  | 'image.childImageSharp.fluid.originalImg'
  | 'image.childImageSharp.fluid.originalName'
  | 'image.childImageSharp.fluid.presentationWidth'
  | 'image.childImageSharp.fluid.presentationHeight'
  | 'image.childImageSharp.sizes.base64'
  | 'image.childImageSharp.sizes.tracedSVG'
  | 'image.childImageSharp.sizes.aspectRatio'
  | 'image.childImageSharp.sizes.src'
  | 'image.childImageSharp.sizes.srcSet'
  | 'image.childImageSharp.sizes.srcWebp'
  | 'image.childImageSharp.sizes.srcSetWebp'
  | 'image.childImageSharp.sizes.sizes'
  | 'image.childImageSharp.sizes.originalImg'
  | 'image.childImageSharp.sizes.originalName'
  | 'image.childImageSharp.sizes.presentationWidth'
  | 'image.childImageSharp.sizes.presentationHeight'
  | 'image.childImageSharp.gatsbyImageData'
  | 'image.childImageSharp.original.width'
  | 'image.childImageSharp.original.height'
  | 'image.childImageSharp.original.src'
  | 'image.childImageSharp.resize.src'
  | 'image.childImageSharp.resize.tracedSVG'
  | 'image.childImageSharp.resize.width'
  | 'image.childImageSharp.resize.height'
  | 'image.childImageSharp.resize.aspectRatio'
  | 'image.childImageSharp.resize.originalName'
  | 'image.childImageSharp.id'
  | 'image.childImageSharp.parent.id'
  | 'image.childImageSharp.parent.children'
  | 'image.childImageSharp.children'
  | 'image.childImageSharp.children.id'
  | 'image.childImageSharp.children.children'
  | 'image.childImageSharp.internal.content'
  | 'image.childImageSharp.internal.contentDigest'
  | 'image.childImageSharp.internal.description'
  | 'image.childImageSharp.internal.fieldOwners'
  | 'image.childImageSharp.internal.ignoreType'
  | 'image.childImageSharp.internal.mediaType'
  | 'image.childImageSharp.internal.owner'
  | 'image.childImageSharp.internal.type'
  | 'image.childrenMdx'
  | 'image.childrenMdx.rawBody'
  | 'image.childrenMdx.fileAbsolutePath'
  | 'image.childrenMdx.frontmatter.title'
  | 'image.childrenMdx.frontmatter.date'
  | 'image.childrenMdx.frontmatter.imageAlt'
  | 'image.childrenMdx.frontmatter.category'
  | 'image.childrenMdx.frontmatter.tags'
  | 'image.childrenMdx.slug'
  | 'image.childrenMdx.body'
  | 'image.childrenMdx.excerpt'
  | 'image.childrenMdx.headings'
  | 'image.childrenMdx.headings.value'
  | 'image.childrenMdx.headings.depth'
  | 'image.childrenMdx.html'
  | 'image.childrenMdx.mdxAST'
  | 'image.childrenMdx.tableOfContents'
  | 'image.childrenMdx.timeToRead'
  | 'image.childrenMdx.wordCount.paragraphs'
  | 'image.childrenMdx.wordCount.sentences'
  | 'image.childrenMdx.wordCount.words'
  | 'image.childrenMdx.childrenMdxBlogPost'
  | 'image.childrenMdx.childrenMdxBlogPost.id'
  | 'image.childrenMdx.childrenMdxBlogPost.title'
  | 'image.childrenMdx.childrenMdxBlogPost.slug'
  | 'image.childrenMdx.childrenMdxBlogPost.date'
  | 'image.childrenMdx.childrenMdxBlogPost.tags'
  | 'image.childrenMdx.childrenMdxBlogPost.excerpt'
  | 'image.childrenMdx.childrenMdxBlogPost.imageAlt'
  | 'image.childrenMdx.childrenMdxBlogPost.imageCaptionText'
  | 'image.childrenMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'image.childrenMdx.childrenMdxBlogPost.body'
  | 'image.childrenMdx.childrenMdxBlogPost.children'
  | 'image.childrenMdx.childMdxBlogPost.id'
  | 'image.childrenMdx.childMdxBlogPost.title'
  | 'image.childrenMdx.childMdxBlogPost.slug'
  | 'image.childrenMdx.childMdxBlogPost.date'
  | 'image.childrenMdx.childMdxBlogPost.tags'
  | 'image.childrenMdx.childMdxBlogPost.excerpt'
  | 'image.childrenMdx.childMdxBlogPost.imageAlt'
  | 'image.childrenMdx.childMdxBlogPost.imageCaptionText'
  | 'image.childrenMdx.childMdxBlogPost.imageCaptionLink'
  | 'image.childrenMdx.childMdxBlogPost.body'
  | 'image.childrenMdx.childMdxBlogPost.children'
  | 'image.childrenMdx.id'
  | 'image.childrenMdx.parent.id'
  | 'image.childrenMdx.parent.children'
  | 'image.childrenMdx.children'
  | 'image.childrenMdx.children.id'
  | 'image.childrenMdx.children.children'
  | 'image.childrenMdx.internal.content'
  | 'image.childrenMdx.internal.contentDigest'
  | 'image.childrenMdx.internal.description'
  | 'image.childrenMdx.internal.fieldOwners'
  | 'image.childrenMdx.internal.ignoreType'
  | 'image.childrenMdx.internal.mediaType'
  | 'image.childrenMdx.internal.owner'
  | 'image.childrenMdx.internal.type'
  | 'image.childMdx.rawBody'
  | 'image.childMdx.fileAbsolutePath'
  | 'image.childMdx.frontmatter.title'
  | 'image.childMdx.frontmatter.date'
  | 'image.childMdx.frontmatter.imageAlt'
  | 'image.childMdx.frontmatter.category'
  | 'image.childMdx.frontmatter.tags'
  | 'image.childMdx.slug'
  | 'image.childMdx.body'
  | 'image.childMdx.excerpt'
  | 'image.childMdx.headings'
  | 'image.childMdx.headings.value'
  | 'image.childMdx.headings.depth'
  | 'image.childMdx.html'
  | 'image.childMdx.mdxAST'
  | 'image.childMdx.tableOfContents'
  | 'image.childMdx.timeToRead'
  | 'image.childMdx.wordCount.paragraphs'
  | 'image.childMdx.wordCount.sentences'
  | 'image.childMdx.wordCount.words'
  | 'image.childMdx.childrenMdxBlogPost'
  | 'image.childMdx.childrenMdxBlogPost.id'
  | 'image.childMdx.childrenMdxBlogPost.title'
  | 'image.childMdx.childrenMdxBlogPost.slug'
  | 'image.childMdx.childrenMdxBlogPost.date'
  | 'image.childMdx.childrenMdxBlogPost.tags'
  | 'image.childMdx.childrenMdxBlogPost.excerpt'
  | 'image.childMdx.childrenMdxBlogPost.imageAlt'
  | 'image.childMdx.childrenMdxBlogPost.imageCaptionText'
  | 'image.childMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'image.childMdx.childrenMdxBlogPost.body'
  | 'image.childMdx.childrenMdxBlogPost.children'
  | 'image.childMdx.childMdxBlogPost.id'
  | 'image.childMdx.childMdxBlogPost.title'
  | 'image.childMdx.childMdxBlogPost.slug'
  | 'image.childMdx.childMdxBlogPost.date'
  | 'image.childMdx.childMdxBlogPost.tags'
  | 'image.childMdx.childMdxBlogPost.excerpt'
  | 'image.childMdx.childMdxBlogPost.imageAlt'
  | 'image.childMdx.childMdxBlogPost.imageCaptionText'
  | 'image.childMdx.childMdxBlogPost.imageCaptionLink'
  | 'image.childMdx.childMdxBlogPost.body'
  | 'image.childMdx.childMdxBlogPost.children'
  | 'image.childMdx.id'
  | 'image.childMdx.parent.id'
  | 'image.childMdx.parent.children'
  | 'image.childMdx.children'
  | 'image.childMdx.children.id'
  | 'image.childMdx.children.children'
  | 'image.childMdx.internal.content'
  | 'image.childMdx.internal.contentDigest'
  | 'image.childMdx.internal.description'
  | 'image.childMdx.internal.fieldOwners'
  | 'image.childMdx.internal.ignoreType'
  | 'image.childMdx.internal.mediaType'
  | 'image.childMdx.internal.owner'
  | 'image.childMdx.internal.type'
  | 'image.id'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'imageAlt'
  | 'imageCaptionText'
  | 'imageCaptionLink'
  | 'socialImage.sourceInstanceName'
  | 'socialImage.absolutePath'
  | 'socialImage.relativePath'
  | 'socialImage.extension'
  | 'socialImage.size'
  | 'socialImage.prettySize'
  | 'socialImage.modifiedTime'
  | 'socialImage.accessTime'
  | 'socialImage.changeTime'
  | 'socialImage.birthTime'
  | 'socialImage.root'
  | 'socialImage.dir'
  | 'socialImage.base'
  | 'socialImage.ext'
  | 'socialImage.name'
  | 'socialImage.relativeDirectory'
  | 'socialImage.dev'
  | 'socialImage.mode'
  | 'socialImage.nlink'
  | 'socialImage.uid'
  | 'socialImage.gid'
  | 'socialImage.rdev'
  | 'socialImage.ino'
  | 'socialImage.atimeMs'
  | 'socialImage.mtimeMs'
  | 'socialImage.ctimeMs'
  | 'socialImage.atime'
  | 'socialImage.mtime'
  | 'socialImage.ctime'
  | 'socialImage.birthtime'
  | 'socialImage.birthtimeMs'
  | 'socialImage.blksize'
  | 'socialImage.blocks'
  | 'socialImage.publicURL'
  | 'socialImage.childrenImageSharp'
  | 'socialImage.childrenImageSharp.fixed.base64'
  | 'socialImage.childrenImageSharp.fixed.tracedSVG'
  | 'socialImage.childrenImageSharp.fixed.aspectRatio'
  | 'socialImage.childrenImageSharp.fixed.width'
  | 'socialImage.childrenImageSharp.fixed.height'
  | 'socialImage.childrenImageSharp.fixed.src'
  | 'socialImage.childrenImageSharp.fixed.srcSet'
  | 'socialImage.childrenImageSharp.fixed.srcWebp'
  | 'socialImage.childrenImageSharp.fixed.srcSetWebp'
  | 'socialImage.childrenImageSharp.fixed.originalName'
  | 'socialImage.childrenImageSharp.resolutions.base64'
  | 'socialImage.childrenImageSharp.resolutions.tracedSVG'
  | 'socialImage.childrenImageSharp.resolutions.aspectRatio'
  | 'socialImage.childrenImageSharp.resolutions.width'
  | 'socialImage.childrenImageSharp.resolutions.height'
  | 'socialImage.childrenImageSharp.resolutions.src'
  | 'socialImage.childrenImageSharp.resolutions.srcSet'
  | 'socialImage.childrenImageSharp.resolutions.srcWebp'
  | 'socialImage.childrenImageSharp.resolutions.srcSetWebp'
  | 'socialImage.childrenImageSharp.resolutions.originalName'
  | 'socialImage.childrenImageSharp.fluid.base64'
  | 'socialImage.childrenImageSharp.fluid.tracedSVG'
  | 'socialImage.childrenImageSharp.fluid.aspectRatio'
  | 'socialImage.childrenImageSharp.fluid.src'
  | 'socialImage.childrenImageSharp.fluid.srcSet'
  | 'socialImage.childrenImageSharp.fluid.srcWebp'
  | 'socialImage.childrenImageSharp.fluid.srcSetWebp'
  | 'socialImage.childrenImageSharp.fluid.sizes'
  | 'socialImage.childrenImageSharp.fluid.originalImg'
  | 'socialImage.childrenImageSharp.fluid.originalName'
  | 'socialImage.childrenImageSharp.fluid.presentationWidth'
  | 'socialImage.childrenImageSharp.fluid.presentationHeight'
  | 'socialImage.childrenImageSharp.sizes.base64'
  | 'socialImage.childrenImageSharp.sizes.tracedSVG'
  | 'socialImage.childrenImageSharp.sizes.aspectRatio'
  | 'socialImage.childrenImageSharp.sizes.src'
  | 'socialImage.childrenImageSharp.sizes.srcSet'
  | 'socialImage.childrenImageSharp.sizes.srcWebp'
  | 'socialImage.childrenImageSharp.sizes.srcSetWebp'
  | 'socialImage.childrenImageSharp.sizes.sizes'
  | 'socialImage.childrenImageSharp.sizes.originalImg'
  | 'socialImage.childrenImageSharp.sizes.originalName'
  | 'socialImage.childrenImageSharp.sizes.presentationWidth'
  | 'socialImage.childrenImageSharp.sizes.presentationHeight'
  | 'socialImage.childrenImageSharp.gatsbyImageData'
  | 'socialImage.childrenImageSharp.original.width'
  | 'socialImage.childrenImageSharp.original.height'
  | 'socialImage.childrenImageSharp.original.src'
  | 'socialImage.childrenImageSharp.resize.src'
  | 'socialImage.childrenImageSharp.resize.tracedSVG'
  | 'socialImage.childrenImageSharp.resize.width'
  | 'socialImage.childrenImageSharp.resize.height'
  | 'socialImage.childrenImageSharp.resize.aspectRatio'
  | 'socialImage.childrenImageSharp.resize.originalName'
  | 'socialImage.childrenImageSharp.id'
  | 'socialImage.childrenImageSharp.parent.id'
  | 'socialImage.childrenImageSharp.parent.children'
  | 'socialImage.childrenImageSharp.children'
  | 'socialImage.childrenImageSharp.children.id'
  | 'socialImage.childrenImageSharp.children.children'
  | 'socialImage.childrenImageSharp.internal.content'
  | 'socialImage.childrenImageSharp.internal.contentDigest'
  | 'socialImage.childrenImageSharp.internal.description'
  | 'socialImage.childrenImageSharp.internal.fieldOwners'
  | 'socialImage.childrenImageSharp.internal.ignoreType'
  | 'socialImage.childrenImageSharp.internal.mediaType'
  | 'socialImage.childrenImageSharp.internal.owner'
  | 'socialImage.childrenImageSharp.internal.type'
  | 'socialImage.childImageSharp.fixed.base64'
  | 'socialImage.childImageSharp.fixed.tracedSVG'
  | 'socialImage.childImageSharp.fixed.aspectRatio'
  | 'socialImage.childImageSharp.fixed.width'
  | 'socialImage.childImageSharp.fixed.height'
  | 'socialImage.childImageSharp.fixed.src'
  | 'socialImage.childImageSharp.fixed.srcSet'
  | 'socialImage.childImageSharp.fixed.srcWebp'
  | 'socialImage.childImageSharp.fixed.srcSetWebp'
  | 'socialImage.childImageSharp.fixed.originalName'
  | 'socialImage.childImageSharp.resolutions.base64'
  | 'socialImage.childImageSharp.resolutions.tracedSVG'
  | 'socialImage.childImageSharp.resolutions.aspectRatio'
  | 'socialImage.childImageSharp.resolutions.width'
  | 'socialImage.childImageSharp.resolutions.height'
  | 'socialImage.childImageSharp.resolutions.src'
  | 'socialImage.childImageSharp.resolutions.srcSet'
  | 'socialImage.childImageSharp.resolutions.srcWebp'
  | 'socialImage.childImageSharp.resolutions.srcSetWebp'
  | 'socialImage.childImageSharp.resolutions.originalName'
  | 'socialImage.childImageSharp.fluid.base64'
  | 'socialImage.childImageSharp.fluid.tracedSVG'
  | 'socialImage.childImageSharp.fluid.aspectRatio'
  | 'socialImage.childImageSharp.fluid.src'
  | 'socialImage.childImageSharp.fluid.srcSet'
  | 'socialImage.childImageSharp.fluid.srcWebp'
  | 'socialImage.childImageSharp.fluid.srcSetWebp'
  | 'socialImage.childImageSharp.fluid.sizes'
  | 'socialImage.childImageSharp.fluid.originalImg'
  | 'socialImage.childImageSharp.fluid.originalName'
  | 'socialImage.childImageSharp.fluid.presentationWidth'
  | 'socialImage.childImageSharp.fluid.presentationHeight'
  | 'socialImage.childImageSharp.sizes.base64'
  | 'socialImage.childImageSharp.sizes.tracedSVG'
  | 'socialImage.childImageSharp.sizes.aspectRatio'
  | 'socialImage.childImageSharp.sizes.src'
  | 'socialImage.childImageSharp.sizes.srcSet'
  | 'socialImage.childImageSharp.sizes.srcWebp'
  | 'socialImage.childImageSharp.sizes.srcSetWebp'
  | 'socialImage.childImageSharp.sizes.sizes'
  | 'socialImage.childImageSharp.sizes.originalImg'
  | 'socialImage.childImageSharp.sizes.originalName'
  | 'socialImage.childImageSharp.sizes.presentationWidth'
  | 'socialImage.childImageSharp.sizes.presentationHeight'
  | 'socialImage.childImageSharp.gatsbyImageData'
  | 'socialImage.childImageSharp.original.width'
  | 'socialImage.childImageSharp.original.height'
  | 'socialImage.childImageSharp.original.src'
  | 'socialImage.childImageSharp.resize.src'
  | 'socialImage.childImageSharp.resize.tracedSVG'
  | 'socialImage.childImageSharp.resize.width'
  | 'socialImage.childImageSharp.resize.height'
  | 'socialImage.childImageSharp.resize.aspectRatio'
  | 'socialImage.childImageSharp.resize.originalName'
  | 'socialImage.childImageSharp.id'
  | 'socialImage.childImageSharp.parent.id'
  | 'socialImage.childImageSharp.parent.children'
  | 'socialImage.childImageSharp.children'
  | 'socialImage.childImageSharp.children.id'
  | 'socialImage.childImageSharp.children.children'
  | 'socialImage.childImageSharp.internal.content'
  | 'socialImage.childImageSharp.internal.contentDigest'
  | 'socialImage.childImageSharp.internal.description'
  | 'socialImage.childImageSharp.internal.fieldOwners'
  | 'socialImage.childImageSharp.internal.ignoreType'
  | 'socialImage.childImageSharp.internal.mediaType'
  | 'socialImage.childImageSharp.internal.owner'
  | 'socialImage.childImageSharp.internal.type'
  | 'socialImage.childrenMdx'
  | 'socialImage.childrenMdx.rawBody'
  | 'socialImage.childrenMdx.fileAbsolutePath'
  | 'socialImage.childrenMdx.frontmatter.title'
  | 'socialImage.childrenMdx.frontmatter.date'
  | 'socialImage.childrenMdx.frontmatter.imageAlt'
  | 'socialImage.childrenMdx.frontmatter.category'
  | 'socialImage.childrenMdx.frontmatter.tags'
  | 'socialImage.childrenMdx.slug'
  | 'socialImage.childrenMdx.body'
  | 'socialImage.childrenMdx.excerpt'
  | 'socialImage.childrenMdx.headings'
  | 'socialImage.childrenMdx.headings.value'
  | 'socialImage.childrenMdx.headings.depth'
  | 'socialImage.childrenMdx.html'
  | 'socialImage.childrenMdx.mdxAST'
  | 'socialImage.childrenMdx.tableOfContents'
  | 'socialImage.childrenMdx.timeToRead'
  | 'socialImage.childrenMdx.wordCount.paragraphs'
  | 'socialImage.childrenMdx.wordCount.sentences'
  | 'socialImage.childrenMdx.wordCount.words'
  | 'socialImage.childrenMdx.childrenMdxBlogPost'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.id'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.title'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.slug'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.date'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.tags'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.excerpt'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageAlt'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageCaptionText'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.body'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.children'
  | 'socialImage.childrenMdx.childMdxBlogPost.id'
  | 'socialImage.childrenMdx.childMdxBlogPost.title'
  | 'socialImage.childrenMdx.childMdxBlogPost.slug'
  | 'socialImage.childrenMdx.childMdxBlogPost.date'
  | 'socialImage.childrenMdx.childMdxBlogPost.tags'
  | 'socialImage.childrenMdx.childMdxBlogPost.excerpt'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageAlt'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageCaptionText'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageCaptionLink'
  | 'socialImage.childrenMdx.childMdxBlogPost.body'
  | 'socialImage.childrenMdx.childMdxBlogPost.children'
  | 'socialImage.childrenMdx.id'
  | 'socialImage.childrenMdx.parent.id'
  | 'socialImage.childrenMdx.parent.children'
  | 'socialImage.childrenMdx.children'
  | 'socialImage.childrenMdx.children.id'
  | 'socialImage.childrenMdx.children.children'
  | 'socialImage.childrenMdx.internal.content'
  | 'socialImage.childrenMdx.internal.contentDigest'
  | 'socialImage.childrenMdx.internal.description'
  | 'socialImage.childrenMdx.internal.fieldOwners'
  | 'socialImage.childrenMdx.internal.ignoreType'
  | 'socialImage.childrenMdx.internal.mediaType'
  | 'socialImage.childrenMdx.internal.owner'
  | 'socialImage.childrenMdx.internal.type'
  | 'socialImage.childMdx.rawBody'
  | 'socialImage.childMdx.fileAbsolutePath'
  | 'socialImage.childMdx.frontmatter.title'
  | 'socialImage.childMdx.frontmatter.date'
  | 'socialImage.childMdx.frontmatter.imageAlt'
  | 'socialImage.childMdx.frontmatter.category'
  | 'socialImage.childMdx.frontmatter.tags'
  | 'socialImage.childMdx.slug'
  | 'socialImage.childMdx.body'
  | 'socialImage.childMdx.excerpt'
  | 'socialImage.childMdx.headings'
  | 'socialImage.childMdx.headings.value'
  | 'socialImage.childMdx.headings.depth'
  | 'socialImage.childMdx.html'
  | 'socialImage.childMdx.mdxAST'
  | 'socialImage.childMdx.tableOfContents'
  | 'socialImage.childMdx.timeToRead'
  | 'socialImage.childMdx.wordCount.paragraphs'
  | 'socialImage.childMdx.wordCount.sentences'
  | 'socialImage.childMdx.wordCount.words'
  | 'socialImage.childMdx.childrenMdxBlogPost'
  | 'socialImage.childMdx.childrenMdxBlogPost.id'
  | 'socialImage.childMdx.childrenMdxBlogPost.title'
  | 'socialImage.childMdx.childrenMdxBlogPost.slug'
  | 'socialImage.childMdx.childrenMdxBlogPost.date'
  | 'socialImage.childMdx.childrenMdxBlogPost.tags'
  | 'socialImage.childMdx.childrenMdxBlogPost.excerpt'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageAlt'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageCaptionText'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'socialImage.childMdx.childrenMdxBlogPost.body'
  | 'socialImage.childMdx.childrenMdxBlogPost.children'
  | 'socialImage.childMdx.childMdxBlogPost.id'
  | 'socialImage.childMdx.childMdxBlogPost.title'
  | 'socialImage.childMdx.childMdxBlogPost.slug'
  | 'socialImage.childMdx.childMdxBlogPost.date'
  | 'socialImage.childMdx.childMdxBlogPost.tags'
  | 'socialImage.childMdx.childMdxBlogPost.excerpt'
  | 'socialImage.childMdx.childMdxBlogPost.imageAlt'
  | 'socialImage.childMdx.childMdxBlogPost.imageCaptionText'
  | 'socialImage.childMdx.childMdxBlogPost.imageCaptionLink'
  | 'socialImage.childMdx.childMdxBlogPost.body'
  | 'socialImage.childMdx.childMdxBlogPost.children'
  | 'socialImage.childMdx.id'
  | 'socialImage.childMdx.parent.id'
  | 'socialImage.childMdx.parent.children'
  | 'socialImage.childMdx.children'
  | 'socialImage.childMdx.children.id'
  | 'socialImage.childMdx.children.children'
  | 'socialImage.childMdx.internal.content'
  | 'socialImage.childMdx.internal.contentDigest'
  | 'socialImage.childMdx.internal.description'
  | 'socialImage.childMdx.internal.fieldOwners'
  | 'socialImage.childMdx.internal.ignoreType'
  | 'socialImage.childMdx.internal.mediaType'
  | 'socialImage.childMdx.internal.owner'
  | 'socialImage.childMdx.internal.type'
  | 'socialImage.id'
  | 'socialImage.parent.id'
  | 'socialImage.parent.parent.id'
  | 'socialImage.parent.parent.children'
  | 'socialImage.parent.children'
  | 'socialImage.parent.children.id'
  | 'socialImage.parent.children.children'
  | 'socialImage.parent.internal.content'
  | 'socialImage.parent.internal.contentDigest'
  | 'socialImage.parent.internal.description'
  | 'socialImage.parent.internal.fieldOwners'
  | 'socialImage.parent.internal.ignoreType'
  | 'socialImage.parent.internal.mediaType'
  | 'socialImage.parent.internal.owner'
  | 'socialImage.parent.internal.type'
  | 'socialImage.children'
  | 'socialImage.children.id'
  | 'socialImage.children.parent.id'
  | 'socialImage.children.parent.children'
  | 'socialImage.children.children'
  | 'socialImage.children.children.id'
  | 'socialImage.children.children.children'
  | 'socialImage.children.internal.content'
  | 'socialImage.children.internal.contentDigest'
  | 'socialImage.children.internal.description'
  | 'socialImage.children.internal.fieldOwners'
  | 'socialImage.children.internal.ignoreType'
  | 'socialImage.children.internal.mediaType'
  | 'socialImage.children.internal.owner'
  | 'socialImage.children.internal.type'
  | 'socialImage.internal.content'
  | 'socialImage.internal.contentDigest'
  | 'socialImage.internal.description'
  | 'socialImage.internal.fieldOwners'
  | 'socialImage.internal.ignoreType'
  | 'socialImage.internal.mediaType'
  | 'socialImage.internal.owner'
  | 'socialImage.internal.type';

type BlogPostFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly imageAlt: Maybe<StringQueryOperatorInput>;
  readonly imageCaptionText: Maybe<StringQueryOperatorInput>;
  readonly imageCaptionLink: Maybe<StringQueryOperatorInput>;
  readonly socialImage: Maybe<FileFilterInput>;
};

type BlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BlogPostEdge>;
  readonly nodes: ReadonlyArray<BlogPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type BlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<BlogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BlogThemeConfig = Node & {
  readonly webfontURL: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type BlogThemeConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BlogThemeConfigEdge>;
  readonly nodes: ReadonlyArray<BlogThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<BlogThemeConfigGroupConnection>;
};


type BlogThemeConfigConnection_distinctArgs = {
  field: BlogThemeConfigFieldsEnum;
};


type BlogThemeConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: BlogThemeConfigFieldsEnum;
};

type BlogThemeConfigEdge = {
  readonly next: Maybe<BlogThemeConfig>;
  readonly node: BlogThemeConfig;
  readonly previous: Maybe<BlogThemeConfig>;
};

type BlogThemeConfigFieldsEnum =
  | 'webfontURL'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type BlogThemeConfigFilterInput = {
  readonly webfontURL: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type BlogThemeConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<BlogThemeConfigEdge>;
  readonly nodes: ReadonlyArray<BlogThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type BlogThemeConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<BlogThemeConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.resolutions.base64'
  | 'childrenImageSharp.resolutions.tracedSVG'
  | 'childrenImageSharp.resolutions.aspectRatio'
  | 'childrenImageSharp.resolutions.width'
  | 'childrenImageSharp.resolutions.height'
  | 'childrenImageSharp.resolutions.src'
  | 'childrenImageSharp.resolutions.srcSet'
  | 'childrenImageSharp.resolutions.srcWebp'
  | 'childrenImageSharp.resolutions.srcSetWebp'
  | 'childrenImageSharp.resolutions.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.sizes.base64'
  | 'childrenImageSharp.sizes.tracedSVG'
  | 'childrenImageSharp.sizes.aspectRatio'
  | 'childrenImageSharp.sizes.src'
  | 'childrenImageSharp.sizes.srcSet'
  | 'childrenImageSharp.sizes.srcWebp'
  | 'childrenImageSharp.sizes.srcSetWebp'
  | 'childrenImageSharp.sizes.sizes'
  | 'childrenImageSharp.sizes.originalImg'
  | 'childrenImageSharp.sizes.originalName'
  | 'childrenImageSharp.sizes.presentationWidth'
  | 'childrenImageSharp.sizes.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.resolutions.base64'
  | 'childImageSharp.resolutions.tracedSVG'
  | 'childImageSharp.resolutions.aspectRatio'
  | 'childImageSharp.resolutions.width'
  | 'childImageSharp.resolutions.height'
  | 'childImageSharp.resolutions.src'
  | 'childImageSharp.resolutions.srcSet'
  | 'childImageSharp.resolutions.srcWebp'
  | 'childImageSharp.resolutions.srcSetWebp'
  | 'childImageSharp.resolutions.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.sizes.base64'
  | 'childImageSharp.sizes.tracedSVG'
  | 'childImageSharp.sizes.aspectRatio'
  | 'childImageSharp.sizes.src'
  | 'childImageSharp.sizes.srcSet'
  | 'childImageSharp.sizes.srcWebp'
  | 'childImageSharp.sizes.srcSetWebp'
  | 'childImageSharp.sizes.sizes'
  | 'childImageSharp.sizes.originalImg'
  | 'childImageSharp.sizes.originalName'
  | 'childImageSharp.sizes.presentationWidth'
  | 'childImageSharp.sizes.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.date'
  | 'childrenMdx.frontmatter.image.sourceInstanceName'
  | 'childrenMdx.frontmatter.image.absolutePath'
  | 'childrenMdx.frontmatter.image.relativePath'
  | 'childrenMdx.frontmatter.image.extension'
  | 'childrenMdx.frontmatter.image.size'
  | 'childrenMdx.frontmatter.image.prettySize'
  | 'childrenMdx.frontmatter.image.modifiedTime'
  | 'childrenMdx.frontmatter.image.accessTime'
  | 'childrenMdx.frontmatter.image.changeTime'
  | 'childrenMdx.frontmatter.image.birthTime'
  | 'childrenMdx.frontmatter.image.root'
  | 'childrenMdx.frontmatter.image.dir'
  | 'childrenMdx.frontmatter.image.base'
  | 'childrenMdx.frontmatter.image.ext'
  | 'childrenMdx.frontmatter.image.name'
  | 'childrenMdx.frontmatter.image.relativeDirectory'
  | 'childrenMdx.frontmatter.image.dev'
  | 'childrenMdx.frontmatter.image.mode'
  | 'childrenMdx.frontmatter.image.nlink'
  | 'childrenMdx.frontmatter.image.uid'
  | 'childrenMdx.frontmatter.image.gid'
  | 'childrenMdx.frontmatter.image.rdev'
  | 'childrenMdx.frontmatter.image.ino'
  | 'childrenMdx.frontmatter.image.atimeMs'
  | 'childrenMdx.frontmatter.image.mtimeMs'
  | 'childrenMdx.frontmatter.image.ctimeMs'
  | 'childrenMdx.frontmatter.image.atime'
  | 'childrenMdx.frontmatter.image.mtime'
  | 'childrenMdx.frontmatter.image.ctime'
  | 'childrenMdx.frontmatter.image.birthtime'
  | 'childrenMdx.frontmatter.image.birthtimeMs'
  | 'childrenMdx.frontmatter.image.blksize'
  | 'childrenMdx.frontmatter.image.blocks'
  | 'childrenMdx.frontmatter.image.publicURL'
  | 'childrenMdx.frontmatter.image.childrenImageSharp'
  | 'childrenMdx.frontmatter.image.childrenMdx'
  | 'childrenMdx.frontmatter.image.id'
  | 'childrenMdx.frontmatter.image.children'
  | 'childrenMdx.frontmatter.imageAlt'
  | 'childrenMdx.frontmatter.category'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.childrenMdxBlogPost'
  | 'childrenMdx.childrenMdxBlogPost.id'
  | 'childrenMdx.childrenMdxBlogPost.title'
  | 'childrenMdx.childrenMdxBlogPost.slug'
  | 'childrenMdx.childrenMdxBlogPost.date'
  | 'childrenMdx.childrenMdxBlogPost.tags'
  | 'childrenMdx.childrenMdxBlogPost.excerpt'
  | 'childrenMdx.childrenMdxBlogPost.image.sourceInstanceName'
  | 'childrenMdx.childrenMdxBlogPost.image.absolutePath'
  | 'childrenMdx.childrenMdxBlogPost.image.relativePath'
  | 'childrenMdx.childrenMdxBlogPost.image.extension'
  | 'childrenMdx.childrenMdxBlogPost.image.size'
  | 'childrenMdx.childrenMdxBlogPost.image.prettySize'
  | 'childrenMdx.childrenMdxBlogPost.image.modifiedTime'
  | 'childrenMdx.childrenMdxBlogPost.image.accessTime'
  | 'childrenMdx.childrenMdxBlogPost.image.changeTime'
  | 'childrenMdx.childrenMdxBlogPost.image.birthTime'
  | 'childrenMdx.childrenMdxBlogPost.image.root'
  | 'childrenMdx.childrenMdxBlogPost.image.dir'
  | 'childrenMdx.childrenMdxBlogPost.image.base'
  | 'childrenMdx.childrenMdxBlogPost.image.ext'
  | 'childrenMdx.childrenMdxBlogPost.image.name'
  | 'childrenMdx.childrenMdxBlogPost.image.relativeDirectory'
  | 'childrenMdx.childrenMdxBlogPost.image.dev'
  | 'childrenMdx.childrenMdxBlogPost.image.mode'
  | 'childrenMdx.childrenMdxBlogPost.image.nlink'
  | 'childrenMdx.childrenMdxBlogPost.image.uid'
  | 'childrenMdx.childrenMdxBlogPost.image.gid'
  | 'childrenMdx.childrenMdxBlogPost.image.rdev'
  | 'childrenMdx.childrenMdxBlogPost.image.ino'
  | 'childrenMdx.childrenMdxBlogPost.image.atimeMs'
  | 'childrenMdx.childrenMdxBlogPost.image.mtimeMs'
  | 'childrenMdx.childrenMdxBlogPost.image.ctimeMs'
  | 'childrenMdx.childrenMdxBlogPost.image.atime'
  | 'childrenMdx.childrenMdxBlogPost.image.mtime'
  | 'childrenMdx.childrenMdxBlogPost.image.ctime'
  | 'childrenMdx.childrenMdxBlogPost.image.birthtime'
  | 'childrenMdx.childrenMdxBlogPost.image.birthtimeMs'
  | 'childrenMdx.childrenMdxBlogPost.image.blksize'
  | 'childrenMdx.childrenMdxBlogPost.image.blocks'
  | 'childrenMdx.childrenMdxBlogPost.image.publicURL'
  | 'childrenMdx.childrenMdxBlogPost.image.childrenImageSharp'
  | 'childrenMdx.childrenMdxBlogPost.image.childrenMdx'
  | 'childrenMdx.childrenMdxBlogPost.image.id'
  | 'childrenMdx.childrenMdxBlogPost.image.children'
  | 'childrenMdx.childrenMdxBlogPost.imageAlt'
  | 'childrenMdx.childrenMdxBlogPost.imageCaptionText'
  | 'childrenMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.sourceInstanceName'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.absolutePath'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.relativePath'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.extension'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.size'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.prettySize'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.modifiedTime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.accessTime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.changeTime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.birthTime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.root'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.dir'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.base'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.ext'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.name'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.relativeDirectory'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.dev'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.mode'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.nlink'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.uid'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.gid'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.rdev'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.ino'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.atimeMs'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.mtimeMs'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.ctimeMs'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.atime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.mtime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.ctime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.birthtime'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.birthtimeMs'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.blksize'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.blocks'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.publicURL'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.childrenImageSharp'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.childrenMdx'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.id'
  | 'childrenMdx.childrenMdxBlogPost.socialImage.children'
  | 'childrenMdx.childrenMdxBlogPost.body'
  | 'childrenMdx.childrenMdxBlogPost.parent.id'
  | 'childrenMdx.childrenMdxBlogPost.parent.children'
  | 'childrenMdx.childrenMdxBlogPost.children'
  | 'childrenMdx.childrenMdxBlogPost.children.id'
  | 'childrenMdx.childrenMdxBlogPost.children.children'
  | 'childrenMdx.childrenMdxBlogPost.internal.content'
  | 'childrenMdx.childrenMdxBlogPost.internal.contentDigest'
  | 'childrenMdx.childrenMdxBlogPost.internal.description'
  | 'childrenMdx.childrenMdxBlogPost.internal.fieldOwners'
  | 'childrenMdx.childrenMdxBlogPost.internal.ignoreType'
  | 'childrenMdx.childrenMdxBlogPost.internal.mediaType'
  | 'childrenMdx.childrenMdxBlogPost.internal.owner'
  | 'childrenMdx.childrenMdxBlogPost.internal.type'
  | 'childrenMdx.childMdxBlogPost.id'
  | 'childrenMdx.childMdxBlogPost.title'
  | 'childrenMdx.childMdxBlogPost.slug'
  | 'childrenMdx.childMdxBlogPost.date'
  | 'childrenMdx.childMdxBlogPost.tags'
  | 'childrenMdx.childMdxBlogPost.excerpt'
  | 'childrenMdx.childMdxBlogPost.image.sourceInstanceName'
  | 'childrenMdx.childMdxBlogPost.image.absolutePath'
  | 'childrenMdx.childMdxBlogPost.image.relativePath'
  | 'childrenMdx.childMdxBlogPost.image.extension'
  | 'childrenMdx.childMdxBlogPost.image.size'
  | 'childrenMdx.childMdxBlogPost.image.prettySize'
  | 'childrenMdx.childMdxBlogPost.image.modifiedTime'
  | 'childrenMdx.childMdxBlogPost.image.accessTime'
  | 'childrenMdx.childMdxBlogPost.image.changeTime'
  | 'childrenMdx.childMdxBlogPost.image.birthTime'
  | 'childrenMdx.childMdxBlogPost.image.root'
  | 'childrenMdx.childMdxBlogPost.image.dir'
  | 'childrenMdx.childMdxBlogPost.image.base'
  | 'childrenMdx.childMdxBlogPost.image.ext'
  | 'childrenMdx.childMdxBlogPost.image.name'
  | 'childrenMdx.childMdxBlogPost.image.relativeDirectory'
  | 'childrenMdx.childMdxBlogPost.image.dev'
  | 'childrenMdx.childMdxBlogPost.image.mode'
  | 'childrenMdx.childMdxBlogPost.image.nlink'
  | 'childrenMdx.childMdxBlogPost.image.uid'
  | 'childrenMdx.childMdxBlogPost.image.gid'
  | 'childrenMdx.childMdxBlogPost.image.rdev'
  | 'childrenMdx.childMdxBlogPost.image.ino'
  | 'childrenMdx.childMdxBlogPost.image.atimeMs'
  | 'childrenMdx.childMdxBlogPost.image.mtimeMs'
  | 'childrenMdx.childMdxBlogPost.image.ctimeMs'
  | 'childrenMdx.childMdxBlogPost.image.atime'
  | 'childrenMdx.childMdxBlogPost.image.mtime'
  | 'childrenMdx.childMdxBlogPost.image.ctime'
  | 'childrenMdx.childMdxBlogPost.image.birthtime'
  | 'childrenMdx.childMdxBlogPost.image.birthtimeMs'
  | 'childrenMdx.childMdxBlogPost.image.blksize'
  | 'childrenMdx.childMdxBlogPost.image.blocks'
  | 'childrenMdx.childMdxBlogPost.image.publicURL'
  | 'childrenMdx.childMdxBlogPost.image.childrenImageSharp'
  | 'childrenMdx.childMdxBlogPost.image.childrenMdx'
  | 'childrenMdx.childMdxBlogPost.image.id'
  | 'childrenMdx.childMdxBlogPost.image.children'
  | 'childrenMdx.childMdxBlogPost.imageAlt'
  | 'childrenMdx.childMdxBlogPost.imageCaptionText'
  | 'childrenMdx.childMdxBlogPost.imageCaptionLink'
  | 'childrenMdx.childMdxBlogPost.socialImage.sourceInstanceName'
  | 'childrenMdx.childMdxBlogPost.socialImage.absolutePath'
  | 'childrenMdx.childMdxBlogPost.socialImage.relativePath'
  | 'childrenMdx.childMdxBlogPost.socialImage.extension'
  | 'childrenMdx.childMdxBlogPost.socialImage.size'
  | 'childrenMdx.childMdxBlogPost.socialImage.prettySize'
  | 'childrenMdx.childMdxBlogPost.socialImage.modifiedTime'
  | 'childrenMdx.childMdxBlogPost.socialImage.accessTime'
  | 'childrenMdx.childMdxBlogPost.socialImage.changeTime'
  | 'childrenMdx.childMdxBlogPost.socialImage.birthTime'
  | 'childrenMdx.childMdxBlogPost.socialImage.root'
  | 'childrenMdx.childMdxBlogPost.socialImage.dir'
  | 'childrenMdx.childMdxBlogPost.socialImage.base'
  | 'childrenMdx.childMdxBlogPost.socialImage.ext'
  | 'childrenMdx.childMdxBlogPost.socialImage.name'
  | 'childrenMdx.childMdxBlogPost.socialImage.relativeDirectory'
  | 'childrenMdx.childMdxBlogPost.socialImage.dev'
  | 'childrenMdx.childMdxBlogPost.socialImage.mode'
  | 'childrenMdx.childMdxBlogPost.socialImage.nlink'
  | 'childrenMdx.childMdxBlogPost.socialImage.uid'
  | 'childrenMdx.childMdxBlogPost.socialImage.gid'
  | 'childrenMdx.childMdxBlogPost.socialImage.rdev'
  | 'childrenMdx.childMdxBlogPost.socialImage.ino'
  | 'childrenMdx.childMdxBlogPost.socialImage.atimeMs'
  | 'childrenMdx.childMdxBlogPost.socialImage.mtimeMs'
  | 'childrenMdx.childMdxBlogPost.socialImage.ctimeMs'
  | 'childrenMdx.childMdxBlogPost.socialImage.atime'
  | 'childrenMdx.childMdxBlogPost.socialImage.mtime'
  | 'childrenMdx.childMdxBlogPost.socialImage.ctime'
  | 'childrenMdx.childMdxBlogPost.socialImage.birthtime'
  | 'childrenMdx.childMdxBlogPost.socialImage.birthtimeMs'
  | 'childrenMdx.childMdxBlogPost.socialImage.blksize'
  | 'childrenMdx.childMdxBlogPost.socialImage.blocks'
  | 'childrenMdx.childMdxBlogPost.socialImage.publicURL'
  | 'childrenMdx.childMdxBlogPost.socialImage.childrenImageSharp'
  | 'childrenMdx.childMdxBlogPost.socialImage.childrenMdx'
  | 'childrenMdx.childMdxBlogPost.socialImage.id'
  | 'childrenMdx.childMdxBlogPost.socialImage.children'
  | 'childrenMdx.childMdxBlogPost.body'
  | 'childrenMdx.childMdxBlogPost.parent.id'
  | 'childrenMdx.childMdxBlogPost.parent.children'
  | 'childrenMdx.childMdxBlogPost.children'
  | 'childrenMdx.childMdxBlogPost.children.id'
  | 'childrenMdx.childMdxBlogPost.children.children'
  | 'childrenMdx.childMdxBlogPost.internal.content'
  | 'childrenMdx.childMdxBlogPost.internal.contentDigest'
  | 'childrenMdx.childMdxBlogPost.internal.description'
  | 'childrenMdx.childMdxBlogPost.internal.fieldOwners'
  | 'childrenMdx.childMdxBlogPost.internal.ignoreType'
  | 'childrenMdx.childMdxBlogPost.internal.mediaType'
  | 'childrenMdx.childMdxBlogPost.internal.owner'
  | 'childrenMdx.childMdxBlogPost.internal.type'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.date'
  | 'childMdx.frontmatter.image.sourceInstanceName'
  | 'childMdx.frontmatter.image.absolutePath'
  | 'childMdx.frontmatter.image.relativePath'
  | 'childMdx.frontmatter.image.extension'
  | 'childMdx.frontmatter.image.size'
  | 'childMdx.frontmatter.image.prettySize'
  | 'childMdx.frontmatter.image.modifiedTime'
  | 'childMdx.frontmatter.image.accessTime'
  | 'childMdx.frontmatter.image.changeTime'
  | 'childMdx.frontmatter.image.birthTime'
  | 'childMdx.frontmatter.image.root'
  | 'childMdx.frontmatter.image.dir'
  | 'childMdx.frontmatter.image.base'
  | 'childMdx.frontmatter.image.ext'
  | 'childMdx.frontmatter.image.name'
  | 'childMdx.frontmatter.image.relativeDirectory'
  | 'childMdx.frontmatter.image.dev'
  | 'childMdx.frontmatter.image.mode'
  | 'childMdx.frontmatter.image.nlink'
  | 'childMdx.frontmatter.image.uid'
  | 'childMdx.frontmatter.image.gid'
  | 'childMdx.frontmatter.image.rdev'
  | 'childMdx.frontmatter.image.ino'
  | 'childMdx.frontmatter.image.atimeMs'
  | 'childMdx.frontmatter.image.mtimeMs'
  | 'childMdx.frontmatter.image.ctimeMs'
  | 'childMdx.frontmatter.image.atime'
  | 'childMdx.frontmatter.image.mtime'
  | 'childMdx.frontmatter.image.ctime'
  | 'childMdx.frontmatter.image.birthtime'
  | 'childMdx.frontmatter.image.birthtimeMs'
  | 'childMdx.frontmatter.image.blksize'
  | 'childMdx.frontmatter.image.blocks'
  | 'childMdx.frontmatter.image.publicURL'
  | 'childMdx.frontmatter.image.childrenImageSharp'
  | 'childMdx.frontmatter.image.childrenMdx'
  | 'childMdx.frontmatter.image.id'
  | 'childMdx.frontmatter.image.children'
  | 'childMdx.frontmatter.imageAlt'
  | 'childMdx.frontmatter.category'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.childrenMdxBlogPost'
  | 'childMdx.childrenMdxBlogPost.id'
  | 'childMdx.childrenMdxBlogPost.title'
  | 'childMdx.childrenMdxBlogPost.slug'
  | 'childMdx.childrenMdxBlogPost.date'
  | 'childMdx.childrenMdxBlogPost.tags'
  | 'childMdx.childrenMdxBlogPost.excerpt'
  | 'childMdx.childrenMdxBlogPost.image.sourceInstanceName'
  | 'childMdx.childrenMdxBlogPost.image.absolutePath'
  | 'childMdx.childrenMdxBlogPost.image.relativePath'
  | 'childMdx.childrenMdxBlogPost.image.extension'
  | 'childMdx.childrenMdxBlogPost.image.size'
  | 'childMdx.childrenMdxBlogPost.image.prettySize'
  | 'childMdx.childrenMdxBlogPost.image.modifiedTime'
  | 'childMdx.childrenMdxBlogPost.image.accessTime'
  | 'childMdx.childrenMdxBlogPost.image.changeTime'
  | 'childMdx.childrenMdxBlogPost.image.birthTime'
  | 'childMdx.childrenMdxBlogPost.image.root'
  | 'childMdx.childrenMdxBlogPost.image.dir'
  | 'childMdx.childrenMdxBlogPost.image.base'
  | 'childMdx.childrenMdxBlogPost.image.ext'
  | 'childMdx.childrenMdxBlogPost.image.name'
  | 'childMdx.childrenMdxBlogPost.image.relativeDirectory'
  | 'childMdx.childrenMdxBlogPost.image.dev'
  | 'childMdx.childrenMdxBlogPost.image.mode'
  | 'childMdx.childrenMdxBlogPost.image.nlink'
  | 'childMdx.childrenMdxBlogPost.image.uid'
  | 'childMdx.childrenMdxBlogPost.image.gid'
  | 'childMdx.childrenMdxBlogPost.image.rdev'
  | 'childMdx.childrenMdxBlogPost.image.ino'
  | 'childMdx.childrenMdxBlogPost.image.atimeMs'
  | 'childMdx.childrenMdxBlogPost.image.mtimeMs'
  | 'childMdx.childrenMdxBlogPost.image.ctimeMs'
  | 'childMdx.childrenMdxBlogPost.image.atime'
  | 'childMdx.childrenMdxBlogPost.image.mtime'
  | 'childMdx.childrenMdxBlogPost.image.ctime'
  | 'childMdx.childrenMdxBlogPost.image.birthtime'
  | 'childMdx.childrenMdxBlogPost.image.birthtimeMs'
  | 'childMdx.childrenMdxBlogPost.image.blksize'
  | 'childMdx.childrenMdxBlogPost.image.blocks'
  | 'childMdx.childrenMdxBlogPost.image.publicURL'
  | 'childMdx.childrenMdxBlogPost.image.childrenImageSharp'
  | 'childMdx.childrenMdxBlogPost.image.childrenMdx'
  | 'childMdx.childrenMdxBlogPost.image.id'
  | 'childMdx.childrenMdxBlogPost.image.children'
  | 'childMdx.childrenMdxBlogPost.imageAlt'
  | 'childMdx.childrenMdxBlogPost.imageCaptionText'
  | 'childMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'childMdx.childrenMdxBlogPost.socialImage.sourceInstanceName'
  | 'childMdx.childrenMdxBlogPost.socialImage.absolutePath'
  | 'childMdx.childrenMdxBlogPost.socialImage.relativePath'
  | 'childMdx.childrenMdxBlogPost.socialImage.extension'
  | 'childMdx.childrenMdxBlogPost.socialImage.size'
  | 'childMdx.childrenMdxBlogPost.socialImage.prettySize'
  | 'childMdx.childrenMdxBlogPost.socialImage.modifiedTime'
  | 'childMdx.childrenMdxBlogPost.socialImage.accessTime'
  | 'childMdx.childrenMdxBlogPost.socialImage.changeTime'
  | 'childMdx.childrenMdxBlogPost.socialImage.birthTime'
  | 'childMdx.childrenMdxBlogPost.socialImage.root'
  | 'childMdx.childrenMdxBlogPost.socialImage.dir'
  | 'childMdx.childrenMdxBlogPost.socialImage.base'
  | 'childMdx.childrenMdxBlogPost.socialImage.ext'
  | 'childMdx.childrenMdxBlogPost.socialImage.name'
  | 'childMdx.childrenMdxBlogPost.socialImage.relativeDirectory'
  | 'childMdx.childrenMdxBlogPost.socialImage.dev'
  | 'childMdx.childrenMdxBlogPost.socialImage.mode'
  | 'childMdx.childrenMdxBlogPost.socialImage.nlink'
  | 'childMdx.childrenMdxBlogPost.socialImage.uid'
  | 'childMdx.childrenMdxBlogPost.socialImage.gid'
  | 'childMdx.childrenMdxBlogPost.socialImage.rdev'
  | 'childMdx.childrenMdxBlogPost.socialImage.ino'
  | 'childMdx.childrenMdxBlogPost.socialImage.atimeMs'
  | 'childMdx.childrenMdxBlogPost.socialImage.mtimeMs'
  | 'childMdx.childrenMdxBlogPost.socialImage.ctimeMs'
  | 'childMdx.childrenMdxBlogPost.socialImage.atime'
  | 'childMdx.childrenMdxBlogPost.socialImage.mtime'
  | 'childMdx.childrenMdxBlogPost.socialImage.ctime'
  | 'childMdx.childrenMdxBlogPost.socialImage.birthtime'
  | 'childMdx.childrenMdxBlogPost.socialImage.birthtimeMs'
  | 'childMdx.childrenMdxBlogPost.socialImage.blksize'
  | 'childMdx.childrenMdxBlogPost.socialImage.blocks'
  | 'childMdx.childrenMdxBlogPost.socialImage.publicURL'
  | 'childMdx.childrenMdxBlogPost.socialImage.childrenImageSharp'
  | 'childMdx.childrenMdxBlogPost.socialImage.childrenMdx'
  | 'childMdx.childrenMdxBlogPost.socialImage.id'
  | 'childMdx.childrenMdxBlogPost.socialImage.children'
  | 'childMdx.childrenMdxBlogPost.body'
  | 'childMdx.childrenMdxBlogPost.parent.id'
  | 'childMdx.childrenMdxBlogPost.parent.children'
  | 'childMdx.childrenMdxBlogPost.children'
  | 'childMdx.childrenMdxBlogPost.children.id'
  | 'childMdx.childrenMdxBlogPost.children.children'
  | 'childMdx.childrenMdxBlogPost.internal.content'
  | 'childMdx.childrenMdxBlogPost.internal.contentDigest'
  | 'childMdx.childrenMdxBlogPost.internal.description'
  | 'childMdx.childrenMdxBlogPost.internal.fieldOwners'
  | 'childMdx.childrenMdxBlogPost.internal.ignoreType'
  | 'childMdx.childrenMdxBlogPost.internal.mediaType'
  | 'childMdx.childrenMdxBlogPost.internal.owner'
  | 'childMdx.childrenMdxBlogPost.internal.type'
  | 'childMdx.childMdxBlogPost.id'
  | 'childMdx.childMdxBlogPost.title'
  | 'childMdx.childMdxBlogPost.slug'
  | 'childMdx.childMdxBlogPost.date'
  | 'childMdx.childMdxBlogPost.tags'
  | 'childMdx.childMdxBlogPost.excerpt'
  | 'childMdx.childMdxBlogPost.image.sourceInstanceName'
  | 'childMdx.childMdxBlogPost.image.absolutePath'
  | 'childMdx.childMdxBlogPost.image.relativePath'
  | 'childMdx.childMdxBlogPost.image.extension'
  | 'childMdx.childMdxBlogPost.image.size'
  | 'childMdx.childMdxBlogPost.image.prettySize'
  | 'childMdx.childMdxBlogPost.image.modifiedTime'
  | 'childMdx.childMdxBlogPost.image.accessTime'
  | 'childMdx.childMdxBlogPost.image.changeTime'
  | 'childMdx.childMdxBlogPost.image.birthTime'
  | 'childMdx.childMdxBlogPost.image.root'
  | 'childMdx.childMdxBlogPost.image.dir'
  | 'childMdx.childMdxBlogPost.image.base'
  | 'childMdx.childMdxBlogPost.image.ext'
  | 'childMdx.childMdxBlogPost.image.name'
  | 'childMdx.childMdxBlogPost.image.relativeDirectory'
  | 'childMdx.childMdxBlogPost.image.dev'
  | 'childMdx.childMdxBlogPost.image.mode'
  | 'childMdx.childMdxBlogPost.image.nlink'
  | 'childMdx.childMdxBlogPost.image.uid'
  | 'childMdx.childMdxBlogPost.image.gid'
  | 'childMdx.childMdxBlogPost.image.rdev'
  | 'childMdx.childMdxBlogPost.image.ino'
  | 'childMdx.childMdxBlogPost.image.atimeMs'
  | 'childMdx.childMdxBlogPost.image.mtimeMs'
  | 'childMdx.childMdxBlogPost.image.ctimeMs'
  | 'childMdx.childMdxBlogPost.image.atime'
  | 'childMdx.childMdxBlogPost.image.mtime'
  | 'childMdx.childMdxBlogPost.image.ctime'
  | 'childMdx.childMdxBlogPost.image.birthtime'
  | 'childMdx.childMdxBlogPost.image.birthtimeMs'
  | 'childMdx.childMdxBlogPost.image.blksize'
  | 'childMdx.childMdxBlogPost.image.blocks'
  | 'childMdx.childMdxBlogPost.image.publicURL'
  | 'childMdx.childMdxBlogPost.image.childrenImageSharp'
  | 'childMdx.childMdxBlogPost.image.childrenMdx'
  | 'childMdx.childMdxBlogPost.image.id'
  | 'childMdx.childMdxBlogPost.image.children'
  | 'childMdx.childMdxBlogPost.imageAlt'
  | 'childMdx.childMdxBlogPost.imageCaptionText'
  | 'childMdx.childMdxBlogPost.imageCaptionLink'
  | 'childMdx.childMdxBlogPost.socialImage.sourceInstanceName'
  | 'childMdx.childMdxBlogPost.socialImage.absolutePath'
  | 'childMdx.childMdxBlogPost.socialImage.relativePath'
  | 'childMdx.childMdxBlogPost.socialImage.extension'
  | 'childMdx.childMdxBlogPost.socialImage.size'
  | 'childMdx.childMdxBlogPost.socialImage.prettySize'
  | 'childMdx.childMdxBlogPost.socialImage.modifiedTime'
  | 'childMdx.childMdxBlogPost.socialImage.accessTime'
  | 'childMdx.childMdxBlogPost.socialImage.changeTime'
  | 'childMdx.childMdxBlogPost.socialImage.birthTime'
  | 'childMdx.childMdxBlogPost.socialImage.root'
  | 'childMdx.childMdxBlogPost.socialImage.dir'
  | 'childMdx.childMdxBlogPost.socialImage.base'
  | 'childMdx.childMdxBlogPost.socialImage.ext'
  | 'childMdx.childMdxBlogPost.socialImage.name'
  | 'childMdx.childMdxBlogPost.socialImage.relativeDirectory'
  | 'childMdx.childMdxBlogPost.socialImage.dev'
  | 'childMdx.childMdxBlogPost.socialImage.mode'
  | 'childMdx.childMdxBlogPost.socialImage.nlink'
  | 'childMdx.childMdxBlogPost.socialImage.uid'
  | 'childMdx.childMdxBlogPost.socialImage.gid'
  | 'childMdx.childMdxBlogPost.socialImage.rdev'
  | 'childMdx.childMdxBlogPost.socialImage.ino'
  | 'childMdx.childMdxBlogPost.socialImage.atimeMs'
  | 'childMdx.childMdxBlogPost.socialImage.mtimeMs'
  | 'childMdx.childMdxBlogPost.socialImage.ctimeMs'
  | 'childMdx.childMdxBlogPost.socialImage.atime'
  | 'childMdx.childMdxBlogPost.socialImage.mtime'
  | 'childMdx.childMdxBlogPost.socialImage.ctime'
  | 'childMdx.childMdxBlogPost.socialImage.birthtime'
  | 'childMdx.childMdxBlogPost.socialImage.birthtimeMs'
  | 'childMdx.childMdxBlogPost.socialImage.blksize'
  | 'childMdx.childMdxBlogPost.socialImage.blocks'
  | 'childMdx.childMdxBlogPost.socialImage.publicURL'
  | 'childMdx.childMdxBlogPost.socialImage.childrenImageSharp'
  | 'childMdx.childMdxBlogPost.socialImage.childrenMdx'
  | 'childMdx.childMdxBlogPost.socialImage.id'
  | 'childMdx.childMdxBlogPost.socialImage.children'
  | 'childMdx.childMdxBlogPost.body'
  | 'childMdx.childMdxBlogPost.parent.id'
  | 'childMdx.childMdxBlogPost.parent.children'
  | 'childMdx.childMdxBlogPost.children'
  | 'childMdx.childMdxBlogPost.children.id'
  | 'childMdx.childMdxBlogPost.children.children'
  | 'childMdx.childMdxBlogPost.internal.content'
  | 'childMdx.childMdxBlogPost.internal.contentDigest'
  | 'childMdx.childMdxBlogPost.internal.description'
  | 'childMdx.childMdxBlogPost.internal.fieldOwners'
  | 'childMdx.childMdxBlogPost.internal.ignoreType'
  | 'childMdx.childMdxBlogPost.internal.mediaType'
  | 'childMdx.childMdxBlogPost.internal.owner'
  | 'childMdx.childMdxBlogPost.internal.type'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'resolutions.base64'
  | 'resolutions.tracedSVG'
  | 'resolutions.aspectRatio'
  | 'resolutions.width'
  | 'resolutions.height'
  | 'resolutions.src'
  | 'resolutions.srcSet'
  | 'resolutions.srcWebp'
  | 'resolutions.srcSetWebp'
  | 'resolutions.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'sizes.base64'
  | 'sizes.tracedSVG'
  | 'sizes.aspectRatio'
  | 'sizes.src'
  | 'sizes.srcSet'
  | 'sizes.srcWebp'
  | 'sizes.srcSetWebp'
  | 'sizes.sizes'
  | 'sizes.originalImg'
  | 'sizes.originalName'
  | 'sizes.presentationWidth'
  | 'sizes.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  /** Returns all children nodes filtered by type MdxBlogPost */
  readonly childrenMdxBlogPost: Maybe<ReadonlyArray<Maybe<MdxBlogPost>>>;
  /** Returns the first child node of type MdxBlogPost or null if there are no children of given type on this node */
  readonly childMdxBlogPost: Maybe<MdxBlogPost>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type MdxBlogPost = Node & BlogPost & {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly date: Scalars['Date'];
  readonly tags: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly excerpt: Scalars['String'];
  readonly image: Maybe<File>;
  readonly imageAlt: Maybe<Scalars['String']>;
  readonly imageCaptionText: Maybe<Scalars['String']>;
  readonly imageCaptionLink: Maybe<Scalars['String']>;
  readonly socialImage: Maybe<File>;
  readonly body: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MdxBlogPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MdxBlogPost_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
};

type MdxBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxBlogPostEdge>;
  readonly nodes: ReadonlyArray<MdxBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MdxBlogPostGroupConnection>;
};


type MdxBlogPostConnection_distinctArgs = {
  field: MdxBlogPostFieldsEnum;
};


type MdxBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxBlogPostFieldsEnum;
};

type MdxBlogPostEdge = {
  readonly next: Maybe<MdxBlogPost>;
  readonly node: MdxBlogPost;
  readonly previous: Maybe<MdxBlogPost>;
};

type MdxBlogPostFieldsEnum =
  | 'id'
  | 'title'
  | 'slug'
  | 'date'
  | 'tags'
  | 'excerpt'
  | 'image.sourceInstanceName'
  | 'image.absolutePath'
  | 'image.relativePath'
  | 'image.extension'
  | 'image.size'
  | 'image.prettySize'
  | 'image.modifiedTime'
  | 'image.accessTime'
  | 'image.changeTime'
  | 'image.birthTime'
  | 'image.root'
  | 'image.dir'
  | 'image.base'
  | 'image.ext'
  | 'image.name'
  | 'image.relativeDirectory'
  | 'image.dev'
  | 'image.mode'
  | 'image.nlink'
  | 'image.uid'
  | 'image.gid'
  | 'image.rdev'
  | 'image.ino'
  | 'image.atimeMs'
  | 'image.mtimeMs'
  | 'image.ctimeMs'
  | 'image.atime'
  | 'image.mtime'
  | 'image.ctime'
  | 'image.birthtime'
  | 'image.birthtimeMs'
  | 'image.blksize'
  | 'image.blocks'
  | 'image.publicURL'
  | 'image.childrenImageSharp'
  | 'image.childrenImageSharp.fixed.base64'
  | 'image.childrenImageSharp.fixed.tracedSVG'
  | 'image.childrenImageSharp.fixed.aspectRatio'
  | 'image.childrenImageSharp.fixed.width'
  | 'image.childrenImageSharp.fixed.height'
  | 'image.childrenImageSharp.fixed.src'
  | 'image.childrenImageSharp.fixed.srcSet'
  | 'image.childrenImageSharp.fixed.srcWebp'
  | 'image.childrenImageSharp.fixed.srcSetWebp'
  | 'image.childrenImageSharp.fixed.originalName'
  | 'image.childrenImageSharp.resolutions.base64'
  | 'image.childrenImageSharp.resolutions.tracedSVG'
  | 'image.childrenImageSharp.resolutions.aspectRatio'
  | 'image.childrenImageSharp.resolutions.width'
  | 'image.childrenImageSharp.resolutions.height'
  | 'image.childrenImageSharp.resolutions.src'
  | 'image.childrenImageSharp.resolutions.srcSet'
  | 'image.childrenImageSharp.resolutions.srcWebp'
  | 'image.childrenImageSharp.resolutions.srcSetWebp'
  | 'image.childrenImageSharp.resolutions.originalName'
  | 'image.childrenImageSharp.fluid.base64'
  | 'image.childrenImageSharp.fluid.tracedSVG'
  | 'image.childrenImageSharp.fluid.aspectRatio'
  | 'image.childrenImageSharp.fluid.src'
  | 'image.childrenImageSharp.fluid.srcSet'
  | 'image.childrenImageSharp.fluid.srcWebp'
  | 'image.childrenImageSharp.fluid.srcSetWebp'
  | 'image.childrenImageSharp.fluid.sizes'
  | 'image.childrenImageSharp.fluid.originalImg'
  | 'image.childrenImageSharp.fluid.originalName'
  | 'image.childrenImageSharp.fluid.presentationWidth'
  | 'image.childrenImageSharp.fluid.presentationHeight'
  | 'image.childrenImageSharp.sizes.base64'
  | 'image.childrenImageSharp.sizes.tracedSVG'
  | 'image.childrenImageSharp.sizes.aspectRatio'
  | 'image.childrenImageSharp.sizes.src'
  | 'image.childrenImageSharp.sizes.srcSet'
  | 'image.childrenImageSharp.sizes.srcWebp'
  | 'image.childrenImageSharp.sizes.srcSetWebp'
  | 'image.childrenImageSharp.sizes.sizes'
  | 'image.childrenImageSharp.sizes.originalImg'
  | 'image.childrenImageSharp.sizes.originalName'
  | 'image.childrenImageSharp.sizes.presentationWidth'
  | 'image.childrenImageSharp.sizes.presentationHeight'
  | 'image.childrenImageSharp.gatsbyImageData'
  | 'image.childrenImageSharp.original.width'
  | 'image.childrenImageSharp.original.height'
  | 'image.childrenImageSharp.original.src'
  | 'image.childrenImageSharp.resize.src'
  | 'image.childrenImageSharp.resize.tracedSVG'
  | 'image.childrenImageSharp.resize.width'
  | 'image.childrenImageSharp.resize.height'
  | 'image.childrenImageSharp.resize.aspectRatio'
  | 'image.childrenImageSharp.resize.originalName'
  | 'image.childrenImageSharp.id'
  | 'image.childrenImageSharp.parent.id'
  | 'image.childrenImageSharp.parent.children'
  | 'image.childrenImageSharp.children'
  | 'image.childrenImageSharp.children.id'
  | 'image.childrenImageSharp.children.children'
  | 'image.childrenImageSharp.internal.content'
  | 'image.childrenImageSharp.internal.contentDigest'
  | 'image.childrenImageSharp.internal.description'
  | 'image.childrenImageSharp.internal.fieldOwners'
  | 'image.childrenImageSharp.internal.ignoreType'
  | 'image.childrenImageSharp.internal.mediaType'
  | 'image.childrenImageSharp.internal.owner'
  | 'image.childrenImageSharp.internal.type'
  | 'image.childImageSharp.fixed.base64'
  | 'image.childImageSharp.fixed.tracedSVG'
  | 'image.childImageSharp.fixed.aspectRatio'
  | 'image.childImageSharp.fixed.width'
  | 'image.childImageSharp.fixed.height'
  | 'image.childImageSharp.fixed.src'
  | 'image.childImageSharp.fixed.srcSet'
  | 'image.childImageSharp.fixed.srcWebp'
  | 'image.childImageSharp.fixed.srcSetWebp'
  | 'image.childImageSharp.fixed.originalName'
  | 'image.childImageSharp.resolutions.base64'
  | 'image.childImageSharp.resolutions.tracedSVG'
  | 'image.childImageSharp.resolutions.aspectRatio'
  | 'image.childImageSharp.resolutions.width'
  | 'image.childImageSharp.resolutions.height'
  | 'image.childImageSharp.resolutions.src'
  | 'image.childImageSharp.resolutions.srcSet'
  | 'image.childImageSharp.resolutions.srcWebp'
  | 'image.childImageSharp.resolutions.srcSetWebp'
  | 'image.childImageSharp.resolutions.originalName'
  | 'image.childImageSharp.fluid.base64'
  | 'image.childImageSharp.fluid.tracedSVG'
  | 'image.childImageSharp.fluid.aspectRatio'
  | 'image.childImageSharp.fluid.src'
  | 'image.childImageSharp.fluid.srcSet'
  | 'image.childImageSharp.fluid.srcWebp'
  | 'image.childImageSharp.fluid.srcSetWebp'
  | 'image.childImageSharp.fluid.sizes'
  | 'image.childImageSharp.fluid.originalImg'
  | 'image.childImageSharp.fluid.originalName'
  | 'image.childImageSharp.fluid.presentationWidth'
  | 'image.childImageSharp.fluid.presentationHeight'
  | 'image.childImageSharp.sizes.base64'
  | 'image.childImageSharp.sizes.tracedSVG'
  | 'image.childImageSharp.sizes.aspectRatio'
  | 'image.childImageSharp.sizes.src'
  | 'image.childImageSharp.sizes.srcSet'
  | 'image.childImageSharp.sizes.srcWebp'
  | 'image.childImageSharp.sizes.srcSetWebp'
  | 'image.childImageSharp.sizes.sizes'
  | 'image.childImageSharp.sizes.originalImg'
  | 'image.childImageSharp.sizes.originalName'
  | 'image.childImageSharp.sizes.presentationWidth'
  | 'image.childImageSharp.sizes.presentationHeight'
  | 'image.childImageSharp.gatsbyImageData'
  | 'image.childImageSharp.original.width'
  | 'image.childImageSharp.original.height'
  | 'image.childImageSharp.original.src'
  | 'image.childImageSharp.resize.src'
  | 'image.childImageSharp.resize.tracedSVG'
  | 'image.childImageSharp.resize.width'
  | 'image.childImageSharp.resize.height'
  | 'image.childImageSharp.resize.aspectRatio'
  | 'image.childImageSharp.resize.originalName'
  | 'image.childImageSharp.id'
  | 'image.childImageSharp.parent.id'
  | 'image.childImageSharp.parent.children'
  | 'image.childImageSharp.children'
  | 'image.childImageSharp.children.id'
  | 'image.childImageSharp.children.children'
  | 'image.childImageSharp.internal.content'
  | 'image.childImageSharp.internal.contentDigest'
  | 'image.childImageSharp.internal.description'
  | 'image.childImageSharp.internal.fieldOwners'
  | 'image.childImageSharp.internal.ignoreType'
  | 'image.childImageSharp.internal.mediaType'
  | 'image.childImageSharp.internal.owner'
  | 'image.childImageSharp.internal.type'
  | 'image.childrenMdx'
  | 'image.childrenMdx.rawBody'
  | 'image.childrenMdx.fileAbsolutePath'
  | 'image.childrenMdx.frontmatter.title'
  | 'image.childrenMdx.frontmatter.date'
  | 'image.childrenMdx.frontmatter.imageAlt'
  | 'image.childrenMdx.frontmatter.category'
  | 'image.childrenMdx.frontmatter.tags'
  | 'image.childrenMdx.slug'
  | 'image.childrenMdx.body'
  | 'image.childrenMdx.excerpt'
  | 'image.childrenMdx.headings'
  | 'image.childrenMdx.headings.value'
  | 'image.childrenMdx.headings.depth'
  | 'image.childrenMdx.html'
  | 'image.childrenMdx.mdxAST'
  | 'image.childrenMdx.tableOfContents'
  | 'image.childrenMdx.timeToRead'
  | 'image.childrenMdx.wordCount.paragraphs'
  | 'image.childrenMdx.wordCount.sentences'
  | 'image.childrenMdx.wordCount.words'
  | 'image.childrenMdx.childrenMdxBlogPost'
  | 'image.childrenMdx.childrenMdxBlogPost.id'
  | 'image.childrenMdx.childrenMdxBlogPost.title'
  | 'image.childrenMdx.childrenMdxBlogPost.slug'
  | 'image.childrenMdx.childrenMdxBlogPost.date'
  | 'image.childrenMdx.childrenMdxBlogPost.tags'
  | 'image.childrenMdx.childrenMdxBlogPost.excerpt'
  | 'image.childrenMdx.childrenMdxBlogPost.imageAlt'
  | 'image.childrenMdx.childrenMdxBlogPost.imageCaptionText'
  | 'image.childrenMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'image.childrenMdx.childrenMdxBlogPost.body'
  | 'image.childrenMdx.childrenMdxBlogPost.children'
  | 'image.childrenMdx.childMdxBlogPost.id'
  | 'image.childrenMdx.childMdxBlogPost.title'
  | 'image.childrenMdx.childMdxBlogPost.slug'
  | 'image.childrenMdx.childMdxBlogPost.date'
  | 'image.childrenMdx.childMdxBlogPost.tags'
  | 'image.childrenMdx.childMdxBlogPost.excerpt'
  | 'image.childrenMdx.childMdxBlogPost.imageAlt'
  | 'image.childrenMdx.childMdxBlogPost.imageCaptionText'
  | 'image.childrenMdx.childMdxBlogPost.imageCaptionLink'
  | 'image.childrenMdx.childMdxBlogPost.body'
  | 'image.childrenMdx.childMdxBlogPost.children'
  | 'image.childrenMdx.id'
  | 'image.childrenMdx.parent.id'
  | 'image.childrenMdx.parent.children'
  | 'image.childrenMdx.children'
  | 'image.childrenMdx.children.id'
  | 'image.childrenMdx.children.children'
  | 'image.childrenMdx.internal.content'
  | 'image.childrenMdx.internal.contentDigest'
  | 'image.childrenMdx.internal.description'
  | 'image.childrenMdx.internal.fieldOwners'
  | 'image.childrenMdx.internal.ignoreType'
  | 'image.childrenMdx.internal.mediaType'
  | 'image.childrenMdx.internal.owner'
  | 'image.childrenMdx.internal.type'
  | 'image.childMdx.rawBody'
  | 'image.childMdx.fileAbsolutePath'
  | 'image.childMdx.frontmatter.title'
  | 'image.childMdx.frontmatter.date'
  | 'image.childMdx.frontmatter.imageAlt'
  | 'image.childMdx.frontmatter.category'
  | 'image.childMdx.frontmatter.tags'
  | 'image.childMdx.slug'
  | 'image.childMdx.body'
  | 'image.childMdx.excerpt'
  | 'image.childMdx.headings'
  | 'image.childMdx.headings.value'
  | 'image.childMdx.headings.depth'
  | 'image.childMdx.html'
  | 'image.childMdx.mdxAST'
  | 'image.childMdx.tableOfContents'
  | 'image.childMdx.timeToRead'
  | 'image.childMdx.wordCount.paragraphs'
  | 'image.childMdx.wordCount.sentences'
  | 'image.childMdx.wordCount.words'
  | 'image.childMdx.childrenMdxBlogPost'
  | 'image.childMdx.childrenMdxBlogPost.id'
  | 'image.childMdx.childrenMdxBlogPost.title'
  | 'image.childMdx.childrenMdxBlogPost.slug'
  | 'image.childMdx.childrenMdxBlogPost.date'
  | 'image.childMdx.childrenMdxBlogPost.tags'
  | 'image.childMdx.childrenMdxBlogPost.excerpt'
  | 'image.childMdx.childrenMdxBlogPost.imageAlt'
  | 'image.childMdx.childrenMdxBlogPost.imageCaptionText'
  | 'image.childMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'image.childMdx.childrenMdxBlogPost.body'
  | 'image.childMdx.childrenMdxBlogPost.children'
  | 'image.childMdx.childMdxBlogPost.id'
  | 'image.childMdx.childMdxBlogPost.title'
  | 'image.childMdx.childMdxBlogPost.slug'
  | 'image.childMdx.childMdxBlogPost.date'
  | 'image.childMdx.childMdxBlogPost.tags'
  | 'image.childMdx.childMdxBlogPost.excerpt'
  | 'image.childMdx.childMdxBlogPost.imageAlt'
  | 'image.childMdx.childMdxBlogPost.imageCaptionText'
  | 'image.childMdx.childMdxBlogPost.imageCaptionLink'
  | 'image.childMdx.childMdxBlogPost.body'
  | 'image.childMdx.childMdxBlogPost.children'
  | 'image.childMdx.id'
  | 'image.childMdx.parent.id'
  | 'image.childMdx.parent.children'
  | 'image.childMdx.children'
  | 'image.childMdx.children.id'
  | 'image.childMdx.children.children'
  | 'image.childMdx.internal.content'
  | 'image.childMdx.internal.contentDigest'
  | 'image.childMdx.internal.description'
  | 'image.childMdx.internal.fieldOwners'
  | 'image.childMdx.internal.ignoreType'
  | 'image.childMdx.internal.mediaType'
  | 'image.childMdx.internal.owner'
  | 'image.childMdx.internal.type'
  | 'image.id'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'imageAlt'
  | 'imageCaptionText'
  | 'imageCaptionLink'
  | 'socialImage.sourceInstanceName'
  | 'socialImage.absolutePath'
  | 'socialImage.relativePath'
  | 'socialImage.extension'
  | 'socialImage.size'
  | 'socialImage.prettySize'
  | 'socialImage.modifiedTime'
  | 'socialImage.accessTime'
  | 'socialImage.changeTime'
  | 'socialImage.birthTime'
  | 'socialImage.root'
  | 'socialImage.dir'
  | 'socialImage.base'
  | 'socialImage.ext'
  | 'socialImage.name'
  | 'socialImage.relativeDirectory'
  | 'socialImage.dev'
  | 'socialImage.mode'
  | 'socialImage.nlink'
  | 'socialImage.uid'
  | 'socialImage.gid'
  | 'socialImage.rdev'
  | 'socialImage.ino'
  | 'socialImage.atimeMs'
  | 'socialImage.mtimeMs'
  | 'socialImage.ctimeMs'
  | 'socialImage.atime'
  | 'socialImage.mtime'
  | 'socialImage.ctime'
  | 'socialImage.birthtime'
  | 'socialImage.birthtimeMs'
  | 'socialImage.blksize'
  | 'socialImage.blocks'
  | 'socialImage.publicURL'
  | 'socialImage.childrenImageSharp'
  | 'socialImage.childrenImageSharp.fixed.base64'
  | 'socialImage.childrenImageSharp.fixed.tracedSVG'
  | 'socialImage.childrenImageSharp.fixed.aspectRatio'
  | 'socialImage.childrenImageSharp.fixed.width'
  | 'socialImage.childrenImageSharp.fixed.height'
  | 'socialImage.childrenImageSharp.fixed.src'
  | 'socialImage.childrenImageSharp.fixed.srcSet'
  | 'socialImage.childrenImageSharp.fixed.srcWebp'
  | 'socialImage.childrenImageSharp.fixed.srcSetWebp'
  | 'socialImage.childrenImageSharp.fixed.originalName'
  | 'socialImage.childrenImageSharp.resolutions.base64'
  | 'socialImage.childrenImageSharp.resolutions.tracedSVG'
  | 'socialImage.childrenImageSharp.resolutions.aspectRatio'
  | 'socialImage.childrenImageSharp.resolutions.width'
  | 'socialImage.childrenImageSharp.resolutions.height'
  | 'socialImage.childrenImageSharp.resolutions.src'
  | 'socialImage.childrenImageSharp.resolutions.srcSet'
  | 'socialImage.childrenImageSharp.resolutions.srcWebp'
  | 'socialImage.childrenImageSharp.resolutions.srcSetWebp'
  | 'socialImage.childrenImageSharp.resolutions.originalName'
  | 'socialImage.childrenImageSharp.fluid.base64'
  | 'socialImage.childrenImageSharp.fluid.tracedSVG'
  | 'socialImage.childrenImageSharp.fluid.aspectRatio'
  | 'socialImage.childrenImageSharp.fluid.src'
  | 'socialImage.childrenImageSharp.fluid.srcSet'
  | 'socialImage.childrenImageSharp.fluid.srcWebp'
  | 'socialImage.childrenImageSharp.fluid.srcSetWebp'
  | 'socialImage.childrenImageSharp.fluid.sizes'
  | 'socialImage.childrenImageSharp.fluid.originalImg'
  | 'socialImage.childrenImageSharp.fluid.originalName'
  | 'socialImage.childrenImageSharp.fluid.presentationWidth'
  | 'socialImage.childrenImageSharp.fluid.presentationHeight'
  | 'socialImage.childrenImageSharp.sizes.base64'
  | 'socialImage.childrenImageSharp.sizes.tracedSVG'
  | 'socialImage.childrenImageSharp.sizes.aspectRatio'
  | 'socialImage.childrenImageSharp.sizes.src'
  | 'socialImage.childrenImageSharp.sizes.srcSet'
  | 'socialImage.childrenImageSharp.sizes.srcWebp'
  | 'socialImage.childrenImageSharp.sizes.srcSetWebp'
  | 'socialImage.childrenImageSharp.sizes.sizes'
  | 'socialImage.childrenImageSharp.sizes.originalImg'
  | 'socialImage.childrenImageSharp.sizes.originalName'
  | 'socialImage.childrenImageSharp.sizes.presentationWidth'
  | 'socialImage.childrenImageSharp.sizes.presentationHeight'
  | 'socialImage.childrenImageSharp.gatsbyImageData'
  | 'socialImage.childrenImageSharp.original.width'
  | 'socialImage.childrenImageSharp.original.height'
  | 'socialImage.childrenImageSharp.original.src'
  | 'socialImage.childrenImageSharp.resize.src'
  | 'socialImage.childrenImageSharp.resize.tracedSVG'
  | 'socialImage.childrenImageSharp.resize.width'
  | 'socialImage.childrenImageSharp.resize.height'
  | 'socialImage.childrenImageSharp.resize.aspectRatio'
  | 'socialImage.childrenImageSharp.resize.originalName'
  | 'socialImage.childrenImageSharp.id'
  | 'socialImage.childrenImageSharp.parent.id'
  | 'socialImage.childrenImageSharp.parent.children'
  | 'socialImage.childrenImageSharp.children'
  | 'socialImage.childrenImageSharp.children.id'
  | 'socialImage.childrenImageSharp.children.children'
  | 'socialImage.childrenImageSharp.internal.content'
  | 'socialImage.childrenImageSharp.internal.contentDigest'
  | 'socialImage.childrenImageSharp.internal.description'
  | 'socialImage.childrenImageSharp.internal.fieldOwners'
  | 'socialImage.childrenImageSharp.internal.ignoreType'
  | 'socialImage.childrenImageSharp.internal.mediaType'
  | 'socialImage.childrenImageSharp.internal.owner'
  | 'socialImage.childrenImageSharp.internal.type'
  | 'socialImage.childImageSharp.fixed.base64'
  | 'socialImage.childImageSharp.fixed.tracedSVG'
  | 'socialImage.childImageSharp.fixed.aspectRatio'
  | 'socialImage.childImageSharp.fixed.width'
  | 'socialImage.childImageSharp.fixed.height'
  | 'socialImage.childImageSharp.fixed.src'
  | 'socialImage.childImageSharp.fixed.srcSet'
  | 'socialImage.childImageSharp.fixed.srcWebp'
  | 'socialImage.childImageSharp.fixed.srcSetWebp'
  | 'socialImage.childImageSharp.fixed.originalName'
  | 'socialImage.childImageSharp.resolutions.base64'
  | 'socialImage.childImageSharp.resolutions.tracedSVG'
  | 'socialImage.childImageSharp.resolutions.aspectRatio'
  | 'socialImage.childImageSharp.resolutions.width'
  | 'socialImage.childImageSharp.resolutions.height'
  | 'socialImage.childImageSharp.resolutions.src'
  | 'socialImage.childImageSharp.resolutions.srcSet'
  | 'socialImage.childImageSharp.resolutions.srcWebp'
  | 'socialImage.childImageSharp.resolutions.srcSetWebp'
  | 'socialImage.childImageSharp.resolutions.originalName'
  | 'socialImage.childImageSharp.fluid.base64'
  | 'socialImage.childImageSharp.fluid.tracedSVG'
  | 'socialImage.childImageSharp.fluid.aspectRatio'
  | 'socialImage.childImageSharp.fluid.src'
  | 'socialImage.childImageSharp.fluid.srcSet'
  | 'socialImage.childImageSharp.fluid.srcWebp'
  | 'socialImage.childImageSharp.fluid.srcSetWebp'
  | 'socialImage.childImageSharp.fluid.sizes'
  | 'socialImage.childImageSharp.fluid.originalImg'
  | 'socialImage.childImageSharp.fluid.originalName'
  | 'socialImage.childImageSharp.fluid.presentationWidth'
  | 'socialImage.childImageSharp.fluid.presentationHeight'
  | 'socialImage.childImageSharp.sizes.base64'
  | 'socialImage.childImageSharp.sizes.tracedSVG'
  | 'socialImage.childImageSharp.sizes.aspectRatio'
  | 'socialImage.childImageSharp.sizes.src'
  | 'socialImage.childImageSharp.sizes.srcSet'
  | 'socialImage.childImageSharp.sizes.srcWebp'
  | 'socialImage.childImageSharp.sizes.srcSetWebp'
  | 'socialImage.childImageSharp.sizes.sizes'
  | 'socialImage.childImageSharp.sizes.originalImg'
  | 'socialImage.childImageSharp.sizes.originalName'
  | 'socialImage.childImageSharp.sizes.presentationWidth'
  | 'socialImage.childImageSharp.sizes.presentationHeight'
  | 'socialImage.childImageSharp.gatsbyImageData'
  | 'socialImage.childImageSharp.original.width'
  | 'socialImage.childImageSharp.original.height'
  | 'socialImage.childImageSharp.original.src'
  | 'socialImage.childImageSharp.resize.src'
  | 'socialImage.childImageSharp.resize.tracedSVG'
  | 'socialImage.childImageSharp.resize.width'
  | 'socialImage.childImageSharp.resize.height'
  | 'socialImage.childImageSharp.resize.aspectRatio'
  | 'socialImage.childImageSharp.resize.originalName'
  | 'socialImage.childImageSharp.id'
  | 'socialImage.childImageSharp.parent.id'
  | 'socialImage.childImageSharp.parent.children'
  | 'socialImage.childImageSharp.children'
  | 'socialImage.childImageSharp.children.id'
  | 'socialImage.childImageSharp.children.children'
  | 'socialImage.childImageSharp.internal.content'
  | 'socialImage.childImageSharp.internal.contentDigest'
  | 'socialImage.childImageSharp.internal.description'
  | 'socialImage.childImageSharp.internal.fieldOwners'
  | 'socialImage.childImageSharp.internal.ignoreType'
  | 'socialImage.childImageSharp.internal.mediaType'
  | 'socialImage.childImageSharp.internal.owner'
  | 'socialImage.childImageSharp.internal.type'
  | 'socialImage.childrenMdx'
  | 'socialImage.childrenMdx.rawBody'
  | 'socialImage.childrenMdx.fileAbsolutePath'
  | 'socialImage.childrenMdx.frontmatter.title'
  | 'socialImage.childrenMdx.frontmatter.date'
  | 'socialImage.childrenMdx.frontmatter.imageAlt'
  | 'socialImage.childrenMdx.frontmatter.category'
  | 'socialImage.childrenMdx.frontmatter.tags'
  | 'socialImage.childrenMdx.slug'
  | 'socialImage.childrenMdx.body'
  | 'socialImage.childrenMdx.excerpt'
  | 'socialImage.childrenMdx.headings'
  | 'socialImage.childrenMdx.headings.value'
  | 'socialImage.childrenMdx.headings.depth'
  | 'socialImage.childrenMdx.html'
  | 'socialImage.childrenMdx.mdxAST'
  | 'socialImage.childrenMdx.tableOfContents'
  | 'socialImage.childrenMdx.timeToRead'
  | 'socialImage.childrenMdx.wordCount.paragraphs'
  | 'socialImage.childrenMdx.wordCount.sentences'
  | 'socialImage.childrenMdx.wordCount.words'
  | 'socialImage.childrenMdx.childrenMdxBlogPost'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.id'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.title'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.slug'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.date'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.tags'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.excerpt'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageAlt'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageCaptionText'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.body'
  | 'socialImage.childrenMdx.childrenMdxBlogPost.children'
  | 'socialImage.childrenMdx.childMdxBlogPost.id'
  | 'socialImage.childrenMdx.childMdxBlogPost.title'
  | 'socialImage.childrenMdx.childMdxBlogPost.slug'
  | 'socialImage.childrenMdx.childMdxBlogPost.date'
  | 'socialImage.childrenMdx.childMdxBlogPost.tags'
  | 'socialImage.childrenMdx.childMdxBlogPost.excerpt'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageAlt'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageCaptionText'
  | 'socialImage.childrenMdx.childMdxBlogPost.imageCaptionLink'
  | 'socialImage.childrenMdx.childMdxBlogPost.body'
  | 'socialImage.childrenMdx.childMdxBlogPost.children'
  | 'socialImage.childrenMdx.id'
  | 'socialImage.childrenMdx.parent.id'
  | 'socialImage.childrenMdx.parent.children'
  | 'socialImage.childrenMdx.children'
  | 'socialImage.childrenMdx.children.id'
  | 'socialImage.childrenMdx.children.children'
  | 'socialImage.childrenMdx.internal.content'
  | 'socialImage.childrenMdx.internal.contentDigest'
  | 'socialImage.childrenMdx.internal.description'
  | 'socialImage.childrenMdx.internal.fieldOwners'
  | 'socialImage.childrenMdx.internal.ignoreType'
  | 'socialImage.childrenMdx.internal.mediaType'
  | 'socialImage.childrenMdx.internal.owner'
  | 'socialImage.childrenMdx.internal.type'
  | 'socialImage.childMdx.rawBody'
  | 'socialImage.childMdx.fileAbsolutePath'
  | 'socialImage.childMdx.frontmatter.title'
  | 'socialImage.childMdx.frontmatter.date'
  | 'socialImage.childMdx.frontmatter.imageAlt'
  | 'socialImage.childMdx.frontmatter.category'
  | 'socialImage.childMdx.frontmatter.tags'
  | 'socialImage.childMdx.slug'
  | 'socialImage.childMdx.body'
  | 'socialImage.childMdx.excerpt'
  | 'socialImage.childMdx.headings'
  | 'socialImage.childMdx.headings.value'
  | 'socialImage.childMdx.headings.depth'
  | 'socialImage.childMdx.html'
  | 'socialImage.childMdx.mdxAST'
  | 'socialImage.childMdx.tableOfContents'
  | 'socialImage.childMdx.timeToRead'
  | 'socialImage.childMdx.wordCount.paragraphs'
  | 'socialImage.childMdx.wordCount.sentences'
  | 'socialImage.childMdx.wordCount.words'
  | 'socialImage.childMdx.childrenMdxBlogPost'
  | 'socialImage.childMdx.childrenMdxBlogPost.id'
  | 'socialImage.childMdx.childrenMdxBlogPost.title'
  | 'socialImage.childMdx.childrenMdxBlogPost.slug'
  | 'socialImage.childMdx.childrenMdxBlogPost.date'
  | 'socialImage.childMdx.childrenMdxBlogPost.tags'
  | 'socialImage.childMdx.childrenMdxBlogPost.excerpt'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageAlt'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageCaptionText'
  | 'socialImage.childMdx.childrenMdxBlogPost.imageCaptionLink'
  | 'socialImage.childMdx.childrenMdxBlogPost.body'
  | 'socialImage.childMdx.childrenMdxBlogPost.children'
  | 'socialImage.childMdx.childMdxBlogPost.id'
  | 'socialImage.childMdx.childMdxBlogPost.title'
  | 'socialImage.childMdx.childMdxBlogPost.slug'
  | 'socialImage.childMdx.childMdxBlogPost.date'
  | 'socialImage.childMdx.childMdxBlogPost.tags'
  | 'socialImage.childMdx.childMdxBlogPost.excerpt'
  | 'socialImage.childMdx.childMdxBlogPost.imageAlt'
  | 'socialImage.childMdx.childMdxBlogPost.imageCaptionText'
  | 'socialImage.childMdx.childMdxBlogPost.imageCaptionLink'
  | 'socialImage.childMdx.childMdxBlogPost.body'
  | 'socialImage.childMdx.childMdxBlogPost.children'
  | 'socialImage.childMdx.id'
  | 'socialImage.childMdx.parent.id'
  | 'socialImage.childMdx.parent.children'
  | 'socialImage.childMdx.children'
  | 'socialImage.childMdx.children.id'
  | 'socialImage.childMdx.children.children'
  | 'socialImage.childMdx.internal.content'
  | 'socialImage.childMdx.internal.contentDigest'
  | 'socialImage.childMdx.internal.description'
  | 'socialImage.childMdx.internal.fieldOwners'
  | 'socialImage.childMdx.internal.ignoreType'
  | 'socialImage.childMdx.internal.mediaType'
  | 'socialImage.childMdx.internal.owner'
  | 'socialImage.childMdx.internal.type'
  | 'socialImage.id'
  | 'socialImage.parent.id'
  | 'socialImage.parent.parent.id'
  | 'socialImage.parent.parent.children'
  | 'socialImage.parent.children'
  | 'socialImage.parent.children.id'
  | 'socialImage.parent.children.children'
  | 'socialImage.parent.internal.content'
  | 'socialImage.parent.internal.contentDigest'
  | 'socialImage.parent.internal.description'
  | 'socialImage.parent.internal.fieldOwners'
  | 'socialImage.parent.internal.ignoreType'
  | 'socialImage.parent.internal.mediaType'
  | 'socialImage.parent.internal.owner'
  | 'socialImage.parent.internal.type'
  | 'socialImage.children'
  | 'socialImage.children.id'
  | 'socialImage.children.parent.id'
  | 'socialImage.children.parent.children'
  | 'socialImage.children.children'
  | 'socialImage.children.children.id'
  | 'socialImage.children.children.children'
  | 'socialImage.children.internal.content'
  | 'socialImage.children.internal.contentDigest'
  | 'socialImage.children.internal.description'
  | 'socialImage.children.internal.fieldOwners'
  | 'socialImage.children.internal.ignoreType'
  | 'socialImage.children.internal.mediaType'
  | 'socialImage.children.internal.owner'
  | 'socialImage.children.internal.type'
  | 'socialImage.internal.content'
  | 'socialImage.internal.contentDigest'
  | 'socialImage.internal.description'
  | 'socialImage.internal.fieldOwners'
  | 'socialImage.internal.ignoreType'
  | 'socialImage.internal.mediaType'
  | 'socialImage.internal.owner'
  | 'socialImage.internal.type'
  | 'body'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxBlogPostFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly imageAlt: Maybe<StringQueryOperatorInput>;
  readonly imageCaptionText: Maybe<StringQueryOperatorInput>;
  readonly imageCaptionLink: Maybe<StringQueryOperatorInput>;
  readonly socialImage: Maybe<FileFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxBlogPostFilterListInput = {
  readonly elemMatch: Maybe<MdxBlogPostFilterInput>;
};

type MdxBlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxBlogPostEdge>;
  readonly nodes: ReadonlyArray<MdxBlogPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MdxBlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxBlogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'frontmatter.date'
  | 'frontmatter.image.sourceInstanceName'
  | 'frontmatter.image.absolutePath'
  | 'frontmatter.image.relativePath'
  | 'frontmatter.image.extension'
  | 'frontmatter.image.size'
  | 'frontmatter.image.prettySize'
  | 'frontmatter.image.modifiedTime'
  | 'frontmatter.image.accessTime'
  | 'frontmatter.image.changeTime'
  | 'frontmatter.image.birthTime'
  | 'frontmatter.image.root'
  | 'frontmatter.image.dir'
  | 'frontmatter.image.base'
  | 'frontmatter.image.ext'
  | 'frontmatter.image.name'
  | 'frontmatter.image.relativeDirectory'
  | 'frontmatter.image.dev'
  | 'frontmatter.image.mode'
  | 'frontmatter.image.nlink'
  | 'frontmatter.image.uid'
  | 'frontmatter.image.gid'
  | 'frontmatter.image.rdev'
  | 'frontmatter.image.ino'
  | 'frontmatter.image.atimeMs'
  | 'frontmatter.image.mtimeMs'
  | 'frontmatter.image.ctimeMs'
  | 'frontmatter.image.atime'
  | 'frontmatter.image.mtime'
  | 'frontmatter.image.ctime'
  | 'frontmatter.image.birthtime'
  | 'frontmatter.image.birthtimeMs'
  | 'frontmatter.image.blksize'
  | 'frontmatter.image.blocks'
  | 'frontmatter.image.publicURL'
  | 'frontmatter.image.childrenImageSharp'
  | 'frontmatter.image.childrenImageSharp.gatsbyImageData'
  | 'frontmatter.image.childrenImageSharp.id'
  | 'frontmatter.image.childrenImageSharp.children'
  | 'frontmatter.image.childImageSharp.gatsbyImageData'
  | 'frontmatter.image.childImageSharp.id'
  | 'frontmatter.image.childImageSharp.children'
  | 'frontmatter.image.childrenMdx'
  | 'frontmatter.image.childrenMdx.rawBody'
  | 'frontmatter.image.childrenMdx.fileAbsolutePath'
  | 'frontmatter.image.childrenMdx.slug'
  | 'frontmatter.image.childrenMdx.body'
  | 'frontmatter.image.childrenMdx.excerpt'
  | 'frontmatter.image.childrenMdx.headings'
  | 'frontmatter.image.childrenMdx.html'
  | 'frontmatter.image.childrenMdx.mdxAST'
  | 'frontmatter.image.childrenMdx.tableOfContents'
  | 'frontmatter.image.childrenMdx.timeToRead'
  | 'frontmatter.image.childrenMdx.childrenMdxBlogPost'
  | 'frontmatter.image.childrenMdx.id'
  | 'frontmatter.image.childrenMdx.children'
  | 'frontmatter.image.childMdx.rawBody'
  | 'frontmatter.image.childMdx.fileAbsolutePath'
  | 'frontmatter.image.childMdx.slug'
  | 'frontmatter.image.childMdx.body'
  | 'frontmatter.image.childMdx.excerpt'
  | 'frontmatter.image.childMdx.headings'
  | 'frontmatter.image.childMdx.html'
  | 'frontmatter.image.childMdx.mdxAST'
  | 'frontmatter.image.childMdx.tableOfContents'
  | 'frontmatter.image.childMdx.timeToRead'
  | 'frontmatter.image.childMdx.childrenMdxBlogPost'
  | 'frontmatter.image.childMdx.id'
  | 'frontmatter.image.childMdx.children'
  | 'frontmatter.image.id'
  | 'frontmatter.image.parent.id'
  | 'frontmatter.image.parent.children'
  | 'frontmatter.image.children'
  | 'frontmatter.image.children.id'
  | 'frontmatter.image.children.children'
  | 'frontmatter.image.internal.content'
  | 'frontmatter.image.internal.contentDigest'
  | 'frontmatter.image.internal.description'
  | 'frontmatter.image.internal.fieldOwners'
  | 'frontmatter.image.internal.ignoreType'
  | 'frontmatter.image.internal.mediaType'
  | 'frontmatter.image.internal.owner'
  | 'frontmatter.image.internal.type'
  | 'frontmatter.imageAlt'
  | 'frontmatter.category'
  | 'frontmatter.tags'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'childrenMdxBlogPost'
  | 'childrenMdxBlogPost.id'
  | 'childrenMdxBlogPost.title'
  | 'childrenMdxBlogPost.slug'
  | 'childrenMdxBlogPost.date'
  | 'childrenMdxBlogPost.tags'
  | 'childrenMdxBlogPost.excerpt'
  | 'childrenMdxBlogPost.image.sourceInstanceName'
  | 'childrenMdxBlogPost.image.absolutePath'
  | 'childrenMdxBlogPost.image.relativePath'
  | 'childrenMdxBlogPost.image.extension'
  | 'childrenMdxBlogPost.image.size'
  | 'childrenMdxBlogPost.image.prettySize'
  | 'childrenMdxBlogPost.image.modifiedTime'
  | 'childrenMdxBlogPost.image.accessTime'
  | 'childrenMdxBlogPost.image.changeTime'
  | 'childrenMdxBlogPost.image.birthTime'
  | 'childrenMdxBlogPost.image.root'
  | 'childrenMdxBlogPost.image.dir'
  | 'childrenMdxBlogPost.image.base'
  | 'childrenMdxBlogPost.image.ext'
  | 'childrenMdxBlogPost.image.name'
  | 'childrenMdxBlogPost.image.relativeDirectory'
  | 'childrenMdxBlogPost.image.dev'
  | 'childrenMdxBlogPost.image.mode'
  | 'childrenMdxBlogPost.image.nlink'
  | 'childrenMdxBlogPost.image.uid'
  | 'childrenMdxBlogPost.image.gid'
  | 'childrenMdxBlogPost.image.rdev'
  | 'childrenMdxBlogPost.image.ino'
  | 'childrenMdxBlogPost.image.atimeMs'
  | 'childrenMdxBlogPost.image.mtimeMs'
  | 'childrenMdxBlogPost.image.ctimeMs'
  | 'childrenMdxBlogPost.image.atime'
  | 'childrenMdxBlogPost.image.mtime'
  | 'childrenMdxBlogPost.image.ctime'
  | 'childrenMdxBlogPost.image.birthtime'
  | 'childrenMdxBlogPost.image.birthtimeMs'
  | 'childrenMdxBlogPost.image.blksize'
  | 'childrenMdxBlogPost.image.blocks'
  | 'childrenMdxBlogPost.image.publicURL'
  | 'childrenMdxBlogPost.image.childrenImageSharp'
  | 'childrenMdxBlogPost.image.childrenImageSharp.gatsbyImageData'
  | 'childrenMdxBlogPost.image.childrenImageSharp.id'
  | 'childrenMdxBlogPost.image.childrenImageSharp.children'
  | 'childrenMdxBlogPost.image.childImageSharp.gatsbyImageData'
  | 'childrenMdxBlogPost.image.childImageSharp.id'
  | 'childrenMdxBlogPost.image.childImageSharp.children'
  | 'childrenMdxBlogPost.image.childrenMdx'
  | 'childrenMdxBlogPost.image.childrenMdx.rawBody'
  | 'childrenMdxBlogPost.image.childrenMdx.fileAbsolutePath'
  | 'childrenMdxBlogPost.image.childrenMdx.slug'
  | 'childrenMdxBlogPost.image.childrenMdx.body'
  | 'childrenMdxBlogPost.image.childrenMdx.excerpt'
  | 'childrenMdxBlogPost.image.childrenMdx.headings'
  | 'childrenMdxBlogPost.image.childrenMdx.html'
  | 'childrenMdxBlogPost.image.childrenMdx.mdxAST'
  | 'childrenMdxBlogPost.image.childrenMdx.tableOfContents'
  | 'childrenMdxBlogPost.image.childrenMdx.timeToRead'
  | 'childrenMdxBlogPost.image.childrenMdx.childrenMdxBlogPost'
  | 'childrenMdxBlogPost.image.childrenMdx.id'
  | 'childrenMdxBlogPost.image.childrenMdx.children'
  | 'childrenMdxBlogPost.image.childMdx.rawBody'
  | 'childrenMdxBlogPost.image.childMdx.fileAbsolutePath'
  | 'childrenMdxBlogPost.image.childMdx.slug'
  | 'childrenMdxBlogPost.image.childMdx.body'
  | 'childrenMdxBlogPost.image.childMdx.excerpt'
  | 'childrenMdxBlogPost.image.childMdx.headings'
  | 'childrenMdxBlogPost.image.childMdx.html'
  | 'childrenMdxBlogPost.image.childMdx.mdxAST'
  | 'childrenMdxBlogPost.image.childMdx.tableOfContents'
  | 'childrenMdxBlogPost.image.childMdx.timeToRead'
  | 'childrenMdxBlogPost.image.childMdx.childrenMdxBlogPost'
  | 'childrenMdxBlogPost.image.childMdx.id'
  | 'childrenMdxBlogPost.image.childMdx.children'
  | 'childrenMdxBlogPost.image.id'
  | 'childrenMdxBlogPost.image.parent.id'
  | 'childrenMdxBlogPost.image.parent.children'
  | 'childrenMdxBlogPost.image.children'
  | 'childrenMdxBlogPost.image.children.id'
  | 'childrenMdxBlogPost.image.children.children'
  | 'childrenMdxBlogPost.image.internal.content'
  | 'childrenMdxBlogPost.image.internal.contentDigest'
  | 'childrenMdxBlogPost.image.internal.description'
  | 'childrenMdxBlogPost.image.internal.fieldOwners'
  | 'childrenMdxBlogPost.image.internal.ignoreType'
  | 'childrenMdxBlogPost.image.internal.mediaType'
  | 'childrenMdxBlogPost.image.internal.owner'
  | 'childrenMdxBlogPost.image.internal.type'
  | 'childrenMdxBlogPost.imageAlt'
  | 'childrenMdxBlogPost.imageCaptionText'
  | 'childrenMdxBlogPost.imageCaptionLink'
  | 'childrenMdxBlogPost.socialImage.sourceInstanceName'
  | 'childrenMdxBlogPost.socialImage.absolutePath'
  | 'childrenMdxBlogPost.socialImage.relativePath'
  | 'childrenMdxBlogPost.socialImage.extension'
  | 'childrenMdxBlogPost.socialImage.size'
  | 'childrenMdxBlogPost.socialImage.prettySize'
  | 'childrenMdxBlogPost.socialImage.modifiedTime'
  | 'childrenMdxBlogPost.socialImage.accessTime'
  | 'childrenMdxBlogPost.socialImage.changeTime'
  | 'childrenMdxBlogPost.socialImage.birthTime'
  | 'childrenMdxBlogPost.socialImage.root'
  | 'childrenMdxBlogPost.socialImage.dir'
  | 'childrenMdxBlogPost.socialImage.base'
  | 'childrenMdxBlogPost.socialImage.ext'
  | 'childrenMdxBlogPost.socialImage.name'
  | 'childrenMdxBlogPost.socialImage.relativeDirectory'
  | 'childrenMdxBlogPost.socialImage.dev'
  | 'childrenMdxBlogPost.socialImage.mode'
  | 'childrenMdxBlogPost.socialImage.nlink'
  | 'childrenMdxBlogPost.socialImage.uid'
  | 'childrenMdxBlogPost.socialImage.gid'
  | 'childrenMdxBlogPost.socialImage.rdev'
  | 'childrenMdxBlogPost.socialImage.ino'
  | 'childrenMdxBlogPost.socialImage.atimeMs'
  | 'childrenMdxBlogPost.socialImage.mtimeMs'
  | 'childrenMdxBlogPost.socialImage.ctimeMs'
  | 'childrenMdxBlogPost.socialImage.atime'
  | 'childrenMdxBlogPost.socialImage.mtime'
  | 'childrenMdxBlogPost.socialImage.ctime'
  | 'childrenMdxBlogPost.socialImage.birthtime'
  | 'childrenMdxBlogPost.socialImage.birthtimeMs'
  | 'childrenMdxBlogPost.socialImage.blksize'
  | 'childrenMdxBlogPost.socialImage.blocks'
  | 'childrenMdxBlogPost.socialImage.publicURL'
  | 'childrenMdxBlogPost.socialImage.childrenImageSharp'
  | 'childrenMdxBlogPost.socialImage.childrenImageSharp.gatsbyImageData'
  | 'childrenMdxBlogPost.socialImage.childrenImageSharp.id'
  | 'childrenMdxBlogPost.socialImage.childrenImageSharp.children'
  | 'childrenMdxBlogPost.socialImage.childImageSharp.gatsbyImageData'
  | 'childrenMdxBlogPost.socialImage.childImageSharp.id'
  | 'childrenMdxBlogPost.socialImage.childImageSharp.children'
  | 'childrenMdxBlogPost.socialImage.childrenMdx'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.rawBody'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.fileAbsolutePath'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.slug'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.body'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.excerpt'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.headings'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.html'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.mdxAST'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.tableOfContents'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.timeToRead'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.childrenMdxBlogPost'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.id'
  | 'childrenMdxBlogPost.socialImage.childrenMdx.children'
  | 'childrenMdxBlogPost.socialImage.childMdx.rawBody'
  | 'childrenMdxBlogPost.socialImage.childMdx.fileAbsolutePath'
  | 'childrenMdxBlogPost.socialImage.childMdx.slug'
  | 'childrenMdxBlogPost.socialImage.childMdx.body'
  | 'childrenMdxBlogPost.socialImage.childMdx.excerpt'
  | 'childrenMdxBlogPost.socialImage.childMdx.headings'
  | 'childrenMdxBlogPost.socialImage.childMdx.html'
  | 'childrenMdxBlogPost.socialImage.childMdx.mdxAST'
  | 'childrenMdxBlogPost.socialImage.childMdx.tableOfContents'
  | 'childrenMdxBlogPost.socialImage.childMdx.timeToRead'
  | 'childrenMdxBlogPost.socialImage.childMdx.childrenMdxBlogPost'
  | 'childrenMdxBlogPost.socialImage.childMdx.id'
  | 'childrenMdxBlogPost.socialImage.childMdx.children'
  | 'childrenMdxBlogPost.socialImage.id'
  | 'childrenMdxBlogPost.socialImage.parent.id'
  | 'childrenMdxBlogPost.socialImage.parent.children'
  | 'childrenMdxBlogPost.socialImage.children'
  | 'childrenMdxBlogPost.socialImage.children.id'
  | 'childrenMdxBlogPost.socialImage.children.children'
  | 'childrenMdxBlogPost.socialImage.internal.content'
  | 'childrenMdxBlogPost.socialImage.internal.contentDigest'
  | 'childrenMdxBlogPost.socialImage.internal.description'
  | 'childrenMdxBlogPost.socialImage.internal.fieldOwners'
  | 'childrenMdxBlogPost.socialImage.internal.ignoreType'
  | 'childrenMdxBlogPost.socialImage.internal.mediaType'
  | 'childrenMdxBlogPost.socialImage.internal.owner'
  | 'childrenMdxBlogPost.socialImage.internal.type'
  | 'childrenMdxBlogPost.body'
  | 'childrenMdxBlogPost.parent.id'
  | 'childrenMdxBlogPost.parent.parent.id'
  | 'childrenMdxBlogPost.parent.parent.children'
  | 'childrenMdxBlogPost.parent.children'
  | 'childrenMdxBlogPost.parent.children.id'
  | 'childrenMdxBlogPost.parent.children.children'
  | 'childrenMdxBlogPost.parent.internal.content'
  | 'childrenMdxBlogPost.parent.internal.contentDigest'
  | 'childrenMdxBlogPost.parent.internal.description'
  | 'childrenMdxBlogPost.parent.internal.fieldOwners'
  | 'childrenMdxBlogPost.parent.internal.ignoreType'
  | 'childrenMdxBlogPost.parent.internal.mediaType'
  | 'childrenMdxBlogPost.parent.internal.owner'
  | 'childrenMdxBlogPost.parent.internal.type'
  | 'childrenMdxBlogPost.children'
  | 'childrenMdxBlogPost.children.id'
  | 'childrenMdxBlogPost.children.parent.id'
  | 'childrenMdxBlogPost.children.parent.children'
  | 'childrenMdxBlogPost.children.children'
  | 'childrenMdxBlogPost.children.children.id'
  | 'childrenMdxBlogPost.children.children.children'
  | 'childrenMdxBlogPost.children.internal.content'
  | 'childrenMdxBlogPost.children.internal.contentDigest'
  | 'childrenMdxBlogPost.children.internal.description'
  | 'childrenMdxBlogPost.children.internal.fieldOwners'
  | 'childrenMdxBlogPost.children.internal.ignoreType'
  | 'childrenMdxBlogPost.children.internal.mediaType'
  | 'childrenMdxBlogPost.children.internal.owner'
  | 'childrenMdxBlogPost.children.internal.type'
  | 'childrenMdxBlogPost.internal.content'
  | 'childrenMdxBlogPost.internal.contentDigest'
  | 'childrenMdxBlogPost.internal.description'
  | 'childrenMdxBlogPost.internal.fieldOwners'
  | 'childrenMdxBlogPost.internal.ignoreType'
  | 'childrenMdxBlogPost.internal.mediaType'
  | 'childrenMdxBlogPost.internal.owner'
  | 'childrenMdxBlogPost.internal.type'
  | 'childMdxBlogPost.id'
  | 'childMdxBlogPost.title'
  | 'childMdxBlogPost.slug'
  | 'childMdxBlogPost.date'
  | 'childMdxBlogPost.tags'
  | 'childMdxBlogPost.excerpt'
  | 'childMdxBlogPost.image.sourceInstanceName'
  | 'childMdxBlogPost.image.absolutePath'
  | 'childMdxBlogPost.image.relativePath'
  | 'childMdxBlogPost.image.extension'
  | 'childMdxBlogPost.image.size'
  | 'childMdxBlogPost.image.prettySize'
  | 'childMdxBlogPost.image.modifiedTime'
  | 'childMdxBlogPost.image.accessTime'
  | 'childMdxBlogPost.image.changeTime'
  | 'childMdxBlogPost.image.birthTime'
  | 'childMdxBlogPost.image.root'
  | 'childMdxBlogPost.image.dir'
  | 'childMdxBlogPost.image.base'
  | 'childMdxBlogPost.image.ext'
  | 'childMdxBlogPost.image.name'
  | 'childMdxBlogPost.image.relativeDirectory'
  | 'childMdxBlogPost.image.dev'
  | 'childMdxBlogPost.image.mode'
  | 'childMdxBlogPost.image.nlink'
  | 'childMdxBlogPost.image.uid'
  | 'childMdxBlogPost.image.gid'
  | 'childMdxBlogPost.image.rdev'
  | 'childMdxBlogPost.image.ino'
  | 'childMdxBlogPost.image.atimeMs'
  | 'childMdxBlogPost.image.mtimeMs'
  | 'childMdxBlogPost.image.ctimeMs'
  | 'childMdxBlogPost.image.atime'
  | 'childMdxBlogPost.image.mtime'
  | 'childMdxBlogPost.image.ctime'
  | 'childMdxBlogPost.image.birthtime'
  | 'childMdxBlogPost.image.birthtimeMs'
  | 'childMdxBlogPost.image.blksize'
  | 'childMdxBlogPost.image.blocks'
  | 'childMdxBlogPost.image.publicURL'
  | 'childMdxBlogPost.image.childrenImageSharp'
  | 'childMdxBlogPost.image.childrenImageSharp.gatsbyImageData'
  | 'childMdxBlogPost.image.childrenImageSharp.id'
  | 'childMdxBlogPost.image.childrenImageSharp.children'
  | 'childMdxBlogPost.image.childImageSharp.gatsbyImageData'
  | 'childMdxBlogPost.image.childImageSharp.id'
  | 'childMdxBlogPost.image.childImageSharp.children'
  | 'childMdxBlogPost.image.childrenMdx'
  | 'childMdxBlogPost.image.childrenMdx.rawBody'
  | 'childMdxBlogPost.image.childrenMdx.fileAbsolutePath'
  | 'childMdxBlogPost.image.childrenMdx.slug'
  | 'childMdxBlogPost.image.childrenMdx.body'
  | 'childMdxBlogPost.image.childrenMdx.excerpt'
  | 'childMdxBlogPost.image.childrenMdx.headings'
  | 'childMdxBlogPost.image.childrenMdx.html'
  | 'childMdxBlogPost.image.childrenMdx.mdxAST'
  | 'childMdxBlogPost.image.childrenMdx.tableOfContents'
  | 'childMdxBlogPost.image.childrenMdx.timeToRead'
  | 'childMdxBlogPost.image.childrenMdx.childrenMdxBlogPost'
  | 'childMdxBlogPost.image.childrenMdx.id'
  | 'childMdxBlogPost.image.childrenMdx.children'
  | 'childMdxBlogPost.image.childMdx.rawBody'
  | 'childMdxBlogPost.image.childMdx.fileAbsolutePath'
  | 'childMdxBlogPost.image.childMdx.slug'
  | 'childMdxBlogPost.image.childMdx.body'
  | 'childMdxBlogPost.image.childMdx.excerpt'
  | 'childMdxBlogPost.image.childMdx.headings'
  | 'childMdxBlogPost.image.childMdx.html'
  | 'childMdxBlogPost.image.childMdx.mdxAST'
  | 'childMdxBlogPost.image.childMdx.tableOfContents'
  | 'childMdxBlogPost.image.childMdx.timeToRead'
  | 'childMdxBlogPost.image.childMdx.childrenMdxBlogPost'
  | 'childMdxBlogPost.image.childMdx.id'
  | 'childMdxBlogPost.image.childMdx.children'
  | 'childMdxBlogPost.image.id'
  | 'childMdxBlogPost.image.parent.id'
  | 'childMdxBlogPost.image.parent.children'
  | 'childMdxBlogPost.image.children'
  | 'childMdxBlogPost.image.children.id'
  | 'childMdxBlogPost.image.children.children'
  | 'childMdxBlogPost.image.internal.content'
  | 'childMdxBlogPost.image.internal.contentDigest'
  | 'childMdxBlogPost.image.internal.description'
  | 'childMdxBlogPost.image.internal.fieldOwners'
  | 'childMdxBlogPost.image.internal.ignoreType'
  | 'childMdxBlogPost.image.internal.mediaType'
  | 'childMdxBlogPost.image.internal.owner'
  | 'childMdxBlogPost.image.internal.type'
  | 'childMdxBlogPost.imageAlt'
  | 'childMdxBlogPost.imageCaptionText'
  | 'childMdxBlogPost.imageCaptionLink'
  | 'childMdxBlogPost.socialImage.sourceInstanceName'
  | 'childMdxBlogPost.socialImage.absolutePath'
  | 'childMdxBlogPost.socialImage.relativePath'
  | 'childMdxBlogPost.socialImage.extension'
  | 'childMdxBlogPost.socialImage.size'
  | 'childMdxBlogPost.socialImage.prettySize'
  | 'childMdxBlogPost.socialImage.modifiedTime'
  | 'childMdxBlogPost.socialImage.accessTime'
  | 'childMdxBlogPost.socialImage.changeTime'
  | 'childMdxBlogPost.socialImage.birthTime'
  | 'childMdxBlogPost.socialImage.root'
  | 'childMdxBlogPost.socialImage.dir'
  | 'childMdxBlogPost.socialImage.base'
  | 'childMdxBlogPost.socialImage.ext'
  | 'childMdxBlogPost.socialImage.name'
  | 'childMdxBlogPost.socialImage.relativeDirectory'
  | 'childMdxBlogPost.socialImage.dev'
  | 'childMdxBlogPost.socialImage.mode'
  | 'childMdxBlogPost.socialImage.nlink'
  | 'childMdxBlogPost.socialImage.uid'
  | 'childMdxBlogPost.socialImage.gid'
  | 'childMdxBlogPost.socialImage.rdev'
  | 'childMdxBlogPost.socialImage.ino'
  | 'childMdxBlogPost.socialImage.atimeMs'
  | 'childMdxBlogPost.socialImage.mtimeMs'
  | 'childMdxBlogPost.socialImage.ctimeMs'
  | 'childMdxBlogPost.socialImage.atime'
  | 'childMdxBlogPost.socialImage.mtime'
  | 'childMdxBlogPost.socialImage.ctime'
  | 'childMdxBlogPost.socialImage.birthtime'
  | 'childMdxBlogPost.socialImage.birthtimeMs'
  | 'childMdxBlogPost.socialImage.blksize'
  | 'childMdxBlogPost.socialImage.blocks'
  | 'childMdxBlogPost.socialImage.publicURL'
  | 'childMdxBlogPost.socialImage.childrenImageSharp'
  | 'childMdxBlogPost.socialImage.childrenImageSharp.gatsbyImageData'
  | 'childMdxBlogPost.socialImage.childrenImageSharp.id'
  | 'childMdxBlogPost.socialImage.childrenImageSharp.children'
  | 'childMdxBlogPost.socialImage.childImageSharp.gatsbyImageData'
  | 'childMdxBlogPost.socialImage.childImageSharp.id'
  | 'childMdxBlogPost.socialImage.childImageSharp.children'
  | 'childMdxBlogPost.socialImage.childrenMdx'
  | 'childMdxBlogPost.socialImage.childrenMdx.rawBody'
  | 'childMdxBlogPost.socialImage.childrenMdx.fileAbsolutePath'
  | 'childMdxBlogPost.socialImage.childrenMdx.slug'
  | 'childMdxBlogPost.socialImage.childrenMdx.body'
  | 'childMdxBlogPost.socialImage.childrenMdx.excerpt'
  | 'childMdxBlogPost.socialImage.childrenMdx.headings'
  | 'childMdxBlogPost.socialImage.childrenMdx.html'
  | 'childMdxBlogPost.socialImage.childrenMdx.mdxAST'
  | 'childMdxBlogPost.socialImage.childrenMdx.tableOfContents'
  | 'childMdxBlogPost.socialImage.childrenMdx.timeToRead'
  | 'childMdxBlogPost.socialImage.childrenMdx.childrenMdxBlogPost'
  | 'childMdxBlogPost.socialImage.childrenMdx.id'
  | 'childMdxBlogPost.socialImage.childrenMdx.children'
  | 'childMdxBlogPost.socialImage.childMdx.rawBody'
  | 'childMdxBlogPost.socialImage.childMdx.fileAbsolutePath'
  | 'childMdxBlogPost.socialImage.childMdx.slug'
  | 'childMdxBlogPost.socialImage.childMdx.body'
  | 'childMdxBlogPost.socialImage.childMdx.excerpt'
  | 'childMdxBlogPost.socialImage.childMdx.headings'
  | 'childMdxBlogPost.socialImage.childMdx.html'
  | 'childMdxBlogPost.socialImage.childMdx.mdxAST'
  | 'childMdxBlogPost.socialImage.childMdx.tableOfContents'
  | 'childMdxBlogPost.socialImage.childMdx.timeToRead'
  | 'childMdxBlogPost.socialImage.childMdx.childrenMdxBlogPost'
  | 'childMdxBlogPost.socialImage.childMdx.id'
  | 'childMdxBlogPost.socialImage.childMdx.children'
  | 'childMdxBlogPost.socialImage.id'
  | 'childMdxBlogPost.socialImage.parent.id'
  | 'childMdxBlogPost.socialImage.parent.children'
  | 'childMdxBlogPost.socialImage.children'
  | 'childMdxBlogPost.socialImage.children.id'
  | 'childMdxBlogPost.socialImage.children.children'
  | 'childMdxBlogPost.socialImage.internal.content'
  | 'childMdxBlogPost.socialImage.internal.contentDigest'
  | 'childMdxBlogPost.socialImage.internal.description'
  | 'childMdxBlogPost.socialImage.internal.fieldOwners'
  | 'childMdxBlogPost.socialImage.internal.ignoreType'
  | 'childMdxBlogPost.socialImage.internal.mediaType'
  | 'childMdxBlogPost.socialImage.internal.owner'
  | 'childMdxBlogPost.socialImage.internal.type'
  | 'childMdxBlogPost.body'
  | 'childMdxBlogPost.parent.id'
  | 'childMdxBlogPost.parent.parent.id'
  | 'childMdxBlogPost.parent.parent.children'
  | 'childMdxBlogPost.parent.children'
  | 'childMdxBlogPost.parent.children.id'
  | 'childMdxBlogPost.parent.children.children'
  | 'childMdxBlogPost.parent.internal.content'
  | 'childMdxBlogPost.parent.internal.contentDigest'
  | 'childMdxBlogPost.parent.internal.description'
  | 'childMdxBlogPost.parent.internal.fieldOwners'
  | 'childMdxBlogPost.parent.internal.ignoreType'
  | 'childMdxBlogPost.parent.internal.mediaType'
  | 'childMdxBlogPost.parent.internal.owner'
  | 'childMdxBlogPost.parent.internal.type'
  | 'childMdxBlogPost.children'
  | 'childMdxBlogPost.children.id'
  | 'childMdxBlogPost.children.parent.id'
  | 'childMdxBlogPost.children.parent.children'
  | 'childMdxBlogPost.children.children'
  | 'childMdxBlogPost.children.children.id'
  | 'childMdxBlogPost.children.children.children'
  | 'childMdxBlogPost.children.internal.content'
  | 'childMdxBlogPost.children.internal.contentDigest'
  | 'childMdxBlogPost.children.internal.description'
  | 'childMdxBlogPost.children.internal.fieldOwners'
  | 'childMdxBlogPost.children.internal.ignoreType'
  | 'childMdxBlogPost.children.internal.mediaType'
  | 'childMdxBlogPost.children.internal.owner'
  | 'childMdxBlogPost.children.internal.type'
  | 'childMdxBlogPost.internal.content'
  | 'childMdxBlogPost.internal.contentDigest'
  | 'childMdxBlogPost.internal.description'
  | 'childMdxBlogPost.internal.fieldOwners'
  | 'childMdxBlogPost.internal.ignoreType'
  | 'childMdxBlogPost.internal.mediaType'
  | 'childMdxBlogPost.internal.owner'
  | 'childMdxBlogPost.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly childrenMdxBlogPost: Maybe<MdxBlogPostFilterListInput>;
  readonly childMdxBlogPost: Maybe<MdxBlogPostFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
  readonly date: Maybe<Scalars['Date']>;
  readonly image: Maybe<File>;
  readonly imageAlt: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};


type MdxFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly imageAlt: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
};

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Query = {
  readonly blogPost: Maybe<BlogPost>;
  readonly allBlogPost: BlogPostConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly mdxBlogPost: Maybe<MdxBlogPost>;
  readonly allMdxBlogPost: MdxBlogPostConnection;
  readonly themeUiConfig: Maybe<ThemeUiConfig>;
  readonly allThemeUiConfig: ThemeUiConfigConnection;
  readonly blogThemeConfig: Maybe<BlogThemeConfig>;
  readonly allBlogThemeConfig: BlogThemeConfigConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_blogPostArgs = {
  id: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  image: Maybe<FileFilterInput>;
  imageAlt: Maybe<StringQueryOperatorInput>;
  imageCaptionText: Maybe<StringQueryOperatorInput>;
  imageCaptionLink: Maybe<StringQueryOperatorInput>;
  socialImage: Maybe<FileFilterInput>;
};


type Query_allBlogPostArgs = {
  filter: Maybe<BlogPostFilterInput>;
  sort: Maybe<BlogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxBlogPostArgs = {
  id: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  image: Maybe<FileFilterInput>;
  imageAlt: Maybe<StringQueryOperatorInput>;
  imageCaptionText: Maybe<StringQueryOperatorInput>;
  imageCaptionLink: Maybe<StringQueryOperatorInput>;
  socialImage: Maybe<FileFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxBlogPostArgs = {
  filter: Maybe<MdxBlogPostFilterInput>;
  sort: Maybe<MdxBlogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_themeUiConfigArgs = {
  preset: Maybe<JSONQueryOperatorInput>;
  prismPreset: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allThemeUiConfigArgs = {
  filter: Maybe<ThemeUiConfigFilterInput>;
  sort: Maybe<ThemeUiConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_blogThemeConfigArgs = {
  webfontURL: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allBlogThemeConfigArgs = {
  filter: Maybe<BlogThemeConfigFilterInput>;
  sort: Maybe<BlogThemeConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  childrenMdxBlogPost: Maybe<MdxBlogPostFilterListInput>;
  childMdxBlogPost: Maybe<MdxBlogPostFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.social'
  | 'siteMetadata.social.name'
  | 'siteMetadata.social.url'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly previousId: Maybe<Scalars['String']>;
  readonly nextId: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly category: Maybe<Scalars['String']>;
  readonly tags: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly previousId: Maybe<StringQueryOperatorInput>;
  readonly nextId: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.previousId'
  | 'context.nextId'
  | 'context.maxWidth'
  | 'context.category'
  | 'context.tags'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.preset.initialColorModeName'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.trackingIds'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.extensions'
  | 'pluginOptions.gatsbyRemarkPlugins'
  | 'pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginOptions.gatsbyRemarkPlugins.options.maxWidth'
  | 'pluginOptions.gatsbyRemarkPlugins.options.linkImagesToOriginal'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.path'
  | 'pluginOptions.name'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.preset.initialColorModeName'
  | 'pluginOptions.preset.colors.text'
  | 'pluginOptions.preset.colors.background'
  | 'pluginOptions.preset.colors.primary'
  | 'pluginOptions.preset.colors.secondary'
  | 'pluginOptions.preset.colors.muted'
  | 'pluginOptions.preset.colors.highlight'
  | 'pluginOptions.preset.colors.heading'
  | 'pluginOptions.preset.fonts.body'
  | 'pluginOptions.preset.fonts.heading'
  | 'pluginOptions.preset.fonts.monospace'
  | 'pluginOptions.preset.sizes.container'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.trackingIds'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly gatsbyRemarkPlugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['Boolean']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly preset: Maybe<SitePluginPluginOptionsPreset>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly trackingIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly gatsbyRemarkPlugins: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<BooleanQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly preset: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly trackingIds: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPreset = {
  readonly initialColorModeName: Maybe<Scalars['String']>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetColors>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetFonts>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetSizes>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetStyles>;
  readonly prism: Maybe<SitePluginPluginOptionsPresetPrism>;
};

type SitePluginPluginOptionsPresetColors = {
  readonly text: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly primary: Maybe<Scalars['String']>;
  readonly secondary: Maybe<Scalars['String']>;
  readonly muted: Maybe<Scalars['String']>;
  readonly highlight: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly prism: Maybe<SitePluginPluginOptionsPresetColorsPrism>;
  readonly modes: Maybe<SitePluginPluginOptionsPresetColorsModes>;
};

type SitePluginPluginOptionsPresetColorsFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<StringQueryOperatorInput>;
  readonly secondary: Maybe<StringQueryOperatorInput>;
  readonly muted: Maybe<StringQueryOperatorInput>;
  readonly highlight: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly prism: Maybe<SitePluginPluginOptionsPresetColorsPrismFilterInput>;
  readonly modes: Maybe<SitePluginPluginOptionsPresetColorsModesFilterInput>;
};

type SitePluginPluginOptionsPresetColorsModes = {
  readonly dark: Maybe<SitePluginPluginOptionsPresetColorsModesDark>;
};

type SitePluginPluginOptionsPresetColorsModesDark = {
  readonly text: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly primary: Maybe<Scalars['String']>;
  readonly secondary: Maybe<Scalars['String']>;
  readonly muted: Maybe<Scalars['String']>;
  readonly highlight: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetColorsModesDarkFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<StringQueryOperatorInput>;
  readonly secondary: Maybe<StringQueryOperatorInput>;
  readonly muted: Maybe<StringQueryOperatorInput>;
  readonly highlight: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetColorsModesFilterInput = {
  readonly dark: Maybe<SitePluginPluginOptionsPresetColorsModesDarkFilterInput>;
};

type SitePluginPluginOptionsPresetColorsPrism = {
  readonly background: Maybe<Scalars['String']>;
  readonly comment: Maybe<Scalars['String']>;
  readonly string: Maybe<Scalars['String']>;
  readonly var: Maybe<Scalars['String']>;
  readonly number: Maybe<Scalars['String']>;
  readonly constant: Maybe<Scalars['String']>;
  readonly punctuation: Maybe<Scalars['String']>;
  readonly className: Maybe<Scalars['String']>;
  readonly tag: Maybe<Scalars['String']>;
  readonly boolean: Maybe<Scalars['String']>;
  readonly property: Maybe<Scalars['String']>;
  readonly namespace: Maybe<Scalars['String']>;
  readonly highlight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetColorsPrismFilterInput = {
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly comment: Maybe<StringQueryOperatorInput>;
  readonly string: Maybe<StringQueryOperatorInput>;
  readonly var: Maybe<StringQueryOperatorInput>;
  readonly number: Maybe<StringQueryOperatorInput>;
  readonly constant: Maybe<StringQueryOperatorInput>;
  readonly punctuation: Maybe<StringQueryOperatorInput>;
  readonly className: Maybe<StringQueryOperatorInput>;
  readonly tag: Maybe<StringQueryOperatorInput>;
  readonly boolean: Maybe<StringQueryOperatorInput>;
  readonly property: Maybe<StringQueryOperatorInput>;
  readonly namespace: Maybe<StringQueryOperatorInput>;
  readonly highlight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetFilterInput = {
  readonly initialColorModeName: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetColorsFilterInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetFontsFilterInput>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetSizesFilterInput>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetStylesFilterInput>;
  readonly prism: Maybe<SitePluginPluginOptionsPresetPrismFilterInput>;
};

type SitePluginPluginOptionsPresetFonts = {
  readonly body: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly monospace: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetFontsFilterInput = {
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly monospace: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism = {
  readonly _attr_name: Maybe<SitePluginPluginOptionsPresetPrism_attr_name>;
  readonly _comment: Maybe<SitePluginPluginOptionsPresetPrism_comment>;
  readonly _attr_name___string___url: Maybe<SitePluginPluginOptionsPresetPrism_attr_name___string___url>;
  readonly _variable: Maybe<SitePluginPluginOptionsPresetPrism_variable>;
  readonly _number: Maybe<SitePluginPluginOptionsPresetPrism_number>;
  readonly _builtin___char___constant___function: Maybe<SitePluginPluginOptionsPresetPrism_builtin___char___constant___function>;
  readonly _punctuation___selector___doctype: Maybe<SitePluginPluginOptionsPresetPrism_punctuation___selector___doctype>;
  readonly _class_name: Maybe<SitePluginPluginOptionsPresetPrism_class_name>;
  readonly _tag___operator___keyword: Maybe<SitePluginPluginOptionsPresetPrism_tag___operator___keyword>;
  readonly _boolean: Maybe<SitePluginPluginOptionsPresetPrism_boolean>;
  readonly _property: Maybe<SitePluginPluginOptionsPresetPrism_property>;
  readonly _namespace: Maybe<SitePluginPluginOptionsPresetPrism_namespace>;
};

type SitePluginPluginOptionsPresetPrism_attr_name = {
  readonly fontStyle: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_attr_name___string___url = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_attr_name___string___urlFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_attr_nameFilterInput = {
  readonly fontStyle: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_boolean = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_booleanFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_builtin___char___constant___function = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_builtin___char___constant___functionFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_class_name = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_class_nameFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_comment = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_commentFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_namespace = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_namespaceFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_number = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_numberFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_property = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_propertyFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_punctuation___selector___doctype = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_punctuation___selector___doctypeFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_tag___operator___keyword = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_tag___operator___keywordFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrism_variable = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetPrism_variableFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetPrismFilterInput = {
  readonly _attr_name: Maybe<SitePluginPluginOptionsPresetPrism_attr_nameFilterInput>;
  readonly _comment: Maybe<SitePluginPluginOptionsPresetPrism_commentFilterInput>;
  readonly _attr_name___string___url: Maybe<SitePluginPluginOptionsPresetPrism_attr_name___string___urlFilterInput>;
  readonly _variable: Maybe<SitePluginPluginOptionsPresetPrism_variableFilterInput>;
  readonly _number: Maybe<SitePluginPluginOptionsPresetPrism_numberFilterInput>;
  readonly _builtin___char___constant___function: Maybe<SitePluginPluginOptionsPresetPrism_builtin___char___constant___functionFilterInput>;
  readonly _punctuation___selector___doctype: Maybe<SitePluginPluginOptionsPresetPrism_punctuation___selector___doctypeFilterInput>;
  readonly _class_name: Maybe<SitePluginPluginOptionsPresetPrism_class_nameFilterInput>;
  readonly _tag___operator___keyword: Maybe<SitePluginPluginOptionsPresetPrism_tag___operator___keywordFilterInput>;
  readonly _boolean: Maybe<SitePluginPluginOptionsPresetPrism_booleanFilterInput>;
  readonly _property: Maybe<SitePluginPluginOptionsPresetPrism_propertyFilterInput>;
  readonly _namespace: Maybe<SitePluginPluginOptionsPresetPrism_namespaceFilterInput>;
};

type SitePluginPluginOptionsPresetSizes = {
  readonly container: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetSizesFilterInput = {
  readonly container: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStyles = {
  readonly root: Maybe<SitePluginPluginOptionsPresetStylesRoot>;
  readonly pre: Maybe<SitePluginPluginOptionsPresetStylesPre>;
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesCode>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetStylesInlineCode>;
  readonly a: Maybe<SitePluginPluginOptionsPresetStylesA>;
  readonly hr: Maybe<SitePluginPluginOptionsPresetStylesHr>;
  readonly p: Maybe<SitePluginPluginOptionsPresetStylesP>;
  readonly li: Maybe<SitePluginPluginOptionsPresetStylesLi>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetStylesBlockquote>;
};

type SitePluginPluginOptionsPresetStylesA = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesAFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesBlockquote = {
  readonly color: Maybe<Scalars['String']>;
  readonly borderLeftColor: Maybe<Scalars['String']>;
  readonly opacity: Maybe<Scalars['Float']>;
  readonly _xtranslation: Maybe<SitePluginPluginOptionsPresetStylesBlockquote_xtranslation>;
};

type SitePluginPluginOptionsPresetStylesBlockquote_xtranslation = {
  readonly fontSize: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesBlockquote_xtranslationFilterInput = {
  readonly fontSize: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesBlockquoteFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly borderLeftColor: Maybe<StringQueryOperatorInput>;
  readonly opacity: Maybe<FloatQueryOperatorInput>;
  readonly _xtranslation: Maybe<SitePluginPluginOptionsPresetStylesBlockquote_xtranslationFilterInput>;
};

type SitePluginPluginOptionsPresetStylesCode = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontSize: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesCodeFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontSize: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesFilterInput = {
  readonly root: Maybe<SitePluginPluginOptionsPresetStylesRootFilterInput>;
  readonly pre: Maybe<SitePluginPluginOptionsPresetStylesPreFilterInput>;
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesCodeFilterInput>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetStylesInlineCodeFilterInput>;
  readonly a: Maybe<SitePluginPluginOptionsPresetStylesAFilterInput>;
  readonly hr: Maybe<SitePluginPluginOptionsPresetStylesHrFilterInput>;
  readonly p: Maybe<SitePluginPluginOptionsPresetStylesPFilterInput>;
  readonly li: Maybe<SitePluginPluginOptionsPresetStylesLiFilterInput>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetStylesBlockquoteFilterInput>;
};

type SitePluginPluginOptionsPresetStylesHr = {
  readonly borderColor: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesHrFilterInput = {
  readonly borderColor: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesInlineCode = {
  readonly borderRadius: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly bg: Maybe<Scalars['String']>;
  readonly paddingTop: Maybe<Scalars['String']>;
  readonly paddingBottom: Maybe<Scalars['String']>;
  readonly paddingX: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesInlineCodeFilterInput = {
  readonly borderRadius: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly bg: Maybe<StringQueryOperatorInput>;
  readonly paddingTop: Maybe<StringQueryOperatorInput>;
  readonly paddingBottom: Maybe<StringQueryOperatorInput>;
  readonly paddingX: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesLi = {
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesLiCode>;
};

type SitePluginPluginOptionsPresetStylesLiCode = {
  readonly fontSize: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesLiCodeFilterInput = {
  readonly fontSize: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesLiFilterInput = {
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesLiCodeFilterInput>;
};

type SitePluginPluginOptionsPresetStylesP = {
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesPCode>;
};

type SitePluginPluginOptionsPresetStylesPCode = {
  readonly fontSize: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesPCodeFilterInput = {
  readonly fontSize: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesPFilterInput = {
  readonly code: Maybe<SitePluginPluginOptionsPresetStylesPCodeFilterInput>;
};

type SitePluginPluginOptionsPresetStylesPre = {
  readonly variant: Maybe<Scalars['String']>;
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly tabSize: Maybe<Scalars['Int']>;
  readonly hyphens: Maybe<Scalars['String']>;
  readonly marginBottom: Maybe<Scalars['Int']>;
  readonly color: Maybe<Scalars['String']>;
  readonly bg: Maybe<Scalars['String']>;
  readonly overflow: Maybe<Scalars['String']>;
  readonly borderRadius: Maybe<Scalars['Int']>;
  readonly p: Maybe<Scalars['Int']>;
  readonly _highlight: Maybe<SitePluginPluginOptionsPresetStylesPre_highlight>;
};

type SitePluginPluginOptionsPresetStylesPre_highlight = {
  readonly background: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesPre_highlightFilterInput = {
  readonly background: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesPreFilterInput = {
  readonly variant: Maybe<StringQueryOperatorInput>;
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly tabSize: Maybe<IntQueryOperatorInput>;
  readonly hyphens: Maybe<StringQueryOperatorInput>;
  readonly marginBottom: Maybe<IntQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly bg: Maybe<StringQueryOperatorInput>;
  readonly overflow: Maybe<StringQueryOperatorInput>;
  readonly borderRadius: Maybe<IntQueryOperatorInput>;
  readonly p: Maybe<IntQueryOperatorInput>;
  readonly _highlight: Maybe<SitePluginPluginOptionsPresetStylesPre_highlightFilterInput>;
};

type SitePluginPluginOptionsPresetStylesRoot = {
  readonly fontFamily: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesRootFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataSocial>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SiteSiteMetadataSocialFilterListInput>;
};

type SiteSiteMetadataSocial = {
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocialFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataSocialFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type ThemeUiConfig = Node & {
  readonly preset: Maybe<Scalars['JSON']>;
  readonly prismPreset: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ThemeUiConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
};


type ThemeUiConfigConnection_distinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

type ThemeUiConfigEdge = {
  readonly next: Maybe<ThemeUiConfig>;
  readonly node: ThemeUiConfig;
  readonly previous: Maybe<ThemeUiConfig>;
};

type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ThemeUiConfigFilterInput = {
  readonly preset: Maybe<JSONQueryOperatorInput>;
  readonly prismPreset: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ThemeUiConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ThemeUiConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ThemeUiConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type CustomPostPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
  previousId: Maybe<Scalars['String']>;
  nextId: Maybe<Scalars['String']>;
  maxWidth: Maybe<Scalars['Int']>;
}>;


type CustomPostPageQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'author' | 'siteUrl'>
      & { readonly social: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataSocial, 'name' | 'url'>>>> }
    )> }>, readonly blogPost: Maybe<(
    { readonly __typename: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'body' | 'slug' | 'title' | 'tags' | 'date' | 'imageAlt'>
    & { readonly image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
          Pick<ImageSharpFluid, 'src'>
          & GatsbyImageSharpFluidFragment
        )> }> }>, readonly socialImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
          Pick<ImageSharpFluid, 'src'>
          & GatsbyImageSharpFluidFragment
        )> }> }> }
  )>, readonly previous: Maybe<(
    { readonly __typename: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )>, readonly next: Maybe<(
    { readonly __typename: 'MdxBlogPost' }
    & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
  )> };

type CustomPostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


type CustomPostsQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title'>
      & { readonly social: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataSocial, 'name' | 'url'>>>> }
    )> }>, readonly allBlogPost: { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'MdxBlogPost' }
      & Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date' | 'tags'>
    )> } };

type usersyutaRepositorygithubComyutanakanoblogsrctemplatesCategoryJs3686848499QueryVariables = Exact<{
  category: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


type usersyutaRepositorygithubComyutanakanoblogsrctemplatesCategoryJs3686848499Query = { readonly allMdx: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'category' | 'date' | 'tags'>> }
      ) }> } };

type usersyutaRepositorygithubComyutanakanoblogsrctemplatesTagJs2669374519QueryVariables = Exact<{
  tag: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


type usersyutaRepositorygithubComyutanakanoblogsrctemplatesTagJs2669374519Query = { readonly allMdx: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<Mdx, 'id' | 'slug'>
        & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'category' | 'date' | 'tags'>> }
      ) }> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly allMdx: { readonly group: ReadonlyArray<Pick<MdxGroupConnection, 'fieldValue' | 'totalCount'>> } };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly allMdx: { readonly group: ReadonlyArray<Pick<MdxGroupConnection, 'fieldValue' | 'totalCount'>> } };

type QueryQueryVariables = Exact<{ [key: string]: never; }>;


type QueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author' | 'description'>> }>, readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id' | 'slug'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'category' | 'tags' | 'title'>> }
    )> } };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PostsQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title'>
      & { readonly social: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataSocial, 'name' | 'url'>>>> }
    )> }>, readonly allBlogPost: { readonly nodes: ReadonlyArray<Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date' | 'tags'>> } };

type PostPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
  previousId: Maybe<Scalars['String']>;
  nextId: Maybe<Scalars['String']>;
  maxWidth: Maybe<Scalars['Int']>;
}>;


type PostPageQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title'>
      & { readonly social: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataSocial, 'name' | 'url'>>>> }
    )> }>, readonly blogPost: Maybe<(
    Pick<MdxBlogPost, 'id' | 'excerpt' | 'body' | 'slug' | 'title' | 'tags' | 'date' | 'imageAlt' | 'imageCaptionText' | 'imageCaptionLink'>
    & { readonly image: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
          Pick<ImageSharpFluid, 'src'>
          & GatsbyImageSharpFluidFragment
        )> }> }>, readonly socialImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
          Pick<ImageSharpFluid, 'src'>
          & GatsbyImageSharpFluidFragment
        )> }> }> }
  )>, readonly previous: Maybe<Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>>, readonly next: Maybe<Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>> };

type BioQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BioQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author'>> }>, readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly themeUiConfig: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_6_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>> }> };

type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_7_Query = { readonly blogThemeConfig: Maybe<Pick<BlogThemeConfig, 'webfontURL'>> };

}