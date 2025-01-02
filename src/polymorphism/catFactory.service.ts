import { Injectable } from '@nestjs/common';
import { ChartreuxFactory } from './chartreux.service';
import { MaineCoonFactory } from './maineCoon.service';
import { Cat, CatFactory } from './types';

@Injectable()
export class CatFactoryService implements CatFactory {
  private catFactories: CatFactory[];

  constructor(
    maineCoonFactory: MaineCoonFactory,
    chartreuxFactory: ChartreuxFactory,
  ) {
    this.catFactories = [maineCoonFactory, chartreuxFactory];
  }

  create(name: string, age: number): Cat {
    const index = Math.floor(Math.random() * this.catFactories.length);

    const factory = this.catFactories[index];

    return factory.create(name, age);
  }
}
