import { BadRequestException, Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(@Body() data: CreateProductDto): Promise<any> {
    try {
      const { categoryId, name, price, description } = data;

      const exists = await this.prisma.product.findFirst({
        where: {
          name,
        },
      });

      if (!name) throw new BadRequestException('Name is required');
      if (!price) throw new BadRequestException('Price is required');
      if (exists) throw new BadRequestException('Product already exists');

      const product = await this.prisma.product.create({
        data: {
          name,
          price,
          description,
          category_id: categoryId,
        },
      });

      return product;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async getAllProducts() {
    return this.prisma.product.findMany();
  }

  async getProductById(@Param('id') id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteProduct(@Param('id') id: string) {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
    return;
  }

  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDto) {
    try {
      const { name, price, categoryId, description } = data;

      const exists = await this.prisma.product.findFirst({
        where: {
          name,
        },
      });

      if (!name) throw new BadRequestException('Name is required');
      if (!price) throw new BadRequestException('Price is required');
      if (exists) throw new BadRequestException('Product name already exist');

      const product = await this.prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          description,
          category_id: categoryId,
        },
      });
      return product;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
