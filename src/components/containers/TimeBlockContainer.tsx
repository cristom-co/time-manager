// src/components/containers/TimeBlockContainer.tsx
import React from 'react';
import TimeBlockForm from '../presentational/TimeBlockForm';
import TimeBlockBar from '../presentational/TimeBlockBar';
import { useAppContext } from '../../context/AppContext';

const TimeBlockContainer: React.FC = () => {
    const { users, timeBlocks, addTimeBlock } = useAppContext();

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Bloques de Tiempo</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <TimeBlockForm users={users} onSave={addTimeBlock} />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <TimeBlockBar timeBlocks={timeBlocks} />
                </div>
            </div>
        </div>
    );
};

export default TimeBlockContainer;