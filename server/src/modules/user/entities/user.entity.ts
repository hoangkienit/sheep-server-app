import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "Users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    fullName: string;

    @Column({ unique: true})
    username: string;

    @Column({ unique: true })
    phone: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: 'boolean', default: true})
    isActive: boolean;

    @Column({ type: 'text'})
    password: string;

    @Column({ type: 'text', array: true })
    address: string[];
}