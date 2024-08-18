import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
    USER = 'USER',
    ENTERPRISE = 'ENTERPRISE' 
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;
}