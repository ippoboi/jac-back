import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { UserModule } from './models/user/user.module';
import { QuestionModule } from './models/question/question.module';
import { RoleModule } from './models/role/role.module';
import { EventModule } from './models/event/event.module';
import { RegistrationModule } from './models/registration/registration.module';
import { DocumentModule } from './models/document/document.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    QuestionModule,
    RoleModule,
    EventModule,
    RegistrationModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
