import { ReactNode, useState, useEffect, FC } from 'react';
import { Context } from './authContext'; // import the context
import { supabase } from '../../supabase';

type SupabaseUser = {
  id: string;
  email: string;
  role: string;
};

type SupabaseError = {
  message: string;
  code: string;
  details: string | null;
};
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<SupabaseError | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          setError(error);
        } else {
          setUser(data.session?.user || null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <Context.Provider value={{ user, loading, error }}>
      {children}
    </Context.Provider>
  );
};
