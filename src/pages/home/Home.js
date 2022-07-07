import { TransactionForm } from './TransactionForm'

import HomeStyles from './Home.module.css'

export const Home = () => {
  return (
    <div className={HomeStyles.container}>
      <div className={HomeStyles.content}>
        transaction list
      </div>
      <div className={HomeStyles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}
