import { Role } from "src/auth/enum/role.enum"

export class CreateResponseUserDto {
    id:number
    name:string
    email:string
    roles:Role[]
}