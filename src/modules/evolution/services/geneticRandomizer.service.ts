import { Injectable } from '@nestjs/common';

// Applying REQUEST scope here doesn't matter if the controller is scoped to DEFAULT (singleton)
@Injectable()
export class GeneticRandomizerService {
  constructor(public readonly fakeSeed: string) {
    console.log(`GeneticRandomizerService initialized with seed: ${fakeSeed}`);
  }

  getSex(): 'male' | 'female' {
    console.log(
      `GeneticRandomizerService.getSex called with seed: ${this.fakeSeed}`,
    );
    return Math.random() > 0.5 ? 'male' : 'female';
  }

  getEnvironmentalConditions(): 'harsh' | 'normal' | 'favorable' {
    const num = Math.random();

    if (num < 0.33) {
      return 'harsh';
    } else if (num < 0.8) {
      return 'normal';
    } else {
      return 'favorable';
    }
  }
}
