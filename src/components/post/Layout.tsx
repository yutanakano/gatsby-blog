import React from "react"

const Layout = {
    h1: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h1 className='3xl font-semibold my-4' {...props} />,
    h2: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h2 className='2xl font-semibold my-4' {...props} />,
    h3: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h3 className='xl font-semibold my-4' {...props} />,
    h4: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h4 className='lg font-semibold my-4' {...props} />,
    h5: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <h4 className='base font-semibold my-4' {...props} />,
    ul: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>) => <ul className='list-disc list-inside' {...props} />,
    li: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>) => <li className='pl-4' {...props} />
}

export default Layout;
