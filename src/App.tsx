// src/App.tsx
import React from 'react';
import UserFormContainer from './components/containers/UserFormContainer';
import UserListContainer from './components/containers/UserListContainer';
import TimeBlockContainer from './components/containers/TimeBlockContainer';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 p-4 bg-gray-300 rounded-t-2xl">Sistema de Agendamiento</h1>
        <div className="grid grid-cols-[0fr_2fr_1fr] gap-4">
          <TimeBlockContainer viewType="bar" />
          <UserListContainer />
          <div className="grid grid-rows-2 gap-4">
            <UserFormContainer />
            <TimeBlockContainer viewType="form" />
          </div>
        </div>

      </div>
    </AppProvider>
  );
};

export default App;