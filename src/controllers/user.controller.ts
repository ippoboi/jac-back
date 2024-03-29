import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { UserRegisterRequestDto } from '../dto/user/user-register.req.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from '../entities/User.entity';
import { Roles } from 'src/decorators/roles.decorator';
import JwtAuthGuard from '../guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { AddTokenDto } from '../dto/user/add-token.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('register')
  async register(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.register(userRegister);
  }

  @Post('token')
  async updateRtToken(
    @Param('id') id: number,
    @Body() addTokenDto: AddTokenDto,
  ) {
    return this.userService.updateRtToken(id, addTokenDto.token);
  }
}
