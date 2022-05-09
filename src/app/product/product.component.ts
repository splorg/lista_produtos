import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS

  public mode = 'list'

  selectedProduct?: Product

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.selectedProduct = product
  }


}
