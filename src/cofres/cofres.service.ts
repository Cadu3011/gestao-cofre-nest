import { Inject, Injectable } from '@nestjs/common';
import { CreateCofreDto } from './dto/create-cofre.dto';
import { UpdateCofreDto } from './dto/update-cofre.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CofresService {
  @Inject()
  private readonly prisma: PrismaService

  async create(createCofreDto: CreateCofreDto) {
     createCofreDto.dateSaldo = new Date()
    const cofreFind = await this.findOne(createCofreDto.filial,createCofreDto.dateSaldo)
    if(this.CofreIsEmpty(cofreFind)){
      return this.prisma.cofre.create({data:{...createCofreDto}})
    }
    return false
  }

  findAll() {
    return this.prisma.cofre.findMany()
  }
   CofreIsEmpty(obj: any): boolean {
    return obj === null || obj === undefined || Object.keys(obj).length === 0;
  }
  findOne(filial:string ,date: Date) {
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    endOfDay.setHours(23, 59, 59, 999);
    return this.prisma.cofre.findFirst({where:{filial:filial,dateSaldo:{gte: startOfDay,lt: endOfDay,}}})
  }

  update(id: number, updateCofreDto: UpdateCofreDto) {
    return `This action updates a #${id} cofre`;
  }

  removeFromNameDate(filial:string ,date: Date) {
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    endOfDay.setHours(23, 59, 59, 999);
    return this.prisma.cofre.deleteMany({where:{filial:filial,dateSaldo:{gte: startOfDay,lt: endOfDay,}}})
  }
}
