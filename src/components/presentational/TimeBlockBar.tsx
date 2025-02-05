// src/components/presentational/TimeBlockBar.tsx
import React from 'react';
import { TimeBlock } from '../../types';
import { useAppContext } from '../../context/AppContext';

interface TimeBlockBarProps {
    timeBlocks: TimeBlock[];
}

const TimeBlockBar: React.FC<TimeBlockBarProps> = ({ timeBlocks }) => {
    const { users } = useAppContext();
    const totalMinutes = 24 * 60; // Total de minutos en un día (24 horas)
    const barHeight = 720; // Altura total de la barra en píxeles (720px para 24 horas)

    // Función para convertir horas y minutos a posición vertical en la barra
    const getPosition = (hours: number, minutes: number): number => {
        return ((hours * 60 + minutes) / totalMinutes) * barHeight;
    };

    return (
        <div className="relative" style={{ height: `${barHeight}px`, width: '50px', backgroundColor: '#f3f4f6' }}>
            {timeBlocks.map((block) => {
                // Obtener el usuario asociado al bloque de tiempo
                const user = users.find((u) => u.id === block.userId);

                // Calcular la posición y altura del bloque de tiempo
                const startPosition = getPosition(block.startHour, block.startMinute);
                const endPosition = getPosition(block.endHour, block.endMinute);
                const blockHeight = endPosition - startPosition;

                // Usar el color del usuario para el bloque de tiempo
                const blockColor = user ? user.color : '#cccccc'; // Color por defecto si no se encuentra el usuario

                return (
                    <div
                        key={block.id}
                        className="absolute w-full"
                        style={{
                            top: `${startPosition}px`,
                            height: `${blockHeight}px`,
                            backgroundColor: blockColor,
                        }}
                    >

                    </div>
                );
            })}

            {/* Líneas de referencia para las horas */}
            {Array.from({ length: 25 }).map((_, hour) => (
                <div
                    key={hour}
                    className="absolute w-full border-t border-gray-400"
                    style={{ top: `${(hour / 24) * barHeight}px` }}
                >
                    <span className="text-xs text-gray-600">{hour}:00</span>
                </div>
            ))}
        </div>
    );
};

export default TimeBlockBar;