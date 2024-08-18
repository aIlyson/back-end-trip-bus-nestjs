import { HttpException, HttpStatus, Inject, Injectable, Post, UseGuards } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { Repository } from 'typeorm';
import { Bus } from './entities/bus.entity';

@Injectable()
export class BusService {

  constructor(
    @Inject('BUS_REPOSITORY')
    private readonly busRepository: Repository<Bus>
  ) { }


  async create(createBusDto: CreateBusDto) {
    console.log('rodei filho')
    const bus = new Bus()
    bus.seat = createBusDto.seat
    return await this.busRepository.save(bus)
  }

  findAll() {
    return this.busRepository.find()
  }

  async findOne(id: number) {
    return await this.busRepository.findOneBy({ id })
  }

  async update(id: number, updateBusDto: UpdateBusDto) {
    const busFound = await this.busRepository.findOneBy({ id })

    if (!busFound) {
      throw new HttpException('Bus not found', HttpStatus.NOT_FOUND)
    }

    busFound.seat = updateBusDto.seat
    return await this.busRepository.save(busFound)
  }

  async remove(id: number) {
    const bus = await this.busRepository.delete(id)

    if (!bus.affected) {
      throw new HttpException('Bus not found', HttpStatus.NOT_FOUND)
    }

  }


}
