import React, { createContext, useContext } from 'react';

type authType = {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<authType | null>(null);

export const useAuthContext = () => {
  const context = useContext<authType | null>(Context);
  if (!context) {
    throw new Error('Auth Unknown error');
  }
  return context;
};
