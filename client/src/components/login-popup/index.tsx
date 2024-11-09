import { useState } from 'react';
import styles from './styles.module.css';
import InputField from '../input-fields';

interface LoginPopupProps {
  popupState: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ popupState }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Login successful!');
      } else {
        alert('Invalid creds!');
      }
    } catch (error) {
      alert('Catch: ' + error);
    }
  };

  const Login = () => {
    return (
      <>
        <form onSubmit={handleLogin}>
          <div className={styles.topDetails}>
            <h1>Log in</h1>
            <button onClick={popupState}>X</button>
          </div>
          <InputField
            inputType="email"
            inputValue={username}
            inputOnChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            hasLabel={false}
            hasAutoComplete="on"
            placeholder="Email"
          />
          <InputField
            inputType="text"
            inputValue={password}
            inputOnChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
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
