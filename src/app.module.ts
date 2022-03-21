import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './models/user/user.module';
import { EventModule } from './models/event/event.module';
import { RoleModule } from './models/role/role.module';
import { RegistrationModule } from './models/registration/registration.module';
import { QuestionModule } from './models/question/question.module';
import { DocumentModule } from './models/document/document.module';
import { User } from './entity/User';
import { Question } from './entity/Question';
import { Role } from './entity/Role';
import { Document } from './entity/Document';
import { Event } from './entity/Event';
import { Registration } from './entity/Registration';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localost',
      port: '5432',
      username: 'postgres',
      password: 'SuperMdp',
      database: 'test',
      entities: [User, Question, Role, Document, Event, Registration],
      synchronize: true,
    }),
    UserModule,
    EventModule,
    RoleModule,
    RegistrationModule,
    QuestionModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
