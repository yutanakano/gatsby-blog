import React from "react"

type Props = Required<{
  display: boolean
  chunk: number
  scope: number
  setScope: (scope: number) => number
}>

const ShowMoreButton: React.FC<Props> = ({ display, chunk, scope, setScope }) => {
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