import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository:Repository<User>
    ){}

   async findOne(email:string){
        return await this.userRepository.findOneBy({email})
   }

}
