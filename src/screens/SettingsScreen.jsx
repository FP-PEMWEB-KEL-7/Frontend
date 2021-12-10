import { UserCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const SettingsScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const updateProfile = () => {
    console.log(this);
  }

  return (
    <div className="settings">
      <Navbar 
        loginScreen={false}
      />
      <div className="container">
        <div className="info">
          <div className="infoLeft">
            <UserCircleIcon className='profileImage' />
          </div>
          <div className="infoCenter">
            <p className="author">Michael Jeffry Setiawan</p>
            <p className="total">12 Article Written</p>
          </div>
          <div className="button">
            <p className="text">Logout</p>
          </div>
        </div>
        <p className="title">Change Your Profile ?</p>
        <div className="containerMain">
          <div className="left">
            <form className="form">
              <div className="input">
                <p className="text">Username</p>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your New Username' autoComplete='off' className="fill" />
              </div>
              <div className="input">
                <p className="text">Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your New Password' autoComplete='off' className="fill" />
              </div>
              <div className="button" onClick={updateProfile}>
                <p className="text">Update Profile Account</p>
              </div>
            </form>
          </div>
          <div className="right">
            <UserCircleIcon className='profileImage' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsScreen
