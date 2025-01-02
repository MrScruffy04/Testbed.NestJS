import { Module } from '@nestjs/common';
import { CatFactoryService } from './catFactory.service';
import { ChartreuxFactory } from './chartreux.service';
import { MaineCoonFactory } from './maineCoon.service';
import { PolymorphismController } from './polymorphism.controller';

@Module({
  imports: [],
  controllers: [PolymorphismController],
  providers: [CatFactoryService, ChartreuxFactory, MaineCoonFactory],
})
export class PolymorphismModule {}
