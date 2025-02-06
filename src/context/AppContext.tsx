// src/context/AppContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { User, TimeBlock } from '../types';

interface AppContextType {
    users: User[];
    timeBlocks: TimeBlock[];
    addUser: (user: Omit<User, 'id' | 'color'>) => void;
    addTimeBlock: (timeBlock: { userId: string; startHour: number; startMinute: number; endHour: number; endMinute: number }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Función para generar un color hexadecimal aleatorio
const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([{
        address: "test",
        color: "#4d609e",
        email: "test@gmail.com",
        id: "1738871039116",
        name: "test",
        phone: "test"
    }]);

    const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);

    const addUser = (newUser: Omit<User, 'id' | 'color'>) => {
        const userWithId: User = {
            ...newUser,
            id: String(Date.now()),
            color: generateRandomColor(), // Asignar un color aleatorio
        };
        setUsers([...users, userWithId]); // Actualizar el estado de los usuarios
    };

    const addTimeBlock = (newTimeBlock: { userId: string; startHour: number; startMinute: number; endHour: number; endMinute: number }) => {
        const timeBlockWithId: TimeBlock = {
            ...newTimeBlock,
            id: String(Date.now()),
        };
        setTimeBlocks([...timeBlocks, timeBlockWithId]);
    };

    return (
        <AppContext.Provider value={{ users, timeBlocks, addUser, addTimeBlock }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext debe usarse dentro de un AppProvider');
    }
    return context;
};