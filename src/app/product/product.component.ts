import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {

    id: 1,
    name: "banana",
    brand: 'banana',
    price: 999.00,
    quantity: 1

  }

  constructor() { }

  ngOnInit(): void {
  }

}
