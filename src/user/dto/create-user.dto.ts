import { Role } from "../entities/user.entity"

export class CreateUserDto{
      name:string
      password: string
      email: string
      role: Role
}