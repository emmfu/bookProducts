import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {
  
  isInCart:boolean = false;
  products:any;
  selectedProduct?:Product;

  url='http://localhost:8080/api/v1/product/all'

  @Output() msgToSibling = new EventEmitter<Product>();

  getProducts():void {
    this.http.get(this.url).subscribe(data =>this.products = data);
  }


  
  onSelect(product:Product):void {
    this.appService.updateSelectedProduct(product);
  }

  onAddToCart(product:Product):void {
    //addToCart(product);
    console.log(product);
    this.isInCart=true;
  }

  getId(isbn: string):string {
    return "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg"
  }

  constructor(private appService:ProductService, private http: HttpClient) { }

  

  ngOnInit(): void {
    
    this.appService.currentSelectedProduct.subscribe(selProd => this.selectedProduct = selProd);
    this.getProducts();
    
  }

}
