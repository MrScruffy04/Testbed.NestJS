import { Injectable } from '@nestjs/common';
import { GeneticRandomizerService } from './geneticRandomizer.service';
import { Dog, DogFactory } from './types';

@Injectable()
export class DoodleStrategy implements DogFactory {
  constructor(private readonly geneticRandomizer: GeneticRandomizerService) {}

  create(name: string, age: number): Dog {
    return {
      name,
      age,
      breed: 'Doodle',
      sex: this.geneticRandomizer.getSex(),
    };
  }
}
