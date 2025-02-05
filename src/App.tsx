// src/App.tsx
import React from 'react';
import UserContainer from './components/containers/UserContainer';
import TimeBlockContainer from './components/containers/TimeBlockContainer';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Sistema de Agendamiento</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <UserContainer />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <TimeBlockContainer />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;