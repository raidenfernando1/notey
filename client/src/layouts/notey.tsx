import NavBar from '../components/nav-bar';
import NoteEdit from './text-area';
import { DataProvider } from '../context/dataProvider';
import LeftPanel from './left-panel';

const Notey = () => {
  return (
    <DataProvider>
      <LeftPanel></LeftPanel>
      <div className="textLayout">
        <NavBar></NavBar>
        <NoteEdit></NoteEdit>
      </div>
    </DataProvider>
  );
};

export default Notey;
