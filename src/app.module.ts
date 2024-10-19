import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CofresModule } from './cofres/cofres.module';

@Module({
  imports: [DatabaseModule, CofresModule] 
})
export class AppModule {}
