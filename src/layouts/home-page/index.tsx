import styles from './styles.module.css';
import NavBar from '../../components/home-nav-bar';

const HomePage = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <section className={styles.homeContents}>
        <div className={styles.homeContentsWrapper}>
          <h1>Notey</h1>
          <p>
            A note management app i built because i was bored, signup now i
            promise not to look at your notes on the database :) this project is
            also open sourced.
          </p>
        </div>
        <div className={styles.btnWrapper}>
          <button>Github code</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;