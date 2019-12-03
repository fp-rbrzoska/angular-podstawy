import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products.service';
@Component({
  selector: 'fp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

}
