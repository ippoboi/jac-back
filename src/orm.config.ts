import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_CONNECTION } from './config/connection';
import { Document } from './models/document/entity/Document.entity';
import { Event } from './models/event/entity/Event.entity';
import { eventsCategory } from './models/events-category/entities/eventsCategory.entity';
import { Question } from './models/question/entity/Question.entity';
import { Registration } from './models/registration/entity/Registration.entity';
import { Role } from './models/role/entity/Role.entity';
import { User } from './models/user/entity/User.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: DB_CONNECTION.PORT,
  username: DB_CONNECTION.USERNAME,
  password: DB_CONNECTION.PASSWORD,
  database: DB_CONNECTION.DATABASE,
  entities: [
    User,
    Question,
    Role,
    Event,
    Registration,
    Document,
    eventsCategory,
  ],
  synchronize: true,
  autoLoadEntities: true,
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'migrations',
};
