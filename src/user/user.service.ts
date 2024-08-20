import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateResponseUserDto } from './dto/create-response-user.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async findOne(criteria: Partial<{ id: number; email: string }>) {
        return await this.userRepository.findOneBy(criteria)
    }

    async create(createUserDto: CreateUserDto): Promise<CreateResponseUserDto> {
        const { email } = createUserDto
        const userFound = await this.userRepository.findOneBy({ email })

        if (userFound) {
            throw new ConflictException(
                `User with email '${email}' already registered`
            )
        }

        const newUser = this.userRepository.create(createUserDto)
        const hashedPassword = hashSync(newUser.password, 10)
        newUser.password = hashedPassword
        const newUserCreated = await this.userRepository.save(newUser)

        const { password, ...atributes } = newUserCreated
        return atributes
    }

 
}
