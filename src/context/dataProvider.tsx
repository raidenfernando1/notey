import React, { useState, ReactNode, FC, useCallback } from 'react';
import { noteTypes } from '../types/types';
import { Context } from './dataContext';

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dataList, setDataList] = useState<noteTypes[]>([]);
  const [selectedNote, setSelectedNote] = useState<noteTypes | undefined>(
    undefined
  );
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const togglePopup = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>): void => {
      setter((prev: boolean) => !prev);
    },
    []
  );

  const addNote = useCallback((params: noteTypes) => {
    setDataList((prev) => [...prev, params]);
  }, []);

  const deleteNote = useCallback((noteID: string) => {
    setDataList((prev) => {
      const modifiedList = prev.filter((note) => note.id !== noteID);
      return modifiedList;
    });
  }, []);

  const selectNote = useCallback(
    (selectNoteID: string) => {
      selectedNote?.id === selectNoteID
        ? setSelectedNote(undefined)
        : setSelectedNote(dataList.find((notes) => notes.id === selectNoteID));
    },
    [dataList, selectedNote]
  );

  const modifyNoteContent = useCallback(
    (content: string) => {
      setDataList((prev) =>
        prev.map((note) =>
          note.id === selectedNote?.id ? { ...note, content } : note
        )
      );
    },
    [selectedNote]
  );

  return (
    <Context.Provider
      value={{
        dataList,
        addNote,
        isToggle,
        setIsToggle,
        togglePopup,
        selectNote,
        deleteNote,
        modifyNoteContent,
        selectedNote,
        isUserAuthenticated,
        setIsUserAuthenticated,
      }}
    >
      {children}
    </Context.Provider>
  );
};
