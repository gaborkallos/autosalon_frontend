import {Administrator} from '../administrator/administrator';

export class Car {
  id: number;
  manufacture: string;
  model: string;
  yearOfManufacture: string;
  price: number;
  administrator: Administrator[];
}
