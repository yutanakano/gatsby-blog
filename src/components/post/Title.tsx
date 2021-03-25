import React from "react"

const Title = ({ props }: {props: any}) => {
  return(
    <h1 className='text-3l font-semibold' {...props} />
  );
}

export default Title;