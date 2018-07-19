import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
})
export class PriceDisplayComponent implements OnInit {

  constructor() { }
  @Input() price: number;
  ngOnInit() {
  }

}
