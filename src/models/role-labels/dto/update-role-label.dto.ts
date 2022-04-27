import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleLabelDto } from './create-role-label.dto';

export class UpdateRoleLabelDto extends PartialType(CreateRoleLabelDto) {}
