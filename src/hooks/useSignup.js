import { useState } from "react"
import { projectAuth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      //* signup user
      const response = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(response.user);

      if (!response) {
        throw new Error('Could not complete signup');
      }

      //* add display name to user
      await response.user.updateProfile({ displayName })

      setIsPending(false)
      setError(null)
    } catch (error) {
      console.error('There was an error: ', error);
      setError(error.message)
      setIsPending(false)
    }
  }

  return {
    error,
    isPending,
    signup,
  }

}