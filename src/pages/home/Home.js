import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { TransactionForm } from './TransactionForm'
import { TransactionList } from './TransactionList'

import HomeStyles from './Home.module.css'

export const Home = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions')

  return (
    <div className={HomeStyles.container}>
      <div className={HomeStyles.content}>
        { error && <p>{error}</p> }
        { documents && <TransactionList transactions={documents} /> }
      </div>
      <div className={HomeStyles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
