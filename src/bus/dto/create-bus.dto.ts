import { ApiProperty } from "@nestjs/swagger";

export class CreateBusDto {

    @ApiProperty({example:100,required:true})
    seat:number
    
}
