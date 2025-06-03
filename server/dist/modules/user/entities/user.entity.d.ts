import { Address } from './address.entity';
export declare class User {
    id: number;
    fullName: string;
    username: string;
    phone: string;
    email: string;
    isActive: boolean;
    password: string;
    addresses: Address[];
}
