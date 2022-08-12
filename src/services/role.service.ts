import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { CreateRoleDto } from '../dto/role/create-role.dto';
import { UpdateRoleDto } from '../dto/role/update-role.dto';
import { Role } from '../entities/Role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(newRole);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id);

    role.id = updateRoleDto.id;
    role.roleLabel = updateRoleDto.roleLabel;

    return this.roleRepository.save(role);
  }

  async remove(id: number) {
    const role = await this.findOne(id);
    return this.roleRepository.remove(role);
  }
}
