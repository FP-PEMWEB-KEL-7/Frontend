import React, { useState } from 'react'
import Logo from '../assets/images/medium-logo.png'
import { UserIcon, PlusIcon, CogIcon } from '@heroicons/react/solid'
import '../styles/styles.css'

const Navbar = () => {
  const [login, setLogin] = useState(false)

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className='image' />
      <div className="right">
        {
          login === false ? (
            <div className='loginButton'>
              <p>Login</p>
            </div>
          ) : (
            <>
              <PlusIcon className='icon' />
              <UserIcon className='icon' />
              <CogIcon className='icon' />
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
