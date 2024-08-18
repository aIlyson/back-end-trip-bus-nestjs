import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { DatabaseModule } from 'src/database/database.module';
import { busProviders } from './bus.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [BusController],
  providers: [BusService,...busProviders],
})
export class BusModule {}
