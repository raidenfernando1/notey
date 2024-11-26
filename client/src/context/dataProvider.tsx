import React, { useState, ReactNode, FC, useCallback } from 'react';
import { noteTypes } from '../types/types';
import { Context } from './dataContext';
import { supabase } from '../supabase';

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dataList, setDataList] = useState<noteTypes[]>([]);
  const [selectedNote, setSelectedNote] = useState<noteTypes | undefined>(
    undefined
  );

  const [isToggle, setIsToggle] = useState<boolean>(false);

  const togglePopup = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ): void => {
    setter((prev: boolean) => !prev);
  };

  const addNote = async (params: noteTypes) => {
    try {
      const { data, error } = await supabase
        .from('userNotes')
        .insert([params])
        .select();

      if (error) {
        console.error('Detailed Supabase Error:', {
          message: error.message,
          code: error.code,
          details: error.details,
        });
      } else {
        console.log('Successful insertion:', data);
      }
    } catch (err) {
      console.error('Insertion catch block:', err);
    }
  };

  const deleteNote = (noteID: string) => {
    setDataList((prev) => {
      const modifiedList = prev.filter((note) => note.id !== noteID);
      return modifiedList;
    });
  };

  const selectNote = (selectNoteID: string) => {
    if (selectedNote?.id === selectNoteID) {
      setSelectedNote(undefined);
    } else {
      setSelectedNote(dataList.find((note) => note.id === selectNoteID));
    }
  };

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
