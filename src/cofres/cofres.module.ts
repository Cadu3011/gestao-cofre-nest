import { Module } from '@nestjs/common';
import { CofresService } from './cofres.service';
import { CofresController } from './cofres.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [CofresController],
  providers: [CofresService],
})
export class CofresModule {}
