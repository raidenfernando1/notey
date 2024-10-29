import styles from './styles.module.css';
import NavBar from '../../components/home-nav-bar';
import Button from '../../components/button';

const HomePage = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <section className={styles.homeContents}>
        <h2>Notey</h2>
        <p>
          A note management app i built because i was bored, signup now i
          promise not to look at your notes on the database :) this project is
          also open sourced.
        </p>
        <div className={styles.btnWrapper}>
          <Button btnType="button" variant="primary">
            Github
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
