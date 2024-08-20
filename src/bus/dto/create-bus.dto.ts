import { ApiProperty } from "@nestjs/swagger";
import { BusCategory } from "../entities/bus.entity";
import { User } from "src/user/entities/user.entity";

export class CreateBusDto {

    @ApiProperty({example:100,required:true})
    seat:number


    category:BusCategory

    user:User
    
}
