import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  GetCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  GetCategory(@Param('id') id: string) {
    return this.categoryService.getCategory(id);
  }

  @Post()
  AddCategory(@Body() body: CreateCategoryDto) {
    return this.categoryService.createCategory(body);
  }

  @Delete(':id')
  DeleteCategory(@Param('id') id: string) {
    this.categoryService.deleteCategory(id);
    return { message: `${id} deleted` };
  }
}
