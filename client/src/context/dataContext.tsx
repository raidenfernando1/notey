import React, { createContext, useContext } from 'react';
import { noteTypes } from '../types/types';

type ContextType = {
  dataList: noteTypes[];
  fetchNotes: () => void;
  togglePopup: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  addNote: (params: noteTypes) => void;
  deleteNote: (params: string) => void;
  modifyNoteContent: (params: string) => void;
  selectNote: (params: string) => void;
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNote: noteTypes | undefined;
};

export const Context = createContext<ContextType | null>(null);
export const useDataContext = () => {
  const context = useContext<ContextType | null>(Context);
  if (!context) {
    throw new Error('Unknown Error!');
  }
  return context;
};
