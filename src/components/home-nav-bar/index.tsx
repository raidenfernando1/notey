import { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import LoginPopup from '../login-popup';

const NavBar = () => {
  const [loginPopupState, setLoginPopupState] = useState<boolean>(false);

  const togglePopup = () => {
    setLoginPopupState((prev) => !prev);
  };

  return (
    <>
      {loginPopupState ? <LoginPopup popupState={togglePopup} /> : ''}
      <nav className={styles.layout}>
        <div className={styles.navWrapper}>
          <h1>Notey</h1>
          <ul>
            <li>
              <button onClick={togglePopup}>Login / Signup</button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
