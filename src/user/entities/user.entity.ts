import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Role } from "src/auth/enum/role.enum";
import { Bus } from "src/bus/entities/bus.entity";

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

    @OneToMany(()=> Bus,(bus)=> bus.user)
    bus: Bus[]
}