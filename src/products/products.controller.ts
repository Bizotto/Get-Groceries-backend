import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  GetProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  GetProduct(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Get('/category/:id')
  GetProductsByCategory(@Param('id') id: string) {
    return this.productsService.getProductsByCategory(id);
  }

  @Post()
  CreateProduct(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body);
  }

  @Patch(':id')
  UpdateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(id, body);
  }

  @Delete(':id')
  DeleteProduct(@Param('id') id: string) {
    this.productsService.deleteProduct(id);
    return { message: `${id} deleted` };
  }
}
