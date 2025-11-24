import { Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvolutionModule } from './modules/evolution/evolution.module';
import { PetModule } from './modules/pets/pet.module';

@Module({
  imports: [
    EvolutionModule.forRoot({
      geneticRandomizerSeed: uuid(),
    }),
    PetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
