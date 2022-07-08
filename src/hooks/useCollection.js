import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //! if we don't use a ref -> inifite loop in useEffect
  //! _query is an array and is "differet" on every function call
  const query = useRef(_query).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }

    const unsub = ref.onSnapshot((snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })
      })

      //*update state
      setDocuments(results)
      setError(null)
    }, (error) => {
      console.error('An error ocurred: ', error);
      setError('Could not fetch the data')
    })

    //* unsubscribe on unmount
    return () => unsub()

  }, [collection, query])

  return {
    error,
    documents,
  }

}