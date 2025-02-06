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
    }]); const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);

    const addUser = (newUser: Omit<User, 'id' | 'color'>) => {
        const userWithId: User = {
            ...newUser,
            id: String(Date.now()),
            color: generateRandomColor(), // Asignar un color aleatorio
        };
        setUsers([...users, userWithId]);
    };

    const isTimeBlockOverlapping = (newTimeBlock: { startHour: number; startMinute: number; endHour: number; endMinute: number }) => {
        const newStart = newTimeBlock.startHour * 60 + newTimeBlock.startMinute; // Convertir a minutos
        const newEnd = newTimeBlock.endHour * 60 + newTimeBlock.endMinute; // Convertir a minutos

        return timeBlocks.some((block) => {
            const blockStart = block.startHour * 60 + block.startMinute; // Convertir a minutos
            const blockEnd = block.endHour * 60 + block.endMinute; // Convertir a minutos

            // Verificar si hay solapamiento
            return newStart < blockEnd && newEnd > blockStart;
        });
    };

    const addTimeBlock = (newTimeBlock: { userId: string; startHour: number; startMinute: number; endHour: number; endMinute: number }) => {
        // Validar que el bloque de tiempo no se solape con otros
        if (isTimeBlockOverlapping(newTimeBlock)) {
            alert('El bloque de tiempo se solapa con otro existente.');
            return;
        }

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