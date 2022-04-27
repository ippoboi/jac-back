import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleLabelsService } from './role-labels.service';
import { CreateRoleLabelDto } from './dto/create-role-label.dto';
import { UpdateRoleLabelDto } from './dto/update-role-label.dto';

@Controller('role-labels')
export class RoleLabelsController {
  constructor(private readonly roleLabelsService: RoleLabelsService) {}

  @Post()
  create(@Body() createRoleLabelDto: CreateRoleLabelDto) {
    return this.roleLabelsService.create(createRoleLabelDto);
  }

  @Get()
  findAll() {
    return this.roleLabelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleLabelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleLabelDto: UpdateRoleLabelDto) {
    return this.roleLabelsService.update(+id, updateRoleLabelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleLabelsService.remove(+id);
  }
}
