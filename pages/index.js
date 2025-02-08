import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Front-End Assignment</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/users">Users</Link></li>
          <li className={styles.navItem}><Link href="/products">Products</Link></li>
          <li className={styles.navItem}><Link href="/movies">Movies</Link></li>
        </ul>
      </nav>
    </div>
  );
}

