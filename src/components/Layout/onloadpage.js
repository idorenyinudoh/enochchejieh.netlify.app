import React from 'react'
import Logo from '../../images/logo.svg'

const OnLoadPage = () => {
  const [pageRendered, setPageRendered] = React.useState(false)

  setTimeout(() => {
    setPageRendered(true)
  }, 7000)

  return (
    <div className={!pageRendered ? 'load-container' : 'load-container hidden'}>
      <div className="content">
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default OnLoadPage
