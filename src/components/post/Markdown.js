import React from "react"

const Markdown = {
    h1: props => <h1 className='3xl font-semibold' {...props} />,
    h2: props => <h2 className='2xl font-semibold' {...props} />,
    h3: props => <h3 className='xl font-semibold' {...props} />,
    h4: props => <h4 className='lg font-semibold' {...props} />,
    ul: props => <ul className='list-disc list-inside' {...props} />,
    li: props => <li className='pl-4' {...props} />
}

export default Markdown
