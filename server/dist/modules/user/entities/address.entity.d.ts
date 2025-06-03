import { User } from './user.entity';
export declare class Address {
    id: number;
    label: string;
    addressLine: string;
    lat: number;
    lng: number;
    isDefault: boolean;
    user: User;
}
