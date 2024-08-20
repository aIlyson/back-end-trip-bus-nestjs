import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Role } from "src/auth/enum/role.enum";
import { BusEntity } from "src/bus/entities/bus.entity";

@Entity('user')
export class UserEntity {
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

    @OneToMany(()=> BusEntity,(bus)=> bus.user)
    bus: BusEntity[]
}