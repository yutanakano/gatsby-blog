import React from "react"
import Header from "./header"
import useBlogThemeConfig from "./../../../node_modules/gatsby-theme-blog/src/hooks/configOptions"
import Helmet from "react-helmet"
import { SkipNavContent } from "@reach/skip-nav"

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <div className="bg-gray-100">
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <SkipNavContent />
      <div>
        <div className='flex flex-col min-h-screen'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
