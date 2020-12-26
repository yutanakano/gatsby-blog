import React from "react"

const Footer = () => (
  <footer className='w-full text-center border-t border-grey p-4 pin-b bg-gray-500'>
    © {new Date().getFullYear()}, 
    {` `}
    <span href="https://yutanakano.net/">yutanakano</span>
  </footer>
)
export default Footer
