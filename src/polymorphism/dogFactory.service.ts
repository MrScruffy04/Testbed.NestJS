import { Inject, Injectable } from '@nestjs/common';
import { Dog, DogFactory } from './types';

type DogFactoryMap = Record<Dog['breed'], DogFactory>;

@Injectable()
export class DogFactoryService implements DogFactory {
  constructor(
    @Inject('DOG_STRATEGIES') private readonly strategies: DogFactoryMap,
  ) {
    if (Object.keys(this.strategies).length === 0) {
      throw new Error('No dog strategies provided');
    }
  }

  create(name: string, age: number): Dog {
    const breed = this.calculateBreed(name, age);

    const strategy = this.strategies[breed];

    return strategy.create(name, age);
  }

  private calculateBreed(name: string, age: number): Dog['breed'] {
    const num = name.length + age;
    return num % 2 === 0 ? 'Doodle' : 'Boxer';
  }
}
