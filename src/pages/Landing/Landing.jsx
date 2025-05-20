import Menu from '../../components/Menu/Menu'
import BoardList from '../../components/BoardList/BoardList'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div id={styles.landing_container}>
        <Menu />
        <BoardList />
      </div>
    </main>
  )
}

export default Landing
