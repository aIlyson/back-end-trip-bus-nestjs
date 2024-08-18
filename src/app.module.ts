import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [BusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
