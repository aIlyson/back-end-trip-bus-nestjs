import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';



@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  exports:[UserService],
  providers: [UserService,...userProviders],
})
export class UserModule {}
