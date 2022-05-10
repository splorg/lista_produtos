import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product?: Product

  onClose() {
    this.product = undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
