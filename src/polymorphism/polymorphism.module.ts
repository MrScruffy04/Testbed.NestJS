import { Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { BoxerStrategy } from './boxer.strategy';
import { CatFactoryService } from './catFactory.service';
import { ChartreuxFactory } from './chartreux.service';
import { DogFactoryService } from './dogFactory.service';
import { DoodleStrategy } from './doodle.strategy';
import { GeneticRandomizerService } from './geneticRandomizer.service';
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
      useFactory: (doodle, boxer) => ({
        Doodle: doodle,
        Boxer: boxer,
      }),
      inject: [DoodleStrategy, BoxerStrategy],
    },
    {
      provide: GeneticRandomizerService,
      useFactory: () => new GeneticRandomizerService(uuid()),
    },
  ],
})
export class PolymorphismModule {}
