// src/components/containers/UserContainer.tsx
import React, { useState } from 'react';
import UserList from '../presentational/UserList';
import { useAppContext } from '../../context/AppContext';

const UserListContainer: React.FC = () => {
    const { users } = useAppContext();
    const [filter, setFilter] = useState('');
    const [filterBy, setFilterBy] = useState<string[]>(['name', 'phone', 'email']);

    const handleFilterChange = (filter: string, filterBy: string[]) => {
        setFilter(filter);
        setFilterBy(filterBy);
    };

    return (
        <div>
            <UserList users={users} onFilterChange={handleFilterChange} />
        </div>
    );
};

export default UserListContainer;