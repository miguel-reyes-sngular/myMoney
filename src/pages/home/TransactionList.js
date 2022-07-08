import homeStyles from './Home.module.css'

export const TransactionList = props => {
  const { transactions } = props

  return (
    <ul className={homeStyles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={homeStyles.name}>
            {transaction.name}
          </p>
          <p className={homeStyles.amount}>
            ${transaction.amount}
          </p>
        </li>
      ))}
    </ul>
  )
}