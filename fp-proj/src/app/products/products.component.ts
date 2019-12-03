import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'fp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) {
    productsService.getProducts().pipe(delay(2000)).subscribe(p => this.products = p);
  }

  ngOnInit() {
  }

}
