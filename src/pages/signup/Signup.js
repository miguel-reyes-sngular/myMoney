import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import SignupStyles from './Signup.module.css'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={SignupStyles['signup-form']}
    >
      <h2>Signup</h2>
      <label>
        <span>Display name:</span>
        <input type="text"
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
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
      { !isPending && <button className='btn'>Signup!</button> }
      { isPending && <button className='btn' disabled>Loading...</button> }
      { error && <p>{error}</p> }
    </form>
  )
}
