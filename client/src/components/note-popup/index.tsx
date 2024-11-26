import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../context/dataContext';
import { useAuthContext } from '../../context/authentication/authContext'; // import the Auth context
import { noteTypes } from '../../types/types';
import styles from './style.module.css';
import Button from '../button';
import InputField from '../input-fields';

type propTypes = {
  togglePopup: () => void;
  popupState: boolean;
};

const CreateNote = ({ togglePopup }: propTypes) => {
  const [noteTitle, setNoteTitle] = useState<string>('');
  const { addNote } = useDataContext();
  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user.id);
    console.log(typeof user.id);
  }, [user]);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error('User is not logged in!');
      return;
    }

    const createdNote: noteTypes = {
      title: noteTitle,
      contents: '',
      user_id: user.id,
    };

    addNote(createdNote);
    setNoteTitle('');
    togglePopup();
  };

  // focuses input on mount
  useEffect(() => {
    const inputField = document.getElementById('popup');
    if (inputField) {
      inputField.focus();
    }
  }, []);

  return (
    <div className={styles.layout}>
      <form className={styles.popup} onSubmit={handleCreateNote}>
        <div className={styles.topSection}>
          <p>Create note</p>
          <Button variant="text" btnType="button" btnOnClick={togglePopup}>
            X
          </Button>
        </div>

        <div className={styles.inputContainer}>
          <InputField
            inputType="text"
            inputLabel="popup"
            inputValue={noteTitle}
            inputOnChange={(e) => setNoteTitle(e.target.value)}
            isRequired={true}
            hasLabel={true}
            hasAutoComplete="off"
            placeholder="Enter note title"
            className={styles.createNote}
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
