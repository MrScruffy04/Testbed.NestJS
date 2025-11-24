import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { DiagnosticInterceptor } from './diagnostic.interceptor';
import { PetsService } from './pets.service';
import { Cat, Dog } from './types';

@UseInterceptors(DiagnosticInterceptor)
@Controller()
export class PetController {
  constructor(private readonly petsService: PetsService) {}

  @Post('cats')
  createCat(@Body() body: { name: string; age: number }): Cat {
    const cat = this.petsService.createCat(body.name, body.age);

    return cat;
  }

  @Post('dogs')
  createDog(@Body() body: { name: string; age: number }): Dog {
    const dog = this.petsService.createDog(body.name, body.age);

    return dog;
  }
}
