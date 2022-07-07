import { useState } from "react"

export const TransactionForm = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name,
      amount
    })
  }

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
