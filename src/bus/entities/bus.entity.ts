import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Bus {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    seat:number
}
