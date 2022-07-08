import { useState, useEffect } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export const TransactionForm = (props) => {
  const { uid } = props

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, /* deleteDocument, */ response } = useFirestore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid,
      name,
      amount
    })
  }

  //* reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            onChange={(e) => setAmount(e.target.value)}
            required
            type="number"
            value={amount}
          />
        </label>
        <button>Add transaction</button>
      </form>
    </>
  )
}
