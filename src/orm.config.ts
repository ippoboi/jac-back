import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_CONNECTION } from './config/connection';
import { Document } from './entities/Document.entity';
import { Event } from './entities/Event.entity';
import { eventsCategory } from './entities/eventsCategory.entity';
import { Question } from './entities/Question.entity';

import { Role } from './entities/Role.entity';
import { User } from './entities/User.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: DB_CONNECTION.PORT,
  username: DB_CONNECTION.USERNAME,
  password: DB_CONNECTION.PASSWORD,
  database: DB_CONNECTION.DATABASE,
  entities: [User, Question, Role, Event, Document, eventsCategory],
  synchronize: true,
  autoLoadEntities: true,
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'migrations',
};
