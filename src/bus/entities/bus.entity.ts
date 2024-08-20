import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum BusCategory{
    Executive = 'EXECUTIVE',
    SEMI_SLEEP = 'SEMI_SLEEPE',
    SLEEPER = 'SLEEPER'
}

@Entity('bus')
export class BusEntity {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    seat:number

    @Column({
        type:'enum',
        enum:BusCategory,
        default:BusCategory.Executive
    })
    category:BusCategory

    @ManyToOne(()=> UserEntity,(user)=>user.bus)
    user:UserEntity

}
