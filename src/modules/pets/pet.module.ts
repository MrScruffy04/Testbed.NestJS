import { Module } from '@nestjs/common'
import { BoxerStrategy } from './boxer.strategy'
import { CatFactoryService } from './catFactory.service'
import { ChartreuxFactory } from './chartreux.service'
import { DogFactoryService } from './dogFactory.service'
import { DoodleStrategy } from './doodle.strategy'
import { MaineCoonFactory } from './maineCoon.service'
import { PetController } from './pet.controller'
import { PetsService } from './pets.service'

@Module({
  imports: [],
  controllers: [PetController],
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
    PetsService,
  ],
})
export class PetModule {}
