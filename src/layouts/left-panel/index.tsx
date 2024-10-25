import { ReactNode, useState } from 'react';
import { useDataContext } from '../../context/dataContext';
import style from './style.module.css';
import NoteCard from '../../components/note-card';
import CreateNote from '../../components/note-popup';

interface NoteContainerProps {
  children: ReactNode;
}

export const NotesContainer = ({ children }: NoteContainerProps) => {
  return (
    <section className={style.noteContainer}>
      <h1>Notes</h1>
      <ul>{children}</ul>
    </section>
  );
};

export const LeftPanel = () => {
  const [popupState, setPopupState] = useState<boolean>(false);
  const { dataList, isToggle, setIsToggle, togglePopup, selectNote } =
    useDataContext();

  const TopBar = () => {
    return (
      <div className={style.topBar}>
        <button onClick={() => togglePopup(setIsToggle)}>&lt;-</button>
        <button onClick={() => togglePopup(setPopupState)}>+</button>
      </div>
    );
  };

  return (
    <>
      {popupState && (
        <CreateNote
          togglePopup={() => togglePopup(setPopupState)}
          popupState={popupState}
        />
      )}

      <div>
        <div className={`${style.layout} ${isToggle ? style.active : ''}`}>
          <TopBar />
          <NotesContainer>
            {dataList.map((data: any) => (
              <li
                key={data.id}
                onClick={() => {
                  selectNote(data.id);
                }}
              >
                <NoteCard title={data.title} noteID={data.id} />
              </li>
            ))}
          </NotesContainer>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
