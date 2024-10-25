import React, { createContext, useContext } from 'react';
import { noteTypes } from '../types/types';

type ContextType = {
  dataList: noteTypes[];
  addNote: (params: any) => void;
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  togglePopup: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  deleteNote: (NoteID: string) => void;
  selectNote: (params: string) => void;
  modifyNoteContent: (noteContents: string) => void;
  selectedNote: noteTypes | undefined;
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<ContextType | null>(null);
export const useDataContext = () => {
  const context = useContext<ContextType | null>(Context);
  if (!context) {
    throw new Error('Unknown Error!');
  }
  return context;
};
