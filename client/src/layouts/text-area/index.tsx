import { useEffect, useState, useRef } from 'react';
import styles from './style.module.css';
import { useDataContext } from '../../context/dataContext';

const NoteEdit = () => {
  const { selectedNote, modifyNoteContent } = useDataContext();
  const [noteContents, setNoteContents] = useState('');
  const noteContentsRef = useRef('');

  useEffect(() => {
    setNoteContents(selectedNote?.contents || '');
  }, [selectedNote]);

  useEffect(() => {
    noteContentsRef.current = noteContents;
  }, [noteContents]);

  useEffect(() => {
    return () => {
      modifyNoteContent(noteContentsRef.current);
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
