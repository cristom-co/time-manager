// src/components/presentational/UserList.tsx
import React, { useState } from 'react';
import { User } from '../../types';

interface UserListProps {
    users: User[];
    onFilterChange: (filter: string, filterBy: string[]) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onFilterChange }) => {
    const [filter, setFilter] = useState('');
    const [filterBy, setFilterBy] = useState<string[]>(['name', 'phone', 'email']);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilter(value);
        onFilterChange(value, filterBy);
    };

    const toggleFilterBy = (field: string) => {
        const newFilterBy = filterBy.includes(field)
            ? filterBy.filter((f) => f !== field)
            : [...filterBy, field];
        setFilterBy(newFilterBy);
        onFilterChange(filter, newFilterBy);
    };

    const filteredUsers = users.filter((user) => {
        return filterBy.some((field) => {
            switch (field) {
                case 'name':
                    return user.name.toLowerCase().includes(filter.toLowerCase());
                case 'phone':
                    return user.phone.includes(filter);
                case 'email':
                    return user.email.toLowerCase().includes(filter.toLowerCase());
                default:
                    return false;
            }
        });
    });

    return (
        <div className='p-4'>
            <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                    {['name', 'phone', 'email'].map((field) => (
                        <button
                            key={field}
                            onClick={() => toggleFilterBy(field)}
                            className={`px-3 py-1 rounded-full text-sm ${filterBy.includes(field)
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {field === 'name' && 'Nombre'}
                            {field === 'phone' && 'Teléfono'}
                            {field === 'email' && 'Correo'}
                        </button>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Filtrar..."
                    value={filter}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="p-2 border">Nombre</th>
                            <th className="p-2 border">Teléfono</th>
                            <th className="p-2 border">Correo</th>
                            <th className="p-2 border">Dirección</th>
                            <th className="p-2 border">Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="p-2 border">{user.name}</td>
                                <td className="p-2 border">{user.phone}</td>
                                <td className="p-2 border">{user.email}</td>
                                <td className="p-2 border">{user.address}</td>
                                <td className="p-2 border">
                                    <div
                                        className="w-6 h-6 rounded-full"
                                        style={{ backgroundColor: user.color }}
                                    ></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;