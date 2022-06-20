import { Component } from '@angular/core';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mybooks';

  currentSelectedProductFromShelftoItem?:Product;

  fwdMsgToProductItem($event: Product) { this.currentSelectedProductFromShelftoItem = $event; }
}
