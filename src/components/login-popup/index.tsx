import { useState } from 'react';
import styles from './styles.module.css';

const LoginPopup = ({ popupState }: any) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const Login = () => {
    return (
      <>
        <form>
          <div className={styles.topDetails}>
            <h1>Log in</h1>
            <button onClick={popupState}>X</button>
          </div>
          <label>Email</label>
          <input type="text" id={styles.emailInput} />
          <label>Password</label>
          <input type="password" id={styles.loginInput} />
          <button>Login</button>
        </form>
        <button onClick={toggleLogin}>have no account? sign up!</button>
      </>
    );
  };

  const Signup = () => {
    return (
      <>
        <form>
          <div className={styles.topDetails}>
            <h1>Sign up</h1>
            <button onClick={popupState}>X</button>
          </div>
          <label>Email</label>
          <input type="text" id={styles.emailInput} />
          <label>Password</label>
          <input type="password" id={styles.loginInput} />
          <label>Repeat Password</label>
          <input type="password" id={styles.loginInput} />
          <button>Sign up</button>
        </form>
        <button onClick={toggleLogin}>already have an account? login</button>
      </>
    );
  };

  return (
    <div className={styles.loginPopup}>
      <div className={styles.loginWrapper}>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default LoginPopup;
