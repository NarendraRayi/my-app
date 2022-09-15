import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-addocart2',
  templateUrl: './addocart2.component.html',
  styleUrls: ['./addocart2.component.css'],
})
export class Addocart2Component implements OnInit {
  public name: string = '';
  public price: number = 0;
  public quantity: number = 0;
  public totalCost: number = 0;

  public products: Product[] = [];
  
  constructor() {}

  ngOnInit(): void {}

  cart2() {
    this.products.push(
      {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      }
    );
    this.total();
  }
  sortLowToHigh() {
    this.products.sort((a, b) => a.price - b.price);
  }
  sortHighToLow() {
    this.products.sort((a, b) => b.price - a.price);
  }
  delete(i: number) {
    this.products.splice(i, 1);
  }
  clear() {
    this.products = [];
  }
  total() {
    this.totalCost = 0;
    for(let product of this.products)
    this.totalCost = this.totalCost + (this.price * this.quantity);
  }

}
