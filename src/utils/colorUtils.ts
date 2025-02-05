// src/utils/colorUtils.ts
export const generateColor = (seed: string): string => {
    // Genera un color hexadecimal basado en el ID del bloque de tiempo
    const hash = seed.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const color = `#${((hash * 1234567) % 16777215).toString(16).padStart(6, '0')}`;
    return color;
};