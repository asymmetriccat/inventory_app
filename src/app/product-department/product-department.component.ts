import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',

})
export class ProductDepartmentComponent implements OnInit {

  constructor() { }
  @Input() product: Product;
  ngOnInit() {
  }

}
