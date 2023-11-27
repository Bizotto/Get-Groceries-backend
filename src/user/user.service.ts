import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(@Body() data: CreateUserDto) {
    const { name, password } = data;

    const exists = await this.prismaService.credentials.findFirst({
      where: {
        name,
      },
    });

    if (!name) throw new BadRequestException('Name is required');
    if (exists) throw new BadRequestException('Product already exists');

    return this.prismaService.credentials.create({
      data: {
        name,
        password,
      },
    });
  }

  async getAll() {
    return this.prismaService.credentials.findMany();
  }
}
