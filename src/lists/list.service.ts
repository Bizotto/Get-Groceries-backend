import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateListDto } from './dto/create-list-dto';

@Injectable()
export class ListService {
  constructor(private prismaService: PrismaService) {}

  async createList(data: CreateListDto) {
    const { name } = data;

    //TODO: add validation on front end with something to make the user chose with want the same name
    const list = await this.prismaService.list.create({
      data: {
        name,
      },
    });

    return list;
  }

  async getAllLists() {
    return this.prismaService.list.findMany();
  }

  async deleteList(id: string) {
    await this.prismaService.list.delete({
      where: {
        id,
      },
    });
    return `List ${id} deleted`;
  }
}
