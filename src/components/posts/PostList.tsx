import React from "react"
import OriginalPostList from "gatsby-theme-blog/src/components/post-list"
import ShowMoreButton from "../../../src/components/posts/ShowMoreButton"

const PostList = ({ posts }: {posts: any}) => {
  const [scope, setScope] = React.useState(10);
  const chunk = 5  
  return(
    <>
      <OriginalPostList posts = { posts.slice(0, scope) } />
      <ShowMoreButton display={ posts.length > scope } setScope={ setScope } scope={ scope } chunk={ chunk } />
    </>
  )
}

export default PostList