import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';

@Global()
@Module({
  imports:[],
  controllers: [UserController],
  exports:[UserService],
  providers: [UserService,...userProviders],
})
export class UserModule {}
