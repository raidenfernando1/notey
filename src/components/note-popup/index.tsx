import React, { useState } from "react";
import { useDataContext } from "../../context/data-context";
import { noteTypes } from "../../types/types";
import styles from "./style.module.css";

type propTypes = {
  togglePopup: () => void;
  popupState: boolean;
};

const CreateNote = ({ togglePopup }: propTypes) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const { addNote } = useDataContext();

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    const createdNote: noteTypes = {
      id: crypto.randomUUID(),
      title: noteTitle,
      content: "",
    };

    addNote(createdNote);
    setNoteTitle("");
    togglePopup();
  };

  return (
    <div className={styles.layout}>
      <form className={styles.popup} onSubmit={handleCreateNote}>
        <div className={styles.topSection}>
          <label htmlFor="test">Create note</label>
          <button type="button" onClick={togglePopup}>
            x
          </button>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
