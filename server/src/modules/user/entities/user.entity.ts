import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Address } from './address.entity';

@Entity({ name: "Users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    fullName: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    phone: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'text' })
    password: string;

    @OneToMany(() => Address, (address) => address.user, { cascade: true, eager: true })
    addresses: Address[];
}
