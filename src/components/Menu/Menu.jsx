import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div id={styles.menu}>
      <ul>
        <li>Boards</li>
        <li>Templates</li>
        <li>Home</li>

      </ul>
    </div>
  )
}

export default Menu