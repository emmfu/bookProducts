import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductShelfComponent } from './components/product-shelf/product-shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductShelfComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'shelf', component: ProductShelfComponent},
      {path: 'item', component: ProductItemComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
