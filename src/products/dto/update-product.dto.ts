import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  categoryId?: string;
}
