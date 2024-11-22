import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from '../button';
import LoginPopup from '../login-popup';

const NavBar = () => {
  const [responsiveNavState, setResponsiveNavState] = useState<boolean>(false);
  const [toggleLoginPopup, setToggleLoginPopup] = useState(false);

  const togglePopup = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev: boolean) => !prev);
  };

  const toggleLogin = () => {
    setToggleLoginPopup(!toggleLoginPopup);
  };

  const ResponsiveNav = () => {
    return (
      <div className={styles.responsiveNavLayout}>
        <button onClick={() => togglePopup(setResponsiveNavState)}>X</button>
        <nav>
          <ul>
            <li>
              <Link to="/">Login / Signup</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <>
      {toggleLoginPopup ? <LoginPopup></LoginPopup> : ''}
      <nav className={styles.layout}>
        <div className={styles.navWrapper}>
          <Link to="/">Notey</Link>
          <ul className={styles.navContents}>
            <li>
              <Button btnType="button" variant="text" btnOnClick={toggleLogin}>
                Login / Signup
              </Button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Button
            className={styles.hiddenMenu}
            btnType="button"
            variant="text"
            btnOnClick={() => togglePopup(setResponsiveNavState)}
          >
            <img src="/menu.svg" alt="menu" />
          </Button>
          {responsiveNavState ? <ResponsiveNav /> : ''}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
