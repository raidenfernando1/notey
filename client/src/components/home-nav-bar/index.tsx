import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import LoginPopup from '../login-popup';

const NavBar = () => {
  const [loginPopupState, setLoginPopupState] = useState<boolean>(false);
  const [responsiveNavState, setResponsiveNavState] = useState<boolean>(false);

  const togglePopup = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev: boolean) => !prev);
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
      {loginPopupState ? (
        <LoginPopup popupState={() => togglePopup(setLoginPopupState)} />
      ) : (
        ''
      )}
      <nav className={styles.layout}>
        <div className={styles.navWrapper}>
          <Link to="/">Notey</Link>
          <ul className={styles.navContents}>
            <li>
              <button onClick={() => togglePopup(setLoginPopupState)}>
                Login / Signup
              </button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button
            className={styles.hiddenMenu}
            onClick={() => togglePopup(setResponsiveNavState)}
          >
            <img src="/menu.svg" alt="menu" />
          </button>
          {responsiveNavState ? <ResponsiveNav /> : ''}
        </div>
      </nav>
    </>
  );
};

export default NavBar;