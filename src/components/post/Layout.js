import React from "react"

const Layout = {
    h1: props => <h1 className='3xl font-semibold my-4' {...props} />,
    h2: props => <h2 className='2xl font-semibold my-4' {...props} />,
    h3: props => <h3 className='xl font-semibold my-4' {...props} />,
    h4: props => <h4 className='lg font-semibold my-4' {...props} />,
    ul: props => <ul className='list-disc list-inside' {...props} />,
    li: props => <li className='pl-4' {...props} />
}

export default Layout;
