import style from './style.module.css';
import dotIcon from '../../assets/dots.svg';
import { useDataContext } from '../../context/dataContext';
import Button from '../button';

type NoteCardProps = {
  title: string;
  noteID: string;
};

const NoteCard = ({ title, noteID }: NoteCardProps) => {
  const { deleteNote } = useDataContext();
  return (
    <div className={style.note}>
      <p>{title}</p>
      <Button
        btnType="button"
        variant="text"
        btnOnClick={() => deleteNote(noteID)}
      >
        <img src={dotIcon} />
      </Button>
    </div>
  );
};

export default NoteCard;
