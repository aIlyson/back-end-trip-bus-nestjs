import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';


@ApiTags('Bus')
@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBusDto: CreateBusDto) {
    return this.busService.create(createBusDto);
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
