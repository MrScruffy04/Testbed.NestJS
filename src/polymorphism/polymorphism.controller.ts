import { Body, Controller, Post } from '@nestjs/common';
import { CatFactoryService } from './catFactory.service';
import { Cat } from './types';

@Controller('cats')
export class PolymorphismController {
  constructor(private readonly catFactory: CatFactoryService) {}

  @Post()
  polymorphism(@Body() body: { name: string; age: number }): Cat {
    const cat = this.catFactory.create(body.name, body.age);

    return cat;
  }
}
