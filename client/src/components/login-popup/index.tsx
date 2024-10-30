import { useState } from 'react';
import styles from './styles.module.css';
import InputField from '../input-fields';

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
          <InputField
            inputType="email"
            inputValue=""
            inputOnChange={(e) => {
              e.preventDefault();
            }}
            hasLabel={false}
            hasAutoComplete="on"
            placeholder="Email"
          />
          <InputField
            inputType="email"
            inputValue=""
            inputOnChange={(e) => {
              e.preventDefault();
            }}
            hasLabel={false}
            hasAutoComplete="on"
            placeholder="Password"
          />
          <button>Login</button> {/* use custom component */}
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
          <InputField
            inputType="email"
            inputValue=""
            inputOnChange={(e) => {
              e.preventDefault();
            }}
            hasLabel={false}
            hasAutoComplete="off"
            placeholder="Email"
          />
          <InputField
            inputType="password"
            inputValue=""
            inputOnChange={(e) => {
              e.preventDefault();
            }}
            hasLabel={false}
            hasAutoComplete="off"
            placeholder="Password"
          />
          <InputField
            inputType="password"
            inputValue=""
            inputOnChange={(e) => {
              e.preventDefault();
            }}
            hasLabel={false}
            hasAutoComplete="off"
            placeholder="Password"
          />
          <button>Sign up</button> {/* use custom component */}
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
