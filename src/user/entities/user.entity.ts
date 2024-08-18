import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { Role } from "src/auth/enum/role.enum";

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
    roles: Role[];
}