import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <p>
            <span>React + TS Todo</span> @ 2021
        </p>
    </header>
  )
}

export default Header