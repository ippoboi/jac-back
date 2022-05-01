import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@ApiTags('App')
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  async register(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return {};
  }

  @Get('protected')
  getHello(): string {
    return;
  }
}
