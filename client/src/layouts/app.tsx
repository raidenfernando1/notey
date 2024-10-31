import './app.css';
import Notey from './notey';
import HomePage from './home-page';
import AboutPage from './about-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './error-page';

function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/notey" element={<Notey />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
