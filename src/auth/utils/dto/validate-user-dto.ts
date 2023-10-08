import { IsString } from 'class-validator';

export class ValidateUser {
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  email: string;
}
