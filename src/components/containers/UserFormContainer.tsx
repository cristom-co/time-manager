// src/components/containers/UserContainer.tsx
import React from 'react';
import UserForm from '../presentational/UserForm';
import { useAppContext } from '../../context/AppContext';

const UserFormContainer: React.FC = () => {
    const { addUser } = useAppContext();
    return (
        <div className='p-4'>
            <h2 className="text-xl font-semibold mb-4">Registro de Usuarios</h2>
            <UserForm onSave={addUser} />
        </div>
    );
};

export default UserFormContainer;