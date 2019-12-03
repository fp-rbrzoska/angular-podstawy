import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

export const apiUrl = environment.apiUrl;

@Injectable()
export class ProductsService {

  private productsSubj = new BehaviorSubject<Product[]>(null);

  products$ = this.productsSubj.asObservable();

  constructor(private http: HttpClient) { }

  refreshProducts() {
    this.http.get<Product[]>(apiUrl + '/products')
    .pipe(delay(3000))
    .subscribe(p => this.productsSubj.next(p));
  }
}
