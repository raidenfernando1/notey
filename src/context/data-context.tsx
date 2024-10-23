import React, {
  useState,
  createContext,
  ReactNode,
  FC,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import { noteTypes } from '../types/types';

/*
  FC = "function component automatically includes children"
  ReactNode = "Anything that react can render"
*/

export const Context = createContext<ContextType | null>(null);
export const useDataContext = () => {
  const context = useContext<ContextType | null>(Context);
  if (!context) {
    throw new Error('Unknown Error!');
  }
  return context;
};

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
};

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dataList, setDataList] = useState<noteTypes[]>([]);
  const [selectedNote, setSelectedNote] = useState<noteTypes | undefined>(
    undefined
  );
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const togglePopup = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>): void => {
      setter((prev: boolean) => !prev);
    },
    []
  );

  /*
    consider making a helper script for the return values of 
    this provider do it now to avoid unecessary refactors
  */

  useEffect(() => {
    console.log(selectedNote);
  }, [selectedNote]);

  const addNote = useCallback((params: noteTypes) => {
    setDataList((prev) => [...prev, params]);
  }, []);

  const deleteNote = useCallback((noteID: string) => {
    setDataList((prev) => {
      const modifiedList = prev.filter((note) => note.id !== noteID);
      return modifiedList;
    });
  }, []);

  const selectNote = (selectNoteID: string) => {
    if (selectNoteID === selectedNote?.id) {
      setSelectedNote(undefined);
    } else {
      setSelectedNote(dataList.find((notes) => notes.id === selectNoteID));
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
