import React from "react"

import Bio from "../components/bio"
import PreviousNext from "../../components/post/PreviousNext"

const PostFooter = ({ previous, next }) => (
  <footer className='max-w-max'>
    <Bio />
    <PreviousNext previous={previous} next={next}/>
  </footer>
)

export default PostFooter
