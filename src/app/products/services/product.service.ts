import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Angular',
      price: 100,
      description: 'Angular Course'
    },
    {
      id: 2,
      name: 'Spring Boot',
      price: 150,
      description: 'Spring Boot Course'
    },
    {
      id: 3,
      name: 'MySQL',
      price: 200,
      description: 'MySQL Course'
    }
  ];
  constructor() { }

  findAll(): Observable<Product[]> {
    return of(this.products);
  }
}
