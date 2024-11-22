import style from './style.module.css';
import dotIcon from '../../assets/dots.svg';
import Button from '../button';
import ModifyNotePopup from '../modify-note-popup';
import { useState } from 'react';
import { useDataContext } from '../../context/dataContext';

type NoteCardProps = {
  title: string;
  noteID: string;
};

const NoteCard = ({ title, noteID }: NoteCardProps) => {
  const [modifyNoteState, setModifyNoteState] = useState(false);
  const { togglePopup } = useDataContext();

  return (
    <>
      <div className={style.note}>
        <p>{title}</p>
        <Button
          btnType="button"
          variant="text"
          btnOnClick={() => togglePopup(setModifyNoteState)}
        >
          <img src={dotIcon} />
        </Button>
      </div>
      {modifyNoteState ? <ModifyNotePopup value={setModifyNoteState} /> : ''}
    </>
  );
};
export default NoteCard;
