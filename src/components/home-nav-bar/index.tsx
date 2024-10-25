import styles from './styles.module.css';

const NavBar = () => {
  return (
    <nav className={styles.layout}>
      <div className={styles.navWrapper}>
        <h1>Notey</h1>
        <ul>
          <li>
            <a>Login / Signup</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
