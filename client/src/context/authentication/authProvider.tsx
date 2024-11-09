import { ReactNode, useState, FC } from 'react';
import { Context } from './authContext';

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const setAuth = () => {
    setIsAuth(true);
  };

  return (
    <Context.Provider value={{ isAuth, setAuth }}>{children}</Context.Provider>
  );
};
