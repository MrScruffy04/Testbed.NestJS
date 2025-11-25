import { DynamicModule, Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { GeneticRandomizerService } from '../evolution/services/geneticRandomizer.service';

interface EvolutionModuleOptions {
  geneticRandomizerSeed?: string;
}

@Module({})
export class EvolutionModule {
  static forRoot(options: EvolutionModuleOptions): DynamicModule {
    return {
      module: EvolutionModule,
      global: true,
      providers: [
        {
          provide: GeneticRandomizerService,
          useFactory: () =>
            new GeneticRandomizerService(
              options.geneticRandomizerSeed ?? uuid(),
            ),
        },
      ],
      exports: [GeneticRandomizerService],
    };
  }
}
