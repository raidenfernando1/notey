import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './app.css';
import { Link } from 'react-router-dom';
import Notey from './notey';
import HomePage from './home-page';
import AboutPage from './about-page';
import ErrorPage from './error-page';
import { useAuthContext } from '../context/authentication/authContext';

function App() {
  const { user } = useAuthContext();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (user?.id && !hasRedirected) {
      setHasRedirected(true);
    }
  }, [user, hasRedirected]);

  const Redirect = () => {
    return hasRedirected ? <Navigate to="/notey" /> : <HomePage />;
  };

  const UnAuth = () => {
    return (
      <>
        <p>
          Hmmmm maybe you should login first. <Link to="/">go home?</Link>
        </p>
      </>
    );
  };

  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notey" element={user ? <Notey /> : <UnAuth />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
