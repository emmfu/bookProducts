import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-products';
import { Product } from 'src/app/models/products';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css'],
 
})
export class ProductShelfComponent implements OnInit {
  
  isInCart:boolean = false;
  products:any;

  books: any;
  url='http://localhost:8080/api/v1/product/all'
  constructor(private http: HttpClient) { }
  
  onAddToCart(product:Product):void {
    console.log(product);
    this.isInCart=true;
  }


  getId(id: number):string {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  }


  getProducts(): void{
    this.http.get(this.url).subscribe(data => {this.products = data})
    
  }

  ngOnInit(): void {
    this.getProducts()
    
  
  }

}
