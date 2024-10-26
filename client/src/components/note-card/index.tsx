import style from './style.module.css';
import dotIcon from '../../assets/dots.svg';
import { useDataContext } from '../../context/dataContext';

type NoteCardProps = {
  title: string;
  noteID: string;
};

const NoteCard = ({ title, noteID }: NoteCardProps) => {
  const { deleteNote } = useDataContext();
  return (
    <div className={style.note}>
      <p>{title}</p>
      <button onClick={() => deleteNote(noteID)}>
        <img src={dotIcon} />
      </button>
    </div>
  );
};

export default NoteCard;
