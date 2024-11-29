import React, { useState, ReactNode, FC, useCallback, useEffect } from 'react';
import { noteTypes } from '../types/types';
import { Context } from './dataContext';
import { supabase } from '../supabase';
import { useAuthContext } from './authentication/authContext';

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dataList, setDataList] = useState<noteTypes[]>([]);
  const [selectedNote, setSelectedNote] = useState<noteTypes | undefined>(
    undefined
  );
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const { user } = useAuthContext();

  useEffect(() => {
    console.log(dataList);
    console.log(selectedNote?.contents);
  }, [selectedNote]);

  // fetches notes on mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const togglePopup = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ): void => {
    setter((prev: boolean) => !prev);
  };

  const fetchNotes = async () => {
    const { data: userNotes, error } = await supabase
      .from('userNotes')
      .select('*')
      .eq('user_id', user?.id);

    if (error) {
      console.error('Error fetching notes:', error.message);
      setDataList([]);
      return;
    }

    setDataList(userNotes ?? []);
  };

  const addNote = async (params: noteTypes) => {
    try {
      const { error } = await supabase
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
        await fetchNotes();
      }
    } catch (err) {
      console.error('Insertion catch block:', err);
    }
  };

  const selectNote = (noteTitle: string) => {
    if (selectedNote?.title === noteTitle) {
      setSelectedNote(undefined);
    }
    setSelectedNote(dataList.find((note) => note.title === noteTitle));
  };

  const modifyNoteContent = useCallback(
    async (contents: string) => {
      if (!selectedNote) return;

      setDataList((prev) =>
        prev.map((note) =>
          note.title === selectedNote.title ? { ...note, contents } : note
        )
      );
      await updateNotes(selectedNote.title, contents);
    },
    [selectedNote]
  );

  const updateNotes = async (title: string, contents: string) => {
    if (!user?.id || !title) {
      console.error('Missing user ID or note title.');
      return;
    }

    const { error } = await supabase
      .from('userNotes')
      .update({ contents })
      .eq('title', title)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error updating note:', error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        dataList,
        fetchNotes,
        addNote,
        modifyNoteContent,
        selectNote,
        isToggle,
        setIsToggle,
        togglePopup,
        selectedNote,
      }}
    >
      {children}
    </Context.Provider>
  );
};
