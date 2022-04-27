import { Injectable } from '@nestjs/common';
import { CreateRoleLabelDto } from './dto/create-role-label.dto';
import { UpdateRoleLabelDto } from './dto/update-role-label.dto';

@Injectable()
export class RoleLabelsService {
  create(createRoleLabelDto: CreateRoleLabelDto) {
    return 'This action adds a new roleLabel';
  }

  findAll() {
    return `This action returns all roleLabels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleLabel`;
  }

  update(id: number, updateRoleLabelDto: UpdateRoleLabelDto) {
    return `This action updates a #${id} roleLabel`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleLabel`;
  }
}
