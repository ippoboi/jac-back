import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './models/user/user.module';
import { EventModule } from './models/event/event.module';
import { RoleModule } from './models/role/role.module';
import { Connection } from 'typeorm';
import { EventModule } from './event/event.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, EventModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
