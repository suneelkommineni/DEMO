import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeimagesComponent } from './homeimages/homeimages.component';
import { SingleproductdetailsComponent } from './singleproductdetails/singleproductdetails.component';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo: 'products'},
  {path: 'products', component: ProductsComponent}, 
  {path: 'searchproducts', component: SearchproductsComponent}, 
  // {path: 'searchproducts/:colour', component: SearchproductsComponent}, 
  {path: 'searchproducts/:categoryID', component: SearchproductsComponent},
  {path: 'searchproducts/:any', component: SearchproductsComponent},
  {path: 'Singleproductdetails/:term', component: SingleproductdetailsComponent},
  {path: '**', redirectTo: '' },
];



@NgModule({
  
  declarations: [
    AppComponent,
    ProductsComponent,
    LeftpanelComponent,
    FooterComponent,
    HomeimagesComponent,
    SingleproductdetailsComponent,
    SearchproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
