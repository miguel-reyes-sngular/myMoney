import { useState } from "react"
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    //* sign the user out
    try {
      await projectAuth.signOut()

      //* dispatch logout action
      dispatch({ type: 'LOGOUT' })

      setIsPending(false)
      setError(null)
    } catch (error) {
      console.error('An error occurred: ', error);
      setError(error.message)
      setIsPending(false)
    }
  }

  return {
    error,
    isPending,
    logout,
  }
}