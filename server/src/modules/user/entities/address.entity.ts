import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'Addresses' })
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string; // e.g. Home, Work

    @Column()
    addressLine: string;

    @Column('double precision') // or 'float'
    lat: number;

    @Column('double precision')
    lng: number;

    @Column({ default: false })
    isDefault: boolean;

    @ManyToOne(() => User, (user) => user.addresses)
    user: User;
}
