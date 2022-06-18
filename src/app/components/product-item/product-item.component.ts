import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  products = PRODUCTS;
  product=this.products[1];
  isInCart:boolean=false;

  onAddToCart(product:Product):void {
    console.log(product);
    this.isInCart=true;
  }

  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
