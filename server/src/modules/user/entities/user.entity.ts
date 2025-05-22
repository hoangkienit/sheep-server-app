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

    @Column({ type: 'boolean', default: true})
    isActive: boolean;
}