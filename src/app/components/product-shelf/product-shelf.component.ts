import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {
  
  isInCart:boolean = false;
  products = PRODUCTS;
  
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
