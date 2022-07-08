import { useAuthContext } from '../../hooks/useAuthContext'

import { TransactionForm } from './TransactionForm'

import HomeStyles from './Home.module.css'

export const Home = () => {
  const { user } = useAuthContext()

  return (
    <div className={HomeStyles.container}>
      <div className={HomeStyles.content}>
        transaction list
      </div>
      <div className={HomeStyles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
