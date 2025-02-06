// src/components/containers/TimeBlockContainer.tsx
import React from 'react';
import TimeBlockForm from '../presentational/TimeBlockForm';
import TimeBlockBar from '../presentational/TimeBlockBar';
import { useAppContext } from '../../context/AppContext';

interface TimeBlockContainerProps {
    viewType: 'bar' | 'form';
}

const TimeBlockContainer: React.FC<TimeBlockContainerProps> = ({ viewType }) => {
    const { users, timeBlocks, addTimeBlock } = useAppContext();

    return (
        <>
            {viewType == "bar" && <TimeBlockBar timeBlocks={timeBlocks} />}
            {viewType == "form" && <div>
                <h2 className="text-xl font-semibold mb-4">Crear bloque de tiempo</h2>
                <TimeBlockForm users={users} onSave={addTimeBlock} />
            </div>
            }
        </>
    );
};

export default TimeBlockContainer;