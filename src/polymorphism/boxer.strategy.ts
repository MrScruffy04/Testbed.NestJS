import { Injectable } from '@nestjs/common';
import { GeneticRandomizerService } from './geneticRandomizer.service';
import { Dog, DogFactory } from './types';

@Injectable()
export class BoxerStrategy implements DogFactory {
  constructor(private readonly geneticRandomizer: GeneticRandomizerService) {}

  create(name: string, age: number): Dog {
    return {
      name,
      age,
      breed: 'Boxer',
      sex: this.geneticRandomizer.getSex(),
    };
  }
}
