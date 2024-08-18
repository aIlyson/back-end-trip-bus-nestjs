import { Role } from "../entities/user.entity"


export class CreateResponseUserDto {
    id:number
    name:string
    email:string
    role:Role
}