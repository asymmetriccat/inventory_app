import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',

})
export class ProductsListComponent implements OnInit {
  private currentProduct: Product;

  constructor() {
    this.onProductSelected= new EventEmitter<Product>();
  }

  @Input() productList: Product[];

  @Output () onProductSelected: EventEmitter<Product>;

  clicked(product: Product){
    this.currentProduct= product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean{
    if(!product || this.currentProduct){
      return false;
    }
    return product.sku===this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
