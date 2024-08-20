import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { User } from 'src/user/decorator/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { Auth } from 'src/auth/decorator/auth.decorator';


@ApiTags('Bus')
@Controller('bus')
@Auth(Role.ENTERPRISE)
export class BusController {
  constructor(private readonly busService: BusService) {}

 
  @Post()
  create(@Body() createBusDto: CreateBusDto,@User() user:UserEntity) {
    return this.busService.create(createBusDto,user);
  }


  @Get()
  findAll() {
    return this.busService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busService.findOne(+id);
  }


  @Put(':id')
  update(@Param('id') id: string, @Body() updateBusDto: UpdateBusDto) {
    return this.busService.update(+id, updateBusDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busService.remove(+id);
  }
}
