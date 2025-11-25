import { Injectable } from '@nestjs/common';
import { CatFactoryService } from './catFactory.service';
import { DogFactoryService } from './dogFactory.service';
import { Cat, Dog } from './types';

@Injectable()
export class PetsService {
  constructor(
    private readonly catFactory: CatFactoryService,
    private readonly dogFactory: DogFactoryService,
  ) {}

  createCat(name: string, age: number): Cat {
    return this.catFactory.create(name, age);
  }

  createDog(name: string, age: number): Dog {
    return this.dogFactory.create(name, age);
  }
}
