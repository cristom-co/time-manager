// src/components/presentational/UserForm.tsx
import React, { useState } from 'react';

interface UserFormProps {
    onSave: (user: { name: string; phone: string; email: string; address: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSave }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ name, phone, email, address });
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 border rounded"
                required
            />
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 border rounded"
                required
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Guardar
            </button>
        </form>
    );
};

export default UserForm;