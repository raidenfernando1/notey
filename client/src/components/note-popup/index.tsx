import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../context/dataContext';
import { noteTypes } from '../../types/types';
import styles from './style.module.css';
import Button from '../button';
import { v4 as uuidv4 } from 'uuid';

type propTypes = {
  togglePopup: () => void;
  popupState: boolean;
};

const CreateNote = ({ togglePopup }: propTypes) => {
  const [noteTitle, setNoteTitle] = useState<string>('');
  const { addNote } = useDataContext();

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Note created with title:', noteTitle);
    const createdNote: noteTypes = {
      id: uuidv4(),
      title: noteTitle,
      content: '',
    };
    addNote(createdNote);
    setNoteTitle('');
    togglePopup();
  };

  // focuses input on mount
  useEffect(() => {
    const inputField = document.getElementById('test');
    if (inputField) {
      inputField.focus();
    }
  }, []);

  return (
    <div className={styles.layout}>
      <form className={styles.popup} onSubmit={handleCreateNote}>
        <div className={styles.topSection}>
          <label htmlFor="test">Create note</label>
          <Button variant="text" btnType="button" btnOnClick={togglePopup}>
            X
          </Button>
        </div>

        <div className={styles.inputContainer}>
          <input
            id="test"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            required
            autoComplete="off"
            type="text"
            placeholder="Enter note title"
          />
          <Button variant="primary" btnType="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
