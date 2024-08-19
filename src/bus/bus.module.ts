import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { busProviders } from './bus.providers';

@Module({
  imports:[],
  controllers: [BusController],
  providers: [BusService,...busProviders],
})
export class BusModule {}
