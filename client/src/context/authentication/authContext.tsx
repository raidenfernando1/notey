import { createContext, useContext } from 'react';

interface AuthContextType {
  user: any | null;
  loading: boolean;
  error: any | null;
}

export const Context = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Auth context must be used within an AuthProvider');
  }
  return context;
};
