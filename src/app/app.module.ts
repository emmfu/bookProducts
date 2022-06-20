import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductShelfComponent } from './components/product-shelf/product-shelf.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductShelfComponent,
    ProductItemComponent,
    MainMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
