import { Module } from '@nestjs/common';
import { TribbleReproductionService } from './services/tribble-reproduction.service';

@Module({
  providers: [TribbleReproductionService],
})
export class TribbleReproductionModule {}
