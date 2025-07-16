import { Module } from '@nestjs/common';
import { BoxerStrategy } from './boxer.strategy';
import { CatFactoryService } from './catFactory.service';
import { ChartreuxFactory } from './chartreux.service';
import { DogFactoryService } from './dogFactory.service';
import { DoodleStrategy } from './doodle.strategy';
import { MaineCoonFactory } from './maineCoon.service';
import { PolymorphismController } from './polymorphism.controller';

@Module({
  imports: [],
  controllers: [PolymorphismController],
  providers: [
    CatFactoryService,
    ChartreuxFactory,
    MaineCoonFactory,
    DogFactoryService,
    DoodleStrategy,
    BoxerStrategy,
    {
      provide: 'DOG_STRATEGIES',
      useFactory: (doodle, boxer) => [doodle, boxer],
      inject: [DoodleStrategy, BoxerStrategy],
    },
  ],
})
export class PolymorphismModule {}
