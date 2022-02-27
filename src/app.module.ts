import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/user/user.module';
import { EventModule } from './models/event/event.module';
import { RoleModule } from './models/role/role.module';

@Module({
  imports: [UserModule, RoleModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
