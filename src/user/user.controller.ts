import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { CreateResponseUserDto } from './dto/create-response-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Post()
    async create(@Body() user: CreateUserDto): Promise<CreateResponseUserDto>  {
      return await this.userService.create(user);
    }
}
