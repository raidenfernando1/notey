import './app.css';
import { DataProvider } from '../context/data-context';
import LeftPanel from './left-panel';
import NavBar from '../components/nav-bar';
import NoteEdit from './text-area';

function App() {
  return (
    <>
      <main>
        <DataProvider>
          <LeftPanel />
          <div className="appLayout">
            <NavBar />
            <NoteEdit />
          </div>
        </DataProvider>
      </main>
    </>
  );
}

export default App;
