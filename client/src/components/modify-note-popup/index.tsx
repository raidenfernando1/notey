import styles from './styles.module.css';
import { useDataContext } from '../../context/dataContext';

const ModifyNotePopup = ({ setModifyNoteState }) => {
  const { togglePopup } = useDataContext();

  return (
    <div className={styles.layout}>
      <div className={styles.popup}>
        <h1>1</h1>
        <button onClick={togglePopup(setModifyNoteState)}>X</button>
      </div>
    </div>
  );
};

export default ModifyNotePopup;
