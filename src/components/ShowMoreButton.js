import React from "react"

const ShowMoreButton = ({ display, chunk, scope, setScope }) => {
  return(
    <>
      <div className="flex justify-center p-4" style={{ display: display ? '' : 'none' }}>
        <button onClick={ () => setScope(scope+chunk) } className={ "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded select-none" }>
          { "show more" }
        </button>
      </div>
    </>
  )
}

export default ShowMoreButton