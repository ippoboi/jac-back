import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './entity/User.entity';
import * as bcrypt from 'bcrypt';
import { Role } from '../role/entity/Role.entity';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private roleService: RoleService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.email = createUserDto.email.toLocaleLowerCase();

    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      select: [
        'id',
        'age',
        'email',
        'firstName',
        'lastName',
        'job',
        'phone',
        'role',
      ],
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.email = updateUserDto.email;
    user.password = hashedPassword; //verifier que la modification du mdp marche
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.age = updateUserDto.age;
    user.job = updateUserDto.job;
    user.role = updateUserDto.role;
    user.isActive = updateUserDto.isActive;

    return this.userRepository.save(user);
  }

  async updateRtToken(id: number, token: string) {
    const user = await this.findOne(id);

    if (!(token == null)) {
      const salt = await bcrypt.genSalt();
      user.token = await bcrypt.hash(token, salt);
    } else {
      user.token = token;
    }

    this.userRepository.save(user);
    return user;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }

  async register(userRegister: UserRegisterRequestDto): Promise<User> {
    const user = new User();

    const baseRole = await this.roleService.findOne(1);
    user.role = [baseRole];

    user.firstName = userRegister.firstName;
    user.lastName = userRegister.lastName;
    user.email = userRegister.email.toLocaleLowerCase();
    user.password = userRegister.password;

    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
