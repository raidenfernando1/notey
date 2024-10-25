import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { useDataContext } from '../../context/dataContext';

const NoteEdit = () => {
  const { modifyNoteContent, selectedNote } = useDataContext();
  const [noteContents, setNoteContents] = useState('');
  const currentContentsRef = useRef('');

  // mounts selectedNote's content on mount or when it changes
  useEffect(() => {
    setNoteContents(selectedNote?.content || '');
  }, [selectedNote]);

  // caches the current state of noteContents when it chanes
  useEffect(() => {
    currentContentsRef.current = noteContents;
  }, [noteContents]);

  // listens for modifyNoteContent changes and on unmount it stores the cached content to modifyNoteContent
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
