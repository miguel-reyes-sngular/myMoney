import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //! if we don't use a ref -> inifite loop in useEffect
  //! _query is an array and is "differet" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy)
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

  }, [collection, query, orderBy])

  return {
    error,
    documents,
  }

}