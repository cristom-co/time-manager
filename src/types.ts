export interface User {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    color: string;
}

export interface TimeBlock {
    id: string;
    userId: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
}