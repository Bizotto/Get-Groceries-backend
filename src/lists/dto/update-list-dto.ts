import { IsNotEmpty, IsString } from 'class-validator';
import { CreateListDto } from './create-list-dto';

export class UpdateListDto extends CreateListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string;
}
