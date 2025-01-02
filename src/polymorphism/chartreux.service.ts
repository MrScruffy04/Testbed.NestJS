import { Injectable } from '@nestjs/common';
import { Cat, CatFactory } from './types';

@Injectable()
export class ChartreuxFactory implements CatFactory {
  create(name: string, age: number): Cat {
    return {
      name,
      age,
      breed: 'Chartreux',
    };
  }
}
