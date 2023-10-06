import { IsString } from 'class-validator';

export class ValidateUser {
  @IsString()
  name: string;

  @IsString()
  email: string;
}
