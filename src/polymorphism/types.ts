export interface Cat {
  name: string;
  breed: 'Maine Coon' | 'Chartreux';
  age: number;
}

export interface CatFactory {
  create(name: string, age: number): Cat;
}

export interface Dog {
  name: string;
  breed: 'Doodle' | 'Boxer';
  age: number;
}

export interface DogFactory {
  create(name: string, age: number): Dog;
}
