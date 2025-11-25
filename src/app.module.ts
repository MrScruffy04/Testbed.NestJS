import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { v4 as uuid } from 'uuid';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvolutionModule } from './modules/evolution/evolution.module';
import { PetModule } from './modules/pets/pet.module';
import { TribbleReproductionModule } from './modules/tribble-reproduction/tribble-reproduction.module';

@Module({
  imports: [
    EvolutionModule.forRoot({
      geneticRandomizerSeed: uuid(),
    }),
    PetModule,
    ScheduleModule.forRoot(),

    // Cron job modules
    TribbleReproductionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
