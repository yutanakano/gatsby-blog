import React from "react"

const Date = ({ props }: {props: any}) => {
    return(
      <p className='text-xs mt-4'
        {...props}
      />
    );
}

export default Date;