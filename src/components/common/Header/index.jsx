import React from 'react'
import './styles.css'
import janssenLogo from '../../../images/janssen-logo.png'

function Header () {
  return (
    <header className='App-header'>
      <img
        className='janssen-header-logo'
        src={janssenLogo}
        alt='janssen header logo'
      />
    </header>
  )
}

export default Header
