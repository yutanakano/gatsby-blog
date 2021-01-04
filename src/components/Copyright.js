import React from "react"

const Copyright = () => {
  return(
    <>
      © {new Date().getFullYear()}, 
      {` `}
      <span href="https://yutanakano.jp/">yutanakano</span>
    </>
  );
}

export default Copyright;