export interface Cat {
  name: string;
  breed: string;
  age: number;
}

export interface CatFactory {
  create(name: string, age: number): Cat;
}
