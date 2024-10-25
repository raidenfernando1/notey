import './app.css';
import { DataProvider } from '../context/dataProvider';
import LeftPanel from './left-panel';
import NavBar from '../components/nav-bar';
import NoteEdit from './text-area';
import HomePage from './home-page';
import { useDataContext } from '../context/dataContext';

function App() {
  const AppContents = () => {
    const { isUserAuthenticated } = useDataContext();

    return (
      <>
        {!isUserAuthenticated ? (
          <HomePage />
        ) : (
          <>
            <LeftPanel />
            <div className="textLayout">
              <NavBar />
              <NoteEdit />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <DataProvider>
        <main className="app">
          <AppContents />
        </main>
      </DataProvider>
    </>
  );
}

export default App;
