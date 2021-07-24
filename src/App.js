import React from 'react';
import { AuthProvider } from "./providers/auth";
import Routes from './router/AppRouter';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
