import './app.css';
import { DataProvider } from '../context/dataProvider';
import LeftPanel from './left-panel';
import NavBar from '../components/nav-bar';
import NoteEdit from './text-area';
import HomePage from './home-page';
import AboutPage from './about-page';
import { useDataContext } from '../context/dataContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const Notey = () => {
    const { isUserAuthenticated } = useDataContext();

    return (
      <>
        <LeftPanel />
        <div className="textLayout">
          <NavBar />
          <NoteEdit />
        </div>
      </>
    );
  };

  return (
    <>
      <DataProvider>
        <main className="app">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/notey" element={<Notey />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
          </Router>
        </main>
      </DataProvider>
    </>
  );
}

export default App;
