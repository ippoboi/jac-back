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

import { DocumentModule } from './models/document/document.module';
import { EventsCategoryModule } from './models/events-category/events-category.module';
import { AuthModule } from './models/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './models/file/file.controller';
import { FileService } from './models/file/file.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    UserModule,
    QuestionModule,
    RoleModule,
    EventModule,

    DocumentModule,
    EventsCategoryModule,
    AuthModule,
    MulterModule.register({ dest: './uploads' }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController, FileController],
  providers: [
    AppService,
    FileService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
