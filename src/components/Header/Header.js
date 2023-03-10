import React from 'react'
import './Header.css'
import AccountBar from '../AccountBar/AccountBar'
import Logo from '../Logo/Logo'

function Header() {
  return (
	 <div className='Header'>
		<Logo />
		<AccountBar />
	 </div>
  )
}

export default Header
