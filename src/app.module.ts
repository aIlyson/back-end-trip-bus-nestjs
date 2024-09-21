// module
import { Module } from '@nestjs/common';
import { BusModule } from './bus/bus.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    BusModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal:true})
  ],
  providers: [],
})
export class AppModule {}
