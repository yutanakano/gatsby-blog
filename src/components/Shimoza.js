import React from "react"

const Copyright = () => {
  return(
    <footer className='w-full p-4 bg-gray-500 text-center'>
      © {new Date().getFullYear()}, 
      {` `}
      <span href="https://yutanakano.jp/">yutanakano</span>
    </footer>
  );
}

export default Copyright;