import { PetController } from 'src/modules/pets/pet.controller';

export type CatParams = Parameters<PetController['createCat']>[0];
export type DogParams = Parameters<PetController['createDog']>[0];
