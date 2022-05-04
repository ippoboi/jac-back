import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/User.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.dateOfBirth = updateUserDto.dateOfBirth;
    user.roleId = updateUserDto.roleId;
    user.isActive = updateUserDto.isActive;

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }

  async register(userRegister: UserRegisterRequestDto): Promise<User> {
    const user = new User();
    user.firstName = userRegister.firstName;
    user.lastName = userRegister.lastName;
    user.email = userRegister.email;
    user.password = userRegister.password;

    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}
