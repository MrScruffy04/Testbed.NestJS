import { Injectable } from '@nestjs/common'
import { GeneticRandomizerService } from '../evolution/services/geneticRandomizer.service'
import { Cat, CatFactory } from './types'

@Injectable()
export class MaineCoonFactory implements CatFactory {
  constructor(private readonly geneticRandomizer: GeneticRandomizerService) {}

  create(name: string, age: number): Cat {
    return {
      name,
      age,
      breed: 'Maine Coon',
      sex: this.geneticRandomizer.getSex(),
    };
  }
}
