import { Injectable } from '@nestjs/common';
import { Cat, CatFactory } from './types';

@Injectable()
export class MaineCoonFactory implements CatFactory {
  create(name: string, age: number): Cat {
    return {
      name,
      age,
      breed: 'Maine Coon',
    };
  }
}
