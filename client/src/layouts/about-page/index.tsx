import NavBar from '../../components/home-nav-bar';
import styles from './styles.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutLayout}>
      <NavBar />
      <div className={styles.aboutContents}>
        <h2>About the website</h2>
        <p>
          This is a just a hobby project of mine, I used to use discord to store
          learning notes and stuff like that through discord channels and it was
          very unintuitive and inefficient so i scoured the internet to find a
          solution but couldnt find one that is just simple and easy to use so i
          built notey, it is nothing but simply a note taking app that i built
          for me but i made it free to use and available for everyone everything
          is encrypted so your data is protected. But please do avoid putting
          sensitive information in my website.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
