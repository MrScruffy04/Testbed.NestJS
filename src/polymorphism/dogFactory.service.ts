import { Inject, Injectable } from '@nestjs/common';
import { Dog, DogFactory } from './types';

@Injectable()
export class DogFactoryService implements DogFactory {
  constructor(
    @Inject('DOG_STRATEGIES') private readonly strategies: DogFactory[],
  ) {
    if (this.strategies.length === 0) {
      throw new Error('No dog strategies provided');
    }
  }

  create(name: string, age: number): Dog {
    const index = Math.floor(Math.random() * this.strategies.length);

    const strategy = this.strategies[index];

    return strategy.create(name, age);
  }
}
