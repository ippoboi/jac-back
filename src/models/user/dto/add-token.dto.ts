import { IsString } from 'class-validator';

export class AddTokenDto {
  @IsString()
  token: string;
}
