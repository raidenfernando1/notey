import style from './style.module.css';
import dotIcon from '../../assets/dots.svg';
import Button from '../button';
import { useDataContext } from '../../context/dataContext';

type NoteCardProps = {
  title: string;
};

const NoteCard = ({ title }: NoteCardProps) => {
  const { deleteNote } = useDataContext();

  return (
    <>
      <div className={style.note}>
        <p>{title}</p>
        <Button btnType="button" variant="text">
          <img
            src={dotIcon}
            onClick={() => {
              deleteNote(title), console.log('test');
            }}
          />
        </Button>
      </div>
    </>
  );
};
export default NoteCard;
