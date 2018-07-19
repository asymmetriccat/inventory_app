import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent implements OnInit {

  constructor() { }

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  ngOnInit() {
  }

}
