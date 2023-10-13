import { BadRequestException, Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(@Body() data: CreateCategoryDto) {
    try {
      const { name } = data;

      const exists = await this.prisma.category.findFirst({
        where: {
          name,
        },
      });

      if (!name) throw new BadRequestException('Name is required');
      if (exists) throw new BadRequestException('Category already exists');

      return this.prisma.category.create({ data });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async getAllCategories() {
    return this.prisma.category.findMany();
  }

  async getCategory(@Param('id') id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async deleteCategory(@Param('id') id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
