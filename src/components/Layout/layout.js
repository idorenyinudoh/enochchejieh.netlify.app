import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import OnLoadPage from './onloadpage'

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    require('smooth-scroll')('a[href*="#"]')
  }

  return (
    <>
      <OnLoadPage />
      <div className="layout-container">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Helmet>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
