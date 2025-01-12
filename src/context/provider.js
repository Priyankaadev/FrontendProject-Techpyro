'use client';


import { AuthProvider } from './authContext';

export function Providers({ children }) {
  return (
    <AuthProvider>
    {children}
    </AuthProvider>
  );
}