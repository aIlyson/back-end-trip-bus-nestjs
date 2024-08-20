import { ApiProperty } from "@nestjs/swagger";
import { BusCategory } from "../entities/bus.entity";


export class CreateBusDto {
    @ApiProperty({example:100,required:true})
    seat:number

    category:BusCategory
}
