import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from './products.service';
import { delay } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserService } from '../core/user.service';
@Component({
  selector: 'fp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products$: Observable<Product[]>;
  constructor(private productsService: ProductsService, private userService: UserService) {
    this.products$ = productsService.products$;
    productsService.refreshProducts();
  }

  ngOnInit() {
    this.subscription = this.userService.isLoggedIn$.subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
