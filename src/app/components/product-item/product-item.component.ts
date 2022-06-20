import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { OnselectService } from 'src/app/services/onselect.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  currentSelectedProduct?: Product;


  onAddToCart():void {
    console.log(this.currentSelectedProduct);
  }

  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }

  constructor(private appService:OnselectService) { }

  ngOnInit(): void {
    this.appService.currentSelectedProduct.subscribe(product => this.currentSelectedProduct = product)
  }

}
