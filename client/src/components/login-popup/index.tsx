import InputField from '../input-fields';
import styles from './styles.module.css';
import React, { useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';

interface LoginPopupProps {
  closePopup: () => void;
}

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password,
      });

      if (error) {
        setError('Invalid credentials');
      } else {
        console.log('Authenticated: ' + data);
        navigate('/notey');
      }
    } catch (err) {
      console.log('error' + err);
    }
  };

  return (
    <>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>Invalid credentials</p>}
      <form onSubmit={handleLogin}>
        <InputField
          inputID="usernameID"
          labelContents="Username"
          inputType="text"
          inputValue={email}
          inputOnChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const createAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Passwords must be 8+ in characters');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('User created:', data);
      }
    } catch (err) {
      console.error('Error creating account:', err);
      setError('An unexpected error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <h1>Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={createAccount}>
        <InputField
          inputID="usernameID"
          labelContents="Username"
          inputType="text"
          inputValue={email}
          inputOnChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
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
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Signup'}
        </button>
      </form>
    </>
  );
};

export const LoginPopup = ({ closePopup }: LoginPopupProps) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.topPopup}>
          <button onClick={closePopup}>X</button>
          <div className={styles.popupLayout}>
            {toggleLogin ? <Login></Login> : <Signup></Signup>}
          </div>
        </div>
        <button onClick={() => setToggleLogin(!toggleLogin)}>
          Already have an account?{' '}
        </button>
      </div>
    </>
  );
};

export default LoginPopup;
