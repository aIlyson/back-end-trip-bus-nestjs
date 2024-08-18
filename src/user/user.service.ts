import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateResponseUserDto } from './dto/create-response-user.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>
    ) { }

    async findOne(email: string) {
        return await this.userRepository.findOneBy({ email })
    }

    async create(createUserDto: CreateUserDto): Promise<CreateResponseUserDto> {
        const { email } = createUserDto
        const userFound = await this.userRepository.findOneBy({ email })

        if (userFound) {
            throw new ConflictException(
                `User with email '${email}' already registered`
            )
        }

        const newUser = this.convertCreateUserDtoToUser(createUserDto)
        const hashedPassword = hashSync(newUser.password,10)
        newUser.password = hashedPassword
        const newUserCreated = await this.userRepository.save(newUser)

        const { password, ...atributes } = newUserCreated
        return atributes
    }

    private convertCreateUserDtoToUser(createUserDto: CreateUserDto) {
        const user = new User()
        user.name = createUserDto.name
        user.email = createUserDto.email
        user.password = createUserDto.password
        user.roles = createUserDto.roles
        return user
    }

}
