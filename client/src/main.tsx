import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layouts/app.tsx';
import './index.css';
import { AuthProvider } from './context/authentication/authProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
