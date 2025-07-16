import { Injectable } from '@nestjs/common';
import { Dog, DogFactory } from './types';

@Injectable()
export class DoodleStrategy implements DogFactory {
  create(name: string, age: number): Dog {
    return {
      name,
      age,
      breed: 'Doodle',
    };
  }
}
