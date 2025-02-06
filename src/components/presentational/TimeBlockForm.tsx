// src/components/presentational/TimeBlockForm.tsx
import React, { useState } from 'react';
import { User } from '../../types';

interface TimeBlockFormProps {
    users: User[];
    onSave: (timeBlock: { userId: string; startHour: number; startMinute: number; endHour: number; endMinute: number }) => void;
}

const TimeBlockForm: React.FC<TimeBlockFormProps> = ({ users, onSave }) => {
    const [userId, setUserId] = useState('');
    const [startHour, setStartHour] = useState(9); // Hora de inicio predeterminada: 9:00
    const [startMinute, setStartMinute] = useState(0);
    const [endHour, setEndHour] = useState(10); // Hora de fin predeterminada: 10:00
    const [endMinute, setEndMinute] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ userId, startHour, startMinute, endHour, endMinute });
        setUserId('');
        setStartHour(9);
        setStartMinute(0);
        setEndHour(10);
        setEndMinute(0);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
            <select
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="p-2 border rounded"
                required
            >
                <option value="">Seleccionar usuario</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            <div className="flex space-x-2">
                <select
                    value={startHour}
                    onChange={(e) => setStartHour(Number(e.target.value))}
                    className="p-2 border rounded"
                    required
                >
                    {Array.from({ length: 24 }).map((_, hour) => (
                        <option key={hour} value={hour}>
                            {hour.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
                <span>:</span>
                <select
                    value={startMinute}
                    onChange={(e) => setStartMinute(Number(e.target.value))}
                    className="p-2 border rounded"
                    required
                >
                    {Array.from({ length: 60 }).map((_, minute) => (
                        <option key={minute} value={minute}>
                            {minute.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex space-x-2">
                <select
                    value={endHour}
                    onChange={(e) => setEndHour(Number(e.target.value))}
                    className="p-2 border rounded"
                    required
                >
                    {Array.from({ length: 24 }).map((_, hour) => (
                        <option key={hour} value={hour}>
                            {hour.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
                <span>:</span>
                <select
                    value={endMinute}
                    onChange={(e) => setEndMinute(Number(e.target.value))}
                    className="p-2 border rounded"
                    required
                >
                    {Array.from({ length: 60 }).map((_, minute) => (
                        <option key={minute} value={minute}>
                            {minute.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Guardar
            </button>
        </form>
    );
};

export default TimeBlockForm;