import { useState } from 'react'

import LoginStyles from './Login.module.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={LoginStyles['login-form']}
    >
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          autoComplete="current-email"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          autoComplete="current-password"
        />
      </label>
      <button className='btn'>Login!</button>
    </form>
  )
}
