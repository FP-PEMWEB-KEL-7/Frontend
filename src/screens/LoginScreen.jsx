import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    (email && password.length >= 8) && console.log(`${email} ${password}`)
  }

  return (
    <div className="login">
      <Navbar 
        loginScreen={true}
      />
      <div className="container">
        <p className="title">Welcome Back</p>
        <form className="form">
          <div className="input">
            <p className="text">Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' autoComplete='off' className="fill" />
          </div>
          <div className="input">
            <p className="text">Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' autoComplete='off' className="fill" />
          </div>
        </form>
        <div className="button" onClick={login}>
          <Link to="/" className='text'>Login</Link>
        </div>
        <div className="signUp">
          <p className="left">Don't have account ?</p>
          <Link to='signup' className="right">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
