import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
@Component({
  selector: 'fp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'prod1',
      price: 10.99,
      category: 'food',
      description: 'asaasd prod1 descr'
    },
    {
      id: '2',
      name: 'prod2',
      price: 2.99,
      category: 'food',
      description: 'asaasd prod1 descr2'
    },
    {
      id: '3',
      name: 'prod3',
      price: 33.39,
      category: 'electronic',
      description: 'asaasd prod1 descr3'
    },
    {
      id: '4',
      name: 'prod4',
      price: 140.49,
      category: 'electronic',
      description: 'asaasd prod1 descr4'
    },
    {
      id: '5',
      name: 'prod1',
      price: 5.99,
      category: 'food',
      description: 'asaasd prod1 descr5'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
