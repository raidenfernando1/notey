import style from './style.module.css';
import dotIcon from '../../assets/dots.svg';
import Button from '../button';

type NoteCardProps = {
  title: string;
};

const NoteCard = ({ title }: NoteCardProps) => {
  return (
    <>
      <div className={style.note}>
        <p>{title}</p>
        <Button btnType="button" variant="text">
          <img src={dotIcon} />
        </Button>
      </div>
    </>
  );
};
export default NoteCard;
