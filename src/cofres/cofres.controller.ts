import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CofresService } from './cofres.service';
import { CreateCofreDto } from './dto/create-cofre.dto';
import { UpdateCofreDto } from './dto/update-cofre.dto';

@Controller('cofres')
export class CofresController {
  constructor(private readonly cofresService: CofresService) {}

  @Post()
  create(@Body() createCofreDto: CreateCofreDto) {
    return this.cofresService.create(createCofreDto);
  }

  @Get()
  findAll() {
    return this.cofresService.findAll();
  }

  @Get(':filial/:date')
  findOne(@Param('filial') filial: string, @Param('date') date: string) { 
    const formatDate = new Date(date)
    return this.cofresService.findOne(filial,formatDate);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCofreDto: UpdateCofreDto) {
    return this.cofresService.update(+id, updateCofreDto);
  }

  @Delete(':filial/:date')
  remove(@Param('filial') filial: string, @Param('date') date: string) {
    const formatDate = new Date(date)
    return this.cofresService.removeFromNameDate(filial,formatDate);
  }
}
