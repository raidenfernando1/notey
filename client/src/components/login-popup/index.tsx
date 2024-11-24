import InputField from '../input-fields';
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
      <h1>Login</h1>
      <form>
        <InputField
          inputID="usernameID"
          labelContents="Username"
          inputType="text"
          inputValue={username}
          inputOnChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
          placeholder="Username"
          hasLabel={true}
          isRequired={true}
        />
        <InputField
          inputID="passwordID"
          labelContents="Password"
          inputType="password"
          inputValue={password}
          inputOnChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          placeholder="Password"
          isRequired={true}
          hasLabel={true}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <h1>Signup</h1>
      <form>
        <InputField
          inputID="usernameID"
          labelContents="Username"
          inputType="text"
          inputValue={username}
          inputOnChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
          placeholder="Username"
          hasLabel={true}
          isRequired={true}
        />
        <InputField
          inputID="passwordID"
          labelContents="Password"
          inputType="password"
          inputValue={password}
          inputOnChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          placeholder="Password"
          isRequired={true}
          hasLabel={true}
        />
        <InputField
          inputID="confirmPasswordID"
          labelContents="Confirm Password"
          inputType="password"
          inputValue={confirmPassword}
          inputOnChange={(e) => {
            e.preventDefault();
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm Password"
          isRequired={true}
          hasLabel={true}
        />
        <button>Signup</button>
      </form>
    </>
  );
};

export const LoginPopup = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popupLayout}>
          {toggleLogin ? <Login></Login> : <Signup></Signup>}
        </div>
        <button onClick={() => setToggleLogin(!toggleLogin)}>
          Already have an account?{' '}
        </button>
      </div>
    </>
  );
};

export default LoginPopup;
