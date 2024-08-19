import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Bus {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    seat:number

    @ManyToOne(()=> User,(user)=>user.bus)
    user:User

}
