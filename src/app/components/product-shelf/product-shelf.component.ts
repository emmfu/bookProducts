import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/products';
import { OnselectService } from 'src/app/services/onselect.service';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {
  
  isInCart:boolean = false;
  products = PRODUCTS;
  selectedProduct?:Product;

  @Output() msgToSibling = new EventEmitter<Product>();
  
  onSelect(product:Product):void {
    
    console.log(product);
    this.appService.updateSelectedProduct(product);
  }

  onAddToCart(product:Product):void {
    console.log(product);
    this.isInCart=true;
  }


  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }

  constructor(private appService:OnselectService) { }

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(selProd => this.selectedProduct = selProd);
  }

}
