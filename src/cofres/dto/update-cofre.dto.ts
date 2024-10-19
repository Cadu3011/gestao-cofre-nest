import { PartialType } from '@nestjs/mapped-types';
import { CreateCofreDto } from './create-cofre.dto';

export class UpdateCofreDto extends PartialType(CreateCofreDto) {}
