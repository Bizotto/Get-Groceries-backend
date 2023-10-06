import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateListDto } from './dto/create-list-dto';
import { ListService } from './list.service';

@Controller('lists')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  async createList(@Body() body: CreateListDto) {
    return this.listService.createList(body);
  }

  @Get()
  async getAllLists() {
    return this.listService.getAllLists();
  }

  @Delete(':id')
  async deleteList(@Param('id') id: string) {
    return this.listService.deleteList(id);
  }
}
