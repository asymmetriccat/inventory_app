import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FormSkuComponent } from './form-sku/form-sku.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PriceServiceComponent } from './price-service/price-service.component';
import { InjectorDemoComponent } from './injector-demo/injector-demo.component';
import {UserService} from './injector-demo/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    FormSkuComponent,
    UserComponent,
    PriceServiceComponent,
    InjectorDemoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
