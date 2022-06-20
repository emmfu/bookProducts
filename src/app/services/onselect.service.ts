import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class OnselectService {

  product?:Product;
  private selectedProduct = new BehaviorSubject(this.product);
  currentSelectedProduct = this.selectedProduct.asObservable();

  constructor() { }

  updateSelectedProduct(product:Product) {
    this.selectedProduct.next(product);
  }
}
