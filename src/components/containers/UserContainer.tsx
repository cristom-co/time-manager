// src/components/containers/UserContainer.tsx
import React, { useState } from 'react';
import UserList from '../presentational/UserList';
import UserForm from '../presentational/UserForm';
import { useAppContext } from '../../context/AppContext';

const UserContainer: React.FC = () => {
    const { users, addUser } = useAppContext();
    const [filter, setFilter] = useState('');
    const [filterBy, setFilterBy] = useState<string[]>(['name', 'phone', 'email']);

    const handleFilterChange = (filter: string, filterBy: string[]) => {
        setFilter(filter);
        setFilterBy(filterBy);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Registro de Usuarios</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <UserForm onSave={addUser} />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <UserList users={users} onFilterChange={handleFilterChange} />
                </div>
            </div>
        </div>
    );
};

export default UserContainer;