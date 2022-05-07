import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('UNICEF JAC API')
    .setDescription('UNICEF API Description')
    .setVersion('1.0')
    .addTag('UNICEF JAC')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  require('dotenv').config();
  console.log(process.env.PASSWORD);

  await app.listen(3000);
}
bootstrap();
