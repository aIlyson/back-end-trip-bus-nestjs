import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Role } from 'src/auth/enum/role.enum';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { User } from 'src/user/decorator/user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';


@ApiTags('Bus')
@Controller('bus')
@UseGuards(AuthGuard,RolesGuard)
@Roles(Role.ENTERPRISE)
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
