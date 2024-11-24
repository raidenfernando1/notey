import styles from './styles.module.css';
import { useState } from 'react';

// TODO: complete components
// TODO: toggle them outside of scope
// TODO: encapsulate all api and requests to the auth context
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className={styles.popupLayout}>
        <form>
          <input
            value={username}
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <div className={styles.popupLayout}>
        <form>
          <input
            value={username}
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              e.preventDefault();
              setConfirmPassword(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export const LoginPopup = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <>
      <div className={styles.popup}>
        <div>{toggleLogin ? <Login></Login> : <Signup></Signup>}</div>
        <button onClick={() => setToggleLogin(!toggleLogin)}>Toggle</button>
      </div>
    </>
  );
};

export default LoginPopup;
