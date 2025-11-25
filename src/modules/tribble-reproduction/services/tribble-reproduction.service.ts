import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { GeneticRandomizerService } from 'src/modules/evolution/services/geneticRandomizer.service';

const REPRODUCTION_RATES: Record<
  ReturnType<GeneticRandomizerService['getEnvironmentalConditions']>,
  number
> = {
  harsh: 0.15,
  normal: 0.1998,
  favorable: 0.26,
};

@Injectable()
export class TribbleReproductionService {
  private tribbleCount = 1;
  private generationCount = 0;

  constructor(
    private readonly geneticRandomizerService: GeneticRandomizerService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE, { name: 'tribble-reproduction' })
  reproduce() {
    this.generationCount++;
    const environmentalConditions =
      this.geneticRandomizerService.getEnvironmentalConditions();
    const reproductionRate = REPRODUCTION_RATES[environmentalConditions];

    this.tribbleCount += this.calculateNewTribbleCount(
      this.tribbleCount,
      reproductionRate,
    );

    console.log(
      `After ${this.generationCount} generations, under ${environmentalConditions} conditions, there are ${this.tribbleCount.toLocaleString()} tribbles.`,
    );
  }

  private calculateNewTribbleCount(
    initialTribbleCount: number,
    reproductionRate: number,
  ): number {
    const hoursPerGeneration = 12; // Logic dictates that 1 generation should be 12 hours, but we're scaling up to 1 generation per invocation.

    return Math.ceil(
      initialTribbleCount *
        Math.pow(Math.E, hoursPerGeneration * reproductionRate),
    );
  }
}
