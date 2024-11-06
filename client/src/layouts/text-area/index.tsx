import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { useDataContext } from '../../context/dataContext';

const NoteEdit = () => {
  const { modifyNoteContent, selectedNote } = useDataContext();
  const [noteContents, setNoteContents] = useState('');
  const currentContentsRef = useRef('');

  useEffect(() => {
    setNoteContents(selectedNote?.content || '');
  }, [selectedNote]);

  useEffect(() => {
    currentContentsRef.current = noteContents;
  }, [noteContents]);

  useEffect(() => {
    return () => {
      modifyNoteContent(currentContentsRef.current);
    };
  }, [modifyNoteContent]);

  return (
    <div className={styles.layout}>
      {selectedNote ? (
        <textarea
          className={styles.EditField}
          value={noteContents}
          spellCheck="false"
          onChange={(e) => {
            setNoteContents(e.target.value);
          }}
        />
      ) : (
        <textarea
          disabled
          className={styles.disabledTextField}
          value="No notes selected"
        />
      )}
    </div>
  );
};

export default NoteEdit;
