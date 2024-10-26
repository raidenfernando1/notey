import './app.css';
import Notey from './notey';
import HomePage from './home-page';
import AboutPage from './about-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/notey" element={<Notey />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
