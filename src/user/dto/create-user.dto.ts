import { Role } from "src/auth/enum/role.enum"

export class CreateUserDto{
      name:string
      password: string
      email: string
      roles: Role[]
}