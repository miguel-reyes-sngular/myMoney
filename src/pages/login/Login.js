import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import LoginStyles from './Login.module.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
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
      { !isPending && <button className='btn'>Login</button>}
      { isPending && <button className='btn' disabled>Loading</button> }
      { error && <p>{error}</p> }
    </form>
  )
}
