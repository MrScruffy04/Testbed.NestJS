import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CatFactoryService } from './catFactory.service';
import { DiagnosticInterceptor } from './diagnostic.interceptor';
import { DogFactoryService } from './dogFactory.service';
import { Cat, Dog } from './types';

@UseInterceptors(DiagnosticInterceptor)
@Controller()
export class PolymorphismController {
  constructor(
    private readonly catFactory: CatFactoryService,
    private readonly dogFactory: DogFactoryService,
  ) {}

  @Post('cats')
  polymorphicCat(@Body() body: { name: string; age: number }): Cat {
    const cat = this.catFactory.create(body.name, body.age);

    return cat;
  }

  @Post('dogs')
  polymorphicDog(@Body() body: { name: string; age: number }): Dog {
    const dog = this.dogFactory.create(body.name, body.age);

    return dog;
  }
}
