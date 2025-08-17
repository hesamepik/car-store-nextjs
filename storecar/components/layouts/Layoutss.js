import styles from "./layout.module.css"
import Link from "next/link"

function Layoutss({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>car-store</h2>
          <p>choose your car</p>
        </Link>
      </header>

      <div className={styles.container}>
        {children}   {/* 👈 با حروف کوچیک */}
      </div>

      <footer className={styles.footer}>
        <a href="https://github.com/hesamepik" target="_blank">
          HesamEpik
        </a>
        HesamEpik project &copy;
      </footer>
    </>
  )
}

export default Layoutss
