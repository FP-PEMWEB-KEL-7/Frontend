import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = () => {
    (username && email && (password.length >= 8) && console.log(`${username} ${email} ${password}`))
  }

  return (
    <div className="signUp">
      <Navbar 
        loginScreen={true}
      />
      <div className="container">
        <p className="title">New In Here ?</p>
        <form className="form">
          <div className="input">
            <p className="text">Username</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Username' autoComplete='off' className="fill" />
          </div>
          <div className="input">
            <p className="text">Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' autoComplete='off' className="fill" />
          </div>
          <div className="input">
            <p className="text">Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' autoComplete='off' className="fill" />
          </div>
        </form>
        <div className="button" onClick={signup}>
          <p className="text">Sign Up</p>
        </div>
        <div className="signIn">
          <p className="left">Have an account ?</p>
          <p className="right">Login</p>
        </div>
      </div>
    </div>
  )
}

export default SignUpScreen
